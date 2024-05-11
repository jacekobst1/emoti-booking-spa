import axios from "lib/axios";
import type {Reservation} from "types/reservation";
import {PaginatedList} from "types/pagination.ts";

export async function getReservations(url?: string): Promise<PaginatedList<Reservation>> {
    const response = await axios.get(url ?? `/reservations`);

    return response.data;
}