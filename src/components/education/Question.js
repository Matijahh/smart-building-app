import React, { useState, useEffect, useRef } from "react";

/** Material UI Imports */
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import Button from "@material-ui/core/Button";

const Question = ({
  data,
  onAnswerUpdate,
  numberOfQuestions,
  activeQuestion,
  onSetActiveQuestion,
  onSetStep,
}) => {
  const [selected, setSelected] = useState("");
  const radiosWrapper = useRef();

  useEffect(() => {
    const findCheckedInput =
      radiosWrapper.current.querySelector("input:checked");
    if (findCheckedInput) {
      findCheckedInput.checked = false;
    }
  }, [data]);

  const changeHandler = (e) => {
    setSelected(e.target.value);
  };

  const nextClickHandler = (e) => {
    onAnswerUpdate((prevState) => [
      ...prevState,
      { q: data.question, a: selected },
    ]);
    setSelected("");
    if (activeQuestion < numberOfQuestions - 1) {
      onSetActiveQuestion(activeQuestion + 1);
    } else {
      onSetStep(3);
    }
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        textAlign: "center",
      }}
    >
      {data && (
        <div>
          <h5 className="card-title">{data.question}</h5>
          <FormControl
            component="fieldset"
            style={{
              position: "absolute",
              top: "70%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
            ref={radiosWrapper}
          >
            <RadioGroup aria-label="answer" name="answer">
              {data.choices.map((choice, i) => (
                <FormControlLabel
                  key={i}
                  value={choice}
                  control={<Radio />}
                  label={choice}
                  onChange={changeHandler}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </div>
      )}
      <Button
        className="btn teal darken-4 white-text"
        style={{
          width: 150,
          borderRadius: 30,
          position: "absolute",
          top: "114%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
        size="small"
        onClick={nextClickHandler}
      >
        Next
      </Button>
    </div>
  );
};

export default Question;
