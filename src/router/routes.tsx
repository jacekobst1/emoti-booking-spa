import ReservationsListView from "views/reservations/ReservationsListView.tsx";
import App from "../App.tsx";

export const HomeRoute = {
    path: '/',
    element: <App/>,
};

export const ReservationsListRoute = {
    path: '/reservations-list',
    element: <ReservationsListView/>,
};