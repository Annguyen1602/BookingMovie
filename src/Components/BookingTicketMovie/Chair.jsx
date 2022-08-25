import React, { Component } from "react";
import { connect } from "react-redux";
import "../../assets/style.css";
import danhSachGheDat from "../../Data/danhSachGhe.json";
import SeetRow from "./SeetRow";

export default class Chair extends Component {
  
  renderChair = () => {
    return danhSachGheDat.map((chair, index) => {
      return (
        <div className="text-white text-left ml-5 mt-1" key={index} style={{ fontSize: 30}}>
          <div className="d-flex">
          {chair.hang}
          <SeetRow chair={chair}/>    
          </div>    
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <h3 className="display-4 text-warning">ĐẶT VÉ XEM PHIM CYBERLEARN.VN</h3>
        <h4 className="text-center text-white">Màn hình</h4>    
        <div className="mt-2">
        <div className="screen"></div>
        {this.renderChair()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps)(Chair)
