import App from "../App.tsx";
import ReservationsListView from "../views/reservations/ReservationsListView.tsx";

export const HomeRoute = {
    path: '/',
    element: <App/>,
};

export const ReservationsListRoute = {
    path: '/reservations-list',
    element: <ReservationsListView/>,
};