import React, { useState, useEffect } from "react";

/** Material UI Imports */
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";

/** Custom Components Imports */
import Question from "./Question";
import quizData from "../../assets/data/quiz.json";
import End from "./End";

let interval;

const StartUp = () => {
  const [step, setStep] = useState(1);
  const [activeQuestion, setActiveQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  const quizStartHandler = () => {
    setStep(2);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  const resetClickHandler = () => {
    setActiveQuestion(0);
    setAnswers([]);
    setStep(2);
    setTime(0);
    interval = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
  };

  return (
    <Card style={{ width: 500, height: 500, borderRadius: 30 }}>
      <CardContent style={{ height: 400 }}>
        <div
          className="all-devices-card-content"
          style={{
            width: "100%",
            justifyContent: "center",
            height: "100%",
            position: "relative",
          }}
        >
          {step === 1 && (
            <div style={{ display: "block", textAlign: "center" }}>
              <h5 className="card-title">Start the Quiz</h5>
              <p>Good Luck!</p>
              <p
                style={{
                  margin: "120px 0 0 0",
                  fontSize: "20em",
                  fontWeight: "bold",
                  color: "#004d40",
                }}
              >
                ?
              </p>
            </div>
          )}
          {step === 2 && (
            <Question
              data={quizData.data[activeQuestion]}
              onAnswerUpdate={setAnswers}
              numberOfQuestions={quizData.data.length}
              activeQuestion={activeQuestion}
              onSetActiveQuestion={setActiveQuestion}
              onSetStep={setStep}
            />
          )}
          {step === 3 && (
            <End
              results={answers}
              data={quizData.data}
              onReset={resetClickHandler}
              time={time}
            />
          )}
        </div>
      </CardContent>
      {step === 1 && (
        <CardActions style={{ width: "100%", justifyContent: "center" }}>
          <Button
            className="btn teal darken-4 white-text"
            style={{ width: 150, borderRadius: 30 }}
            size="small"
            onClick={quizStartHandler}
          >
            Start
          </Button>
        </CardActions>
      )}
    </Card>
  );
};

export default StartUp;
