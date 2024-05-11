import {create} from 'zustand'
import {PaginatedList} from "types/pagination.ts";
import {Reservation} from "types/reservation.ts";
import {getReservations} from "actions/reservationsActions.ts";

interface ReservationState {
    reservations?: PaginatedList<Reservation>
    fetchReservations: () => void
}

export const useReservationStore = create<ReservationState>()((set) => ({
    reservations: undefined,
    fetchReservations: async () => {
        const response = await getReservations();
        set(() => ({reservations: response}))
    }
}))
