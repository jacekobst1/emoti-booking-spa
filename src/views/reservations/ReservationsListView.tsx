import {useReservationStore} from "store/reservationStore.ts";
import React, {useEffect} from "react";
import {formatMoneyToUi} from "helpers/moneyFormatter.ts";
import {Link} from "react-router-dom";
import {ReservationCreateRoute} from "router/routes.tsx";

function ReservationsListView() {
    const {reservations, fetchReservations} = useReservationStore();

    useEffect(() => {
        fetchReservations(); // todo fix double fetch
    }, [fetchReservations]);

    return (
        <>
            <div className="flex flex-col items-center mt-5">
                <div className="flex items-center">
                    <h1 className="text-3xl">Reservations list</h1>
                    <Link to={ReservationCreateRoute.path} className="btn btn-sm btn-primary ml-36">Create new</Link>
                </div>

                <div className="overflow-x-auto mt-10">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th>Date from</th>
                            <th>Date to</th>
                            <th>Number of nights</th>
                            <th>Price</th>
                        </tr>
                        </thead>
                        <tbody>
                        {reservations?.data.map((reservation, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{reservation.date_from}</td>
                                <td>{reservation.date_to}</td>
                                <td>{reservation.number_of_nights}</td>
                                <td>{formatMoneyToUi(reservation.total_price)}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default ReservationsListView
