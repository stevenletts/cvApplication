import { useDispatch } from "react-redux";
import { UseField } from "../hooks";
import { setAll } from "../reducers/infoReducer";

const InfoForm = (): JSX.Element => {
  const dispatch = useDispatch();

  const name = UseField("text");
  const email = UseField("text");
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
  };

  return (
    <div>
      <form onSubmit={submitInfo}>
        <div>
          <label>Name: </label>
          <input {...name} />
        </div>
        <div>
          <label>Email: </label>
          <input {...email} />
        </div>
        <div>
          <label>Phone Number: </label>
          <input {...phoneNumber} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default InfoForm;
