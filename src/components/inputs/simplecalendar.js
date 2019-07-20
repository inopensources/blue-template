import React, { Component } from "react";
import "./calendar.js"

class SimpleCalendar extends Component {
  render() {
    return (
        <div>
          <input type="text" className="form-control" name="daterange-singe-date-picker" value="10/24/1984"/>
        </div>

        
    );
  }
}

export default SimpleCalendar;
