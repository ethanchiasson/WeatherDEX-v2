import React, { Component } from "react";
import TradingInterface from "../../components/TradingInterface/TradingInterface";
import Swaps from "../../components/Swaps/Swaps";
import SwapManager from "../../components/SwapManager/SwapManager";
import "./index.css";

const markets = [
  {
    title: "New York, US - HDD",
  },
  {
    title: "London, UK - HDD",
  },
];

class TradingView extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="selectContainer">
          <select class="select select-bordered select-secondary w-full max-w-xs">
            <option disabled="disabled" selected="selected">
              Select a Market
            </option>
            {markets.map((market) => (
              <option>{market.title}</option>
            ))}
          </select>
        </div>
        <div className="container">
          <div className="left">
            <TradingInterface />
          </div>
          <div className="right">
            <Swaps />
            <SwapManager />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default TradingView;
