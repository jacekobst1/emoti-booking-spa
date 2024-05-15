import ReservationsListView from "views/reservations/ReservationsListView.tsx";
import ReservationCreateView from "views/reservations/ReservationCreateView.tsx";

export const ReservationsListRoute = {
    path: '/reservations',
    element: <ReservationsListView/>,
};

export const ReservationCreateRoute = {
    path: '/reservations/new',
    element: <ReservationCreateView/>,
}