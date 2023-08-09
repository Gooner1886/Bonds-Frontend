import React, { useState, useEffect } from "react";
import axios from "axios";

function SecurityDetailsTable() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:9010/bonds/security');
        console.log(response.data) 
        setData(response.data);
      } catch (error) {
        console.error('Error while fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleRowClick = (row) => {
    console.log('Clicked row:', row);
  };


  return (
    <div className="App">
      <div className="table-container">
        <h2>Security Details Table</h2>
        <div className="scrollable-table">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>BOND</th>
                <th>ISSUER</th>
                <th>COUPON</th>
                <th>FACE VALUE</th>
                <th>MATURITY DATE</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} onClick={handleRowClick}>
                  <td>{row["id"]}</td>
                  <td>{row["isin"]}</td>
                  <td>{row["issuer"]}</td>
                  <td>{row["coupon"]}</td>
                  <td>{row["faceValue"]}</td>
                  <td>{row["maturityDate"]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default SecurityDetailsTable;
