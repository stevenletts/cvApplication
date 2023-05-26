import { useDispatch } from "react-redux";
import { UseField } from "../hooks";
import { setAll } from "../reducers/infoReducer";
import NextAndPrevButton from "./NextAndPrevButton";

const InfoForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const name = UseField("text");
  const email = UseField("email");
  const phoneNumber = UseField("text");

  const submitInfo = (event: React.SyntheticEvent) => {
    event.preventDefault();
    dispatch(
      setAll({
        name: name.value,
        email: email.value,
        phoneNumber: phoneNumber.value,
      })
    );
    [name, email, phoneNumber].forEach((item) => item.onReset());
  };

  return (
    <div className="outside">
      <NextAndPrevButton linkLocation="Home" />
      <div className="card">
        <form className="form" onSubmit={submitInfo}>
          <div>
            <label>Name: </label>
            <input required {...name} />
          </div>
          <div>
            <label>Email: </label>
            <input required {...email} />
          </div>
          <div>
            <label>Phone Number: </label>
            <input required {...phoneNumber} />
          </div>
          <div className="container">
            <button className="form-submit-button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
      <NextAndPrevButton linkLocation="Education" />
    </div>
  );
};
export default InfoForm;
