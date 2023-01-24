import React from "react";
import "./Weather.css";

export default function Weather() {
  return (
    <div className="container">
      <div className="Weather">
        <form className="mb-4">
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter city..."
                className="form-control"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>New York</h1>
        <ul>
          <li>Friday 05:00</li>
          <li>Heavy Rain</li>
          <br />
        </ul>
        <div className="row">
          <div className="col-6">
            <img
              src="https://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              alt=""
            />
            <strong>12</strong>
            <strong className="units">
              <a href="/">°C</a>|<a href="/">°F</a>
            </strong>
          </div>
          <div className="col-6">
            <ul>
              <li>
                Humidity: <span>50</span>%
              </li>
              <li>
                Wind: <span>2</span>km/h
              </li>
            </ul>
          </div>
        </div>
        <div className="forecast"></div>
      </div>
      <small>
        <a
          href="https://github.com/abimcintyre/weather-app-react"
          target="_blank"
          rel="noreferrer"
        >
          Open source code
        </a>{" "}
        by Abi McIntyre
      </small>
    </div>
  );
}
