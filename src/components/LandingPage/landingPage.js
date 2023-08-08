import React from "react";
import { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import BondCarousel from "./../BondCarousel/bondCarousel";
import TopBonds from "../TopBonds/TopBonds";
import BondInfo from "../BondInfo/BondInfo";
import axios from "axios";

const LandingPage = () => {
  const [bondData, setBondData] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:9010/bonds/security")
      .then((response) => {
        // console.log(response);
        setBondData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);


  return (
    <>
      <Navbar style={{ margin: 0 }} />
      <BondCarousel>
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
        <img src="https://via.placeholder.com/1600x300" alt="placeholder" />
      </BondCarousel>
      <TopBonds bondinfo={bondData} />
      <BondInfo />
      {/* <Footer /> */}
    </>
  );
};

export default LandingPage;
