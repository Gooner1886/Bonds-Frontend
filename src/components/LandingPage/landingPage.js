import React from "react";
import Navbar from "../Navbar/Navbar";
import BondCarousel from "./../BondCarousel/bondCarousel";
import TopBonds from "../TopBonds/TopBonds";
import BondInfo from "../BondInfo/BondInfo";

const landingPage = () => {
  return (
    <>
      <Navbar style={{ margin: 0 }} />
      <BondCarousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </BondCarousel>
      <TopBonds />
      <BondInfo />
      {/* <Footer /> */}
    </>
  );
};

export default landingPage;
