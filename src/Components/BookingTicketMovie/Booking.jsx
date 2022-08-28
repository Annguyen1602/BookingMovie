import React, { Component } from "react";
import { connect } from "react-redux";

class Booking extends Component {
  renderCalc = () => {
    return this.props.listReseveredSeat.map((ticket, index) => {
      return (
        <tbody key={index}>
          <tr className="text-warning">
            <td className="border ">{ticket.soGhe}</td>
            <td className="border ">{ticket.gia.toLocaleString()} VND</td>
            <td className="text-center">
              <button
                className="btn btn-info bg-light"
                onClick={() => {
                  const action = {
                    type: "DELETE",
                    payload: ticket.soGhe,
                  };
                  this.props.dispatch(action);
                }}
              >
                {" "}
                Huỷ
              </button>
            </td>
          </tr>
        </tbody>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="display-5 text-light">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div className="mt-5">
          <button className="gheDuocChon "></button>
          <span className="text-light ms-2">Ghế đã đặt</span>
          <br />
          <button className="gheDangChon "></button>
          <span className="text-light ms-2">Ghế đang đặt</span>
          <br />
          <button className="ghe" style={{ marginLeft: 0 }}></button>
          <span className="text-light ms-2">Ghế chưa đặt</span>
        </div>
        <div>
          <table class="table text-light" border="2">
            <thead>
              <tr>
                <th className="border">Số ghế</th>
                <th className="border">Giá</th>
                <th>Xin chào</th>
              </tr>
            </thead>
            {this.renderCalc()}
            <tfoot>
              <tr className="text-warning">
                <td></td>
                <td className="border">Tổng tiền</td>
                <td>{this.props.totalTicket?.toLocaleString()} VND</td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  listReseveredSeat: state.BookingTicketReducers.listReseveredSeat,
  totalTicket: state.BookingTicketReducers.totalTicket,
});

export default connect(mapStateToProps)(Booking);
