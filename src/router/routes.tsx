import ReservationsListView from "views/reservations/ReservationsListView.tsx";
import App from "../App.tsx";
import ReservationCreateView from "views/reservations/ReservationCreateView.tsx";

export const HomeRoute = {
    path: '/',
    element: <App/>,
};

export const ReservationsListRoute = {
    path: '/reservations',
    element: <ReservationsListView/>,
};

export const ReservationCreateRoute = {
    path: '/reservations/new',
    element: <ReservationCreateView/>,
}