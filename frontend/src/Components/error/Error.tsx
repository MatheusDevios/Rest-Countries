import "./Error.css";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

interface Props {
  onClose: React.MouseEventHandler<HTMLElement>;
}

const Error: React.FC<Props> = (props) => {
  return (
    <div className="c-modal" onClick={props.onClose}>
      <div className="w-modal" onClick={(e) => e.stopPropagation()}>
        <div className="c-header-modal-error">
          <h1 className="title-modal-error">Ops...</h1>
          <p className="header-text-modal-error">
            We might not have information about the country you typed.{" "}
          </p>
        </div>
        <div className="c-info-modal">
          <button className="btn btn-modal" onClick={props.onClose}>
            <KeyboardBackspaceIcon />
            Back
          </button>
          <div className="info-wrapper-error">
            <h1 className="title-modal-error">Something went wrong.</h1>
            <p className="text-modal-error">
              Please, check your internet connection, or if the name of the country is correct and
              try again.
            </p>
            <ErrorOutlineIcon fontSize="large" color="error" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Error;
