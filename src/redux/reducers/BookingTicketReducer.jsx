const stateDefault = {
  listReseveredSeat: [],
};

export const BookingTicketReducers = (state = stateDefault, action) => {
  switch (action.type) {
    case "BOOKED": {
      let { payload } = action;

      let updateList = [...state.listReseveredSeat];
      let index = updateList.findIndex(
        (chair) => chair.soGhe === payload.soGhe
      );
      if (index !== -1) {
        updateList.splice(index, 1);
      } else {
        updateList.push(payload);
      }
      let totalTicket = updateList.reduce((total, ticket) => {
        return total + ticket.gia;
      }, 0);

      state.listReseveredSeat = updateList;
      return { ...state, totalTicket };
    }
    case "DELETE": {
      let { payload } = action;
      let updateList = [...state.listReseveredSeat];
      let index = updateList.findIndex(
        (chair) => chair.soGhe === payload.soGhe
      );
      if (index) {
        updateList.splice(index, 1);
      }
      state.listReseveredSeat = updateList;
      let totalTicket = updateList.reduce((total, ticket) => {
        return total + ticket.gia;
      }, 0);
      return { ...state, totalTicket };
    }
    default:
      return { ...state };
  }
};
