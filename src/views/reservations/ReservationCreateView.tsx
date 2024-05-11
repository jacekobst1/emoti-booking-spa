import {useMemo, useState} from "react";
import {DayPicker} from "react-day-picker";
import "react-day-picker/src/style.css";
import {format} from "date-fns";
import {Link} from "react-router-dom";
import {ReservationsListRoute} from "router/routes.tsx";

function ReservationCreateView() {
    // const {postReservation} = useReservationStore();
    const [dateFrom, setDateFrom] = useState<Date>();
    const [dateTo, setDateTo] = useState<Date>();

    const {formattedDateFrom, formattedDateTo} = useMemo(() => {
        return {
            formattedDateFrom: dateFrom ? format(dateFrom, 'yyyy-MM-dd') : '',
            formattedDateTo: dateTo ? format(dateTo, 'yyyy-MM-dd') : '',
        }
    }, [dateFrom, dateTo]);

    // async function postReservation() {
    // }

    return (
        <>
            <Link to={ReservationsListRoute.path} className="btn btn-sm mt-5 ml-5">Return</Link>

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

                <button className="btn btn-primary mt-10">Save</button>
            </div>
        </>
    );
}

export default ReservationCreateView
