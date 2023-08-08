import React, { useState, useEffect } from "react";
import axios from "axios";

function SecurityDetailsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("api_security_details")
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div>
      <h2>Security Details Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>BOND</th>
            <th>COUPON</th>
            <th>FACE VALUE</th>
            <th>CREDIT RATING</th>
            <th>MATURITY DATE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row["BOND"]}</td>
              <td>{row["COUPON"]}</td>
              <td>{row["FACE VALUE"]}</td>
              <td>{row["CREDIT RATING"]}</td>
              <td>{row["MATURITY DATE"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SecurityDetailsTable;
