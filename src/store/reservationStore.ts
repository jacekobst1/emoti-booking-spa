import {create} from 'zustand'
import {PaginatedList} from "types/pagination.ts";
import {Reservation, ReservationPayload} from "types/reservation.ts";
import {getReservations, postReservation} from "actions/reservationsActions.ts";

interface ReservationState {
    reservations?: PaginatedList<Reservation>
    fetchReservations: () => void
    postReservation: (payload: ReservationPayload) => void
}

export const useReservationStore = create<ReservationState>()((set, get) => ({
    reservations: undefined,
    async fetchReservations() {
        const response = await getReservations();
        set({reservations: response});
    },
    async postReservation(payload: ReservationPayload) {
        await postReservation(payload);
        await get().fetchReservations();
    },
}))
