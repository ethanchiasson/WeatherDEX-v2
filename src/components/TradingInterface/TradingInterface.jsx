import React, { Component } from "react";
import "./index.css";

const market = {
  title: "New York, US",
  type: "HDD",
  closes: "23h:20m:32s",
  details: "Lorem",
};
class TradingInterface extends Component {
  render() {
    return (
      <React.Fragment>
        <p class="font-bold mb-2">Create Swap</p>
        <div className="tradingContainer p-2 shadow-lg bg-neutral text-neutral-content rounded-box">
          <div className="marketDetails">
            <div class="stat rounded-box">
              <div class="stat-figure text-info"></div>
              <div class="stat-title">{market.title}</div>
              <div class="stat-value text-secondary">{market.type}</div>
              <div class="stat-desc">Closes in {market.closes}</div>
              <a
                href="/components/modal#my-modal"
                class="btn btn-neutral btn-sm mt-1"
              >
                Market Details
              </a>
              <div id="my-modal" class="modal">
                <div class="modal-box">
                  <p>{market.details}</p>
                  <div class="modal-action">
                    <a href="/components/modal#" class="btn">
                      Close
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="">
            <div class="form-control">
              <label class="label">
                <span class="label-text">Tick Size</span>
              </label>
              <input
                type="text"
                placeholder="USDC per HDD"
                class="input input-bordered"
              />
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Fixed Strike Rate</span>
              </label>
              <input
                type="text"
                placeholder="HDD"
                class="input input-bordered"
              />
            </div>
          </div>
          <div className="orderPreview">
            <div className="flex flex-row justify-between p-2">
              <div className="flex flex-col">
                <div className="title font-bold">Location</div>
                <div className="info text-gray-500">New York</div>
              </div>
              <div className="flex flex-col">
                <div className="title font-bold">Resolution Source</div>
                <div className="info text-gray-500">OpenWeatherMap</div>
              </div>
            </div>
            <div className="flex flex-col p-2">
              <div className="title font-bold">Order Summary</div>
              <div className="info text-gray-400">
                You get paid <b>50 USDC</b> per HDD when there are less than{" "}
                <b>90</b> cumulative HDD's. More than <b>90</b> HDD's you will
                pay <b>50 USDC</b> per HDD.
              </div>
            </div>
          </div>
          <div class="divider"></div>
          <p class="text-sm mb-1">Collateral Required</p>
          <p class="font-bold text-xl mb-2">4500 USDC</p>
          <button class="btn btn-block btn-secondary mt-2">List Contract</button>
        </div>
      </React.Fragment>
    );
  }
}

export default TradingInterface;
