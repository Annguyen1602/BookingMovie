import React, { Component } from "react";
import { connect } from "react-redux";

export default class Booking extends Component {
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
          <button className="ghe" style={{marginLeft:0}}></button>
          <span className="text-light ms-2">Ghế chưa đặt</span>
        </div>
        <div>
          <table class="table text-light" border='2'>
            <thead>
              <tr>
                <th className="border">Số ghế</th>
                <th>Giá</th>
                <th></th>
              </tr>
            </thead>
            
          </table>
          

        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps)(Booking)
