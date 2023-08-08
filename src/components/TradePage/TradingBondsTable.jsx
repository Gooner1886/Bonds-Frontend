import React, { useState, useEffect } from 'react';
import Papa from 'papaparse';
import axios from 'axios';

    

function TradingBondsTable() {

    const [data, setData] = useState([]);
  
    useEffect(() => {
      axios.get('api_trading_bonds')
        .then(response => {
          setData(response.data);
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
    }, []);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     Papa.parse('/trading_bonds.csv', {
//       download: true,
//       header: true,
//       complete: function (results) {
//         setData(results.data);
//       },
//     });
//   }, []);

  return (
    <div>
      <h2>Trading Bonds Table</h2>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>ISIN</th>
            <th>ISSUER NAME</th>
            <th>MATURITY DATE</th>
            <th>COUPON</th>
            <th>ISSUE TYPE</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
                <td>{row['ISIN']}</td>
                <td>{row['ISSUER NAME']}</td>
                <td>{row['MATURITY DATE']}</td>
                <td>{row['COUPON']}</td>
                <td>{row['ISSUE TYPE']}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TradingBondsTable;
