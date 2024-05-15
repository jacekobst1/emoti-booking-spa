import {createBrowserRouter} from "react-router-dom";
import {ReservationCreateRoute, ReservationsListRoute} from "./routes.tsx";

const router = createBrowserRouter([
    ReservationsListRoute,
    ReservationCreateRoute,
]);

export default router;