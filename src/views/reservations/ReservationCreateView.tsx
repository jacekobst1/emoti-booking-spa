import {useMemo, useState} from "react";
import {DayPicker} from "react-day-picker";
import "react-day-picker/src/style.css";
import {format} from "date-fns";
import {Link, useNavigate} from "react-router-dom";
import {ReservationsListRoute} from "router/routes.tsx";
import {useReservationStore} from "store/reservationStore.ts";
import fireToast from "lib/toast";

function ReservationCreateView() {
    const {postReservation} = useReservationStore();
    const [dateFrom, setDateFrom] = useState<Date>();
    const [dateTo, setDateTo] = useState<Date>();
    const navigate = useNavigate();

    const {formattedDateFrom, formattedDateTo} = useMemo(() => {
        return {
            formattedDateFrom: dateFrom ? format(dateFrom, 'yyyy-MM-dd') : '',
            formattedDateTo: dateTo ? format(dateTo, 'yyyy-MM-dd') : '',
        }
    }, [dateFrom, dateTo]);

    async function save() {
        await postReservation({
            date_from: formattedDateFrom,
            date_to: formattedDateTo,
        });
        void fireToast('success', 'Reservation was created');
        navigate(ReservationsListRoute.path);
    }

    return (
        <>
            <div className="container mx-auto flex flex-col mt-10">
                <div>
                </div>

                <div className="flex flex-col items-center">
                    <h1 className="text-3xl ml-2">Create new reservation</h1>

                    <div className="flex mt-20">
                        <div className="flex flex-col items-start">
                            <div>
                                <span className="font-bold text-xl ml-5">Date from:</span>
                                <span className="text-primary font-bold ml-2">{formattedDateFrom}</span>
                            </div>
                            <div className="divider mx-5"/>
                            <DayPicker mode="single" selected={dateFrom} onSelect={setDateFrom}/>
                        </div>
                        <div className="flex flex-col items-start ml-10">
                            <div>
                                <span className="font-bold text-xl ml-5">Date to:</span>
                                <span className="text-primary font-bold ml-2">{formattedDateTo}</span>
                            </div>
                            <div className="divider mx-5"/>
                            <DayPicker mode="single" selected={dateTo} onSelect={setDateTo}/>
                        </div>
                    </div>

                </div>

                <div className="flex justify-end">
                    <div>
                        <Link to={ReservationsListRoute.path} className="btn">Cancel</Link>
                        <button onClick={save} className="btn btn-primary ml-2">Save</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ReservationCreateView
