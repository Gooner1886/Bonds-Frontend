import React from "react";
import Card from "../Card/Card";
import "./TopBonds.css";
import { useState } from "react";

let dataToBeSorted = [];
let limitedData = [];

const TopBonds = (props) => {
  const sortingHandler = () => {
    console.log(props.bondinfo);
    let sortData = [];
    props.bondinfo.sort((a, b) => b.coupon - a.coupon);
    for (let obj of props.bondinfo) {
      sortData.push(obj);
    }
    const limit = 5;
    limitedData = sortData.slice(0, limit);
  };

  sortingHandler();
  console.log(limitedData);
  return (
    <>
      <div className="heading">
        <h3>Hand Picked Bonds</h3>
      </div>
      <div className="top-bonds">
        {limitedData.map((bond) => {
          console.log(bond.issuer);
          return (
            <Card
              image="https://blog.investingnote.com/wp-content/uploads/2018/09/Bonds.jpg"
              title={bond.issuer}
              description={bond}
            ></Card>
          );
        })}
      </div>
    </>
  );
};

export default TopBonds;
