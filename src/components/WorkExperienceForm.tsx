import { useDispatch } from "react-redux";
import { addWorkExperience } from "../reducers/workExerienceReducer";
import React from "react";
import { UseCheckBox, UseField, UseTextArea } from "../hooks";
import NextAndPrevButton from "./NextAndPrevButton";

const WorkExperienceForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const company = UseField("text");
  const title = UseField("text");
  const description = UseTextArea();
  const startYear = UseField("number");
  const endYear = UseField("number");
  const onGoing = UseCheckBox("checkBox");

  const submitInfo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const temp = [company, title, startYear, description];

    // fix notificaton for form validation
    if (!onGoing.checked && !endYear.value) {
      window.alert("either enter an end year or state it is on going");
      return;
    } else if (
      temp.some((item) => item.value.length !== 0) &&
      temp.some((item) => item.value.length === 0)
    ) {
      window.alert("complete or delete");
      return;
    }

    dispatch(
      addWorkExperience({
        company: company.value,
        jobTitle: title.value,
        description: description.value,
        startYear: startYear.value,
        endYear: endYear.value,
        onGoing: onGoing.checked,
      })
    );

    [...temp, endYear, onGoing].forEach((item) => item.onReset());
  };

  return (
    <div className="outside">
      <NextAndPrevButton linkLocation="Education" />
      <div className="card">
        <form className="form" onSubmit={submitInfo}>
          <div>
            <label>Company: </label>
            <input {...company} />
          </div>
          <div>
            <label>Job Title: </label>
            <input {...title} />
          </div>
          <div>
            <label>Description: </label>
            <textarea {...description} />
          </div>
          <div>
            <label>Start Year: </label>
            <input {...startYear} />
          </div>
          <div>
            <label>End Year: </label>
            <input {...endYear} />
          </div>
          <div>
            <label>On Going: </label>
            <input {...onGoing} />
          </div>
          <div className="container-education">
            <button className="form-submit-button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <NextAndPrevButton linkLocation="CV" />
    </div>
  );
};

export default WorkExperienceForm;
