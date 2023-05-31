import { RootState } from "../store";
import NextAndPrevButton from "./NextAndPrevButton";
import { useSelector } from "react-redux";

const CV = (): JSX.Element => {
  const { info, education, workExperience } = useSelector(
    (state: RootState) => state
  );

  return (
    <div className="outside">
      <NextAndPrevButton linkLocation="Work" />
      <div>
        <div>
          <h1>Personal</h1>
          <div>
            <p>
              Name: {info.name} Email: {info.email} Phone: {info.phoneNumber}
            </p>
          </div>
          <h2>Education</h2>
          <div>
            {education
              ? education.map((item, i) => (
                  <p key={i}>
                    School: {item.schoolName} Subject: {item.titleOfStudy}{" "}
                    Start: {item.startYear}{" "}
                    {item.onGoing ? "ongoing" : item.endYear}
                  </p>
                ))
              : null}
          </div>
          <h3>Work Experience</h3>
          <div>
            {workExperience
              ? workExperience.map((item, i) => {
                  return (
                    <p key={i}>
                      {" "}
                      Company : {item.company} Description: {item.description}{" "}
                      startYear: {item.startYear} End Year:{" "}
                      {item.onGoing ? "Current" : item.endYear}
                    </p>
                  );
                })
              : null}
          </div>
        </div>
      </div>
      <NextAndPrevButton linkLocation="Personal" />
    </div>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default CV;
