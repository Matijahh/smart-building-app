import React, { useEffect, useState } from "react";

import { formatTime } from "../../utils";

/** Material UI Imports */
import Button from "@material-ui/core/Button";

const End = ({ results, data, onReset, time }) => {
  const [correctAnswers, setCorrectAnswers] = useState(0);

  useEffect(() => {
    let correct = 0;
    results.forEach((result, index) => {
      if (result.a === data[index].answer) {
        correct++;
      }
    });
    setCorrectAnswers(correct);
    // eslint-disable-next-line
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        textAlign: "center",
      }}
    >
      <h5 className="card-title">Your result</h5>
      <div
        style={{
          height: 242,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <p style={{ fontSize: 20 }}>
          {correctAnswers} of {data.length}
        </p>
        <p style={{ fontSize: 20 }}>
          <strong>{Math.floor((correctAnswers / data.length) * 100)}%</strong>
        </p>
        <p style={{ fontSize: 20 }}>
          <strong>Your time:</strong> {formatTime(time)}
        </p>
      </div>
      <Button
        className="btn teal darken-4 white-text"
        style={{ width: 150, borderRadius: 30, marginTop: 94 }}
        size="small"
        onClick={onReset}
      >
        Try again
      </Button>
    </div>
  );
};

export default End;
