import { BOOKED, DELETE } from "../types/BookingTicketType";

export const BookedAction = (chair) => {
  return {
    type: BOOKED,
    chair:chair
  };
};

export const DeleteTicket = (ticket)=>{
    return {
        type:DELETE,
        ticket:ticket.soGhe
    }
}

