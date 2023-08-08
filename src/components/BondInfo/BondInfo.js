import React from "react";
import "./BondInfo.css";
import BondInfoImg from "../../textinfo.png";

const BondInfo = () => {
  return (
    <div className="bond-info">
      <div className="text-info">
        <h3 style={{ fontSize: "larger", fontFamily: "Poppins" }}>
          Why Invest in Bonds?
        </h3>
        <p style={{ fontSize: "larger", fontFamily: "Poppins" }}>
          Fixed-income securities provide steady interest income to investors
          throughout the life of the bond. Fixed-income securities can also
          reduce the overall risk in an investment portfolio.
        </p>
        <p style={{ fontSize: "larger", fontFamily: "Poppins" }}>
          Bonds can contribute an element of stability to almost any diversified
          portfolio – they are a safe and conservative investment. They provide
          a predictable stream of income when stocks perform poorly, and they
          are a great savings vehicle for when you don’t want to put your money
          at risk
        </p>
        <img
          src={BondInfoImg}
          alt="Info"
          style={{ height: "400px", width: "400px", margin: "75px" }}
        ></img>
      </div>
      <div className="pic-info">
        <div className="pic-info-styling">
          <h4>Regular Income Stream</h4>
          <p>
            Fixed-income securities provide investors with a steady stream of
            income
          </p>
        </div>
        <div className="pic-info-styling">
          <h4>Low Market Volatility</h4>
          <p>
            Bonds carry very low volatility as compared to the prices of equity
            or mutual fund
          </p>
        </div>
        <div className="pic-info-styling">
          <h4>Safety - Principal Protection</h4>
          <p>
            Investors benefit by preserving and increasing their invested
            capital
          </p>
        </div>
        <div className="pic-info-styling">
          <h4>Portfolio Diversification</h4>
          <p>
            Bonds enable efficient portfolio diversification and thus assist in
            portfolio risk-mitigation.
          </p>
        </div>
        <div className="pic-info-styling">
          <h4>High Priority Claim To Assets</h4>
          <p>
            Investors in bonds have a higher priority over common and preferred
            stockholders
          </p>
        </div>
        <div className="pic-info-styling">
          <h4>Zero Credit Risk</h4>
          <p>No default risk while investing in Govt Bonds</p>
        </div>
      </div>
    </div>
  );
};

export default BondInfo;
