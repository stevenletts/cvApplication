import { useNavigate } from "react-router-dom";

const NextAndPrevButton = ({
  linkLocation,
}: {
  linkLocation: string;
}): JSX.Element => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (linkLocation === "CV") {
      navigate("/");
      return;
    }
    navigate(`/${linkLocation}`);
  };

  return (
    <div>
      <button type="button" onClick={handleClick} className="route-button">
        {linkLocation}
      </button>
    </div>
  );
};

export default NextAndPrevButton;
