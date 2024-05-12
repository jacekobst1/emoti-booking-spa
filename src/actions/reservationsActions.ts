import axios from "lib/axios";
import type {Reservation, ReservationPayload} from "types/reservation";
import {PaginatedList} from "types/pagination.ts";

export async function getReservations(url?: string): Promise<PaginatedList<Reservation>> {
    const response = await axios.get(url ?? `/admin/reservations`);

    return response.data;
}

export async function postReservation(payload: ReservationPayload) {
    await axios.post(`/reservations`, payload);
}