/*
 *Author: Diego Perez
ISU Netid : joceo@iastate.edu
Date : Oct 22nd, 2023
 *
 */
import React from "react";
import ReactDOM from "react-dom/client";
import { UserCard } from "./UserCards.js";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <UserCard
      picture="https://freepngimg.com/thumb/vin_diesel/21487-3-vin-diesel.png"
      name="Vin Diesel"
      amount={3000}
      married={true}
      points={[100, 101.1, 202, 2]}
      address={{ street: "123 Bellmont Rd.", city: "Ames", state: "Iowa" }}
    />
    <UserCard
      picture="https://freepngimg.com/thumb/emma_watson/21242-9-emma-watson-picture.png"
      name="Emma Watson"
      amount={3500}
      married={false}
      points={[1, 2, 3, 4]}
      address={{ street: "5010 Av Some", city: "Tempe", state: "AZ" }}
    />{" "}
  </div>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
