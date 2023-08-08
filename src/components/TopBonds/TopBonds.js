import React from "react";
import Card from "../Card/Card";
import "./TopBonds.css";

const TopBonds = () => {
  return (
    <div className="top-bonds">
      <Card
        image="https://blog.investingnote.com/wp-content/uploads/2018/09/Bonds.jpg"
        title="Bond 1"
        description="Bond 1 details"
      ></Card>
      <Card
        image="https://blog.investingnote.com/wp-content/uploads/2018/09/Bonds.jpg"
        title="Bond 2"
        description="Bond 2 details"
      ></Card>
      <Card
        image="https://blog.investingnote.com/wp-content/uploads/2018/09/Bonds.jpg"
        title="Bond 3"
        description="Bond 3 details"
      ></Card>
      <Card
        image="https://blog.investingnote.com/wp-content/uploads/2018/09/Bonds.jpg"
        title="Bond 4"
        description="Bond 4 details"
      ></Card>
      <Card
        image="https://blog.investingnote.com/wp-content/uploads/2018/09/Bonds.jpg"
        title="Bond 5"
        description="Bond 5 details"
      ></Card>
      {/* <Card
        image="https://via.placeholder.com/1600x300"
        title="Bond 6"
        description="Bond 6 details"
      ></Card> */}
    </div>
  );
};

export default TopBonds;
