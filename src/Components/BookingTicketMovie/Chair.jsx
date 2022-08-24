import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style.css";
import danhSachGheDat from "../../Data/danhSachGhe.json";
import SeetRow from "./SeetRow";

export default class Chair extends Component {
  renderDetail = () => {
    return danhSachGheDat.danhSachGhe.map((chair, index) => {
      let bookedChair = "";
      if (chair.daDat) {
        bookedChair = "gheDuocChon";
      }
      return (
        <button className="ghe" key={index}>
          {chair.soGhe}
        </button>
      );
    });
  };
  renderChair = () => {
    return danhSachGheDat.map((chair, index) => {
      return (
        <div className="text-white d-flex" key={index} style={{ fontSize: 30 }}>
          {chair.hang}
          {this.renderDetail()}

          {/* <SeetRow chair={chair}/>         */}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="title">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
        <h4 className="text-center text-white">Màn hình</h4>
        <div className="screen"></div>
        {this.renderChair()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps)(Chair)
