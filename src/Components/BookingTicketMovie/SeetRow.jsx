import React, { Component } from "react";
import { connect } from "react-redux";
import { BookedAction } from "../../redux/actions/BookingTicketAction";

class SeetRow extends Component {
  renderRow = () => {
    return this.props.chair.danhSachGhe.map((chair, index) => {
      let bookedChair = "";
      let disable = false;
      if (chair.daDat) {
        bookedChair = "gheDuocChon";
        disable = true;
      }

      //CSS ghế đang đặt
      let cssBookedSeat = "";
      let indexBooked = this.props.listReseveredSeat.findIndex(
        (ticket) => ticket.soGhe === chair.soGhe
      );
      if (indexBooked !== -1) {
        cssBookedSeat = "gheDangChon";
      }

      if (this.props.chair.hang === "") {
        return <span className="rowNumber">{chair.soGhe}</span>;
      }

      return (
        <button
          disabled={disable}
          className={`ghe ${bookedChair} ${cssBookedSeat}`}
          key={index}
          onClick={() => {
            // const action = {
            //   type: "BOOKED",
            //   payload: chair,
            // };
            this.props.dispatch(BookedAction(chair));
          }}
        >
          {chair.soGhe}
        </button>
      );
    });
  };

  render() {
    return <div className="d-flex">{this.renderRow()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    listReseveredSeat: state.BookingTicketReducers.listReseveredSeat,
  };
};

export default connect(mapStateToProps)(SeetRow);
