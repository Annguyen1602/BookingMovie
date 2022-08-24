import React, { Component } from "react";

export default class SeetRow extends Component {
  renderRow = () => {
    return this.props.chair.danhSachGhe.map((chair,index)=>{
        let bookedChair = '';
        if(chair.daDat){
            bookedChair = 'gheDuocChon'
        }
        return <button className="ghe" key={index}>
            {chair.soGhe}
        </button>
    })
    
      
  };

  render() {
    return <span className="d-flex">{this.renderRow()}</span>;
  }
}
