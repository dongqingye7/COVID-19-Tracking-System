import React, { Component } from 'react';
import DatePicker from 'react-date-picker';


class DatePickerComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date(),
        }
    }
    onChange = date => this.setState({ date })
 
    render() {
      return (
        <div>
          <DatePicker
            onChange={this.onChange}
            value={this.state.date}
            inline
          />
        </div>
      );
    }
}
 
export default DatePickerComponent;