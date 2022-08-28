import { combineReducers, createStore } from "redux";
import { BookingTicketReducers } from "./reducers/BookingTicketReducer";

const rootReducer = combineReducers({
BookingTicketReducers
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
