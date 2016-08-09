import React from "react";

export default class UnSettledBet extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { Customer, Event, Participant, Stake, ToWin, Avg } = this.props.data;
    console.log(this.props.avg);
    var colorCssUnusual;
    if(ToWin>=Stake*0.6) 
      colorCssUnusual='unsettled-unusual-color';
    if(Stake>10*this.props.avg)
      colorCssUnusual='unsettled-stake10-color';
    if(Stake>30*this.props.avg)
      colorCssUnusual='unsettled-stake30-color';
    if(ToWin>=1000) 
      colorCssUnusual='unsettled-1000-color';
    return (
      <tr>
        <td>{Customer}</td>
        <td>{Event}</td>
        <td>{Participant}</td>
        <td><div class={colorCssUnusual}>{Stake}</div></td>
        <td><div class={colorCssUnusual}>{ToWin}</div></td>
      </tr>
    );
  }
}
//console.log('Settled bet!');