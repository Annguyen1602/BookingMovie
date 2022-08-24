import React, { Component } from "react";
import { connect } from "react-redux";
import Booking from "./Booking";
import Chair from "./Chair";
import "../../assets/style.css";

export default class BookingTicketMovie extends Component {
  render() {
    return (
      <div className="bookingMovie">
        <div className="overlay" style={{position:'fixed',width:'100%',height:'100%', backgroundColor:'rgba(0,0,0,0.7)'}}>
        <div className="container">
          <div className="row">
            <div className="col-8">
              <Chair />
            </div>
            <div className="col-4">
              <Booking />
            </div>
          </div>
        </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

// export default connect(mapStateToProps)(BookingTicketMovie)
