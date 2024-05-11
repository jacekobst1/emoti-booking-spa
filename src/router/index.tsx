import {createBrowserRouter} from "react-router-dom";
import {HomeRoute, ReservationsListRoute} from "./routes.tsx";

const router = createBrowserRouter([
    HomeRoute,
    ReservationsListRoute,
]);

export default router;