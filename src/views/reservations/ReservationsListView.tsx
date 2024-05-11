import {useReservationStore} from "store/reservationStore.ts";
import {useEffect} from "react";

function ReservationsListView() {
    const {reservations, fetchReservations} = useReservationStore();

    useEffect(() => {
        fetchReservations(); // todo fix double fetch
    }, [fetchReservations]);

    return (
        <>
            <h2 className="text-3xl">Reservations list</h2>
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
                            <td>{reservation.total_price}</td>
                            {/*todo format price from grosze to zł*/}
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ReservationsListView
