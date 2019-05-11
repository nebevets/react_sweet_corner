import './schedule.scss';
import axios from 'axios';
import React, {Component} from 'react';

class Schedule extends Component{
  constructor(props){
    super(props);
    this.state = {
      schedule: null
    };
  }
  componentDidMount(){
    axios
      .get('data/schedule.json')
      .then(response => {
        const {schedule} = response.data;
        this.setState({
          schedule
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: error
        });
      });
  }
  render(){
    const {schedule, error} = this.state;
    if(error){
      return(
        <div className="error">
          <div>Error retrieving schedule for {new Date().toDateString()}</div>
          <div className="stack">{error.stack}</div>
        </div>
      );
    }
    const hours = schedule && schedule.map(day =>
      <div className="dayTime" key={day.pid}>
        <span>{day.day}</span><span>{day.open} - {day.close}</span>
      </div>
    );
    return(
        schedule &&
          <div className="schedule">
            <h4 className="">For phone orders, our work schedule is:</h4>
            {hours}
          </div>
    );
  }
}

export default Schedule;
