import {createBrowserRouter} from "react-router-dom";
import {HomeRoute, ReservationCreateRoute, ReservationsListRoute} from "./routes.tsx";

const router = createBrowserRouter([
    HomeRoute,
    ReservationsListRoute,
    ReservationCreateRoute,
]);

export default router;