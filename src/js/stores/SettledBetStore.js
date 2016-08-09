import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class SettledBetStore extends EventEmitter {
  constructor() {
    super()
    var settledData = require('../../data/Settled.csv');
    this.settledBets = settledData;
  }

  getAll() {
    return this.settledBets;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_SETTLED_BET": {
        this.settledBets = action.settledBets;
        this.emit("change");
        break;
      }
    }
  }

}

const settledBetStore = new SettledBetStore;
dispatcher.register(settledBetStore.handleActions.bind(settledBetStore));

export default settledBetStore;