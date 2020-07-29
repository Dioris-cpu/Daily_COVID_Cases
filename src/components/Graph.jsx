import React, { useState, useEffect } from "react";
// import { Container, Row, Col } from "react-bootstrap";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

function Graph() {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData();
      const header = apiValue
        .split("\n")
        .splice(0)
        .map((line) => line.split(","))[0]
        .slice(4);
      //   console.log(header);

      const usaData = apiValue
        .split("\n")
        .splice(0)
        .map((line) => line.split(","))[226]
        .slice(4);
      //   console.log(usaData);

      const chartData = [];
      for (let i = 0; i < header.length; i++) {
        const newRow = {};
        newRow.name = header[i];
        newRow.data = parseInt(usaData[i]);
        chartData.push(newRow);
      }
      console.log(chartData);

      setData(chartData);
      setIsLoading(false);
      return null;
    };
    const fetchData = async () => {
      const requestOPtion = {
        method: "GET",
        redirect: "follow",
      };

      const apiUrl = `https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_recovered_global.csv`;
      try {
        const response = await fetch(apiUrl, requestOPtion);
        return response.ok ? response.text() : null;
      } catch (err) {
        console.log(err);
        return null;
      }
    };

    runCall();
  }, []);
  return (
    <div className="chart-wraper">
      {isLoading ? (
        <div>loading...</div>
      ) : (
        <LineChart
          width={800}
          height={400}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="data" stroke="#82ca9d" />
        </LineChart>
      )}
    </div>
  );
}

export default Graph;
