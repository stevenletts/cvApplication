import { useDispatch } from "react-redux";
import { UseCheckBox, UseField } from "../hooks";
import { addEducation } from "../reducers/educationReducer";
import NextAndPrevButton from "./NextAndPrevButton";

const EducationForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const school = UseField("text");
  const title = UseField("text");
  const startYear = UseField("number");
  const endYear = UseField("number");
  const onGoing = UseCheckBox("checkBox");

  const submitInfo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const temp = [school, title, startYear];

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
      addEducation({
        schoolName: school.value,
        titleOfStudy: title.value,
        startYear: startYear.value,
        endYear: endYear.value,
        onGoing: onGoing.checked,
      })
    );

    [...temp, endYear, onGoing].forEach((item) => item.onReset());
  };

  return (
    <div className="outside">
      <NextAndPrevButton linkLocation="Personal" />
      <div className="card">
        <form className="form" onSubmit={submitInfo}>
          <div>
            <label>School: </label>
            <input {...school} />
          </div>
          <div>
            <label>Title of Study: </label>
            <input {...title} />
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
      <NextAndPrevButton linkLocation="Work" />
    </div>
  );
};

export default EducationForm;
