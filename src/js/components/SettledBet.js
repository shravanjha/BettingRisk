import React from "react";

export default class SettledBet extends React.Component {
  constructor(props) {
    super();
  }
  render() {
    const { Customer, Event, Participant, Stake, Win } = this.props;
    var colorCss;
    if(Win>=Stake*0.6) 
    colorCss='settled-unusual-color';

    return (
      <tr>
        <td>{Customer}</td>
        <td>{Event}</td>
        <td>{Participant}</td>
        <td><div class={colorCss}>{Stake}</div></td>
        <td><div class={colorCss}>{Win}</div></td>
      </tr>
    );
  }
}
//console.log('Settled bet!');