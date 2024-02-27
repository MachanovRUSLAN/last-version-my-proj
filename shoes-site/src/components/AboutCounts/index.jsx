import React from "react";
import "./AboiutCounts.css";
import CountUp from "react-countup";

function AboutCount() {
  return (
    <div className="counts-box">
      <div className="count">
        <h1>
          <CountUp end={200} />
        </h1>
        <p>Satisfied Clients</p>
      </div>
      <div className="count">
        <h1>
          {" "}
          <CountUp end={65} />
        </h1>
        <p>Projects A Year</p>
      </div>
      <div className="count">
        <h1>
          {" "}
          <CountUp end={25} />
        </h1>
        <p>Awards Won</p>
      </div>
      <div className="count">
        <h1>
          {" "}
          <CountUp end={850} />
        </h1>
        <p>Support Tickets</p>
      </div>
    </div>
  );
}

export default AboutCount;
