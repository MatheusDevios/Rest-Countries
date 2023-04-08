import { SyncLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="c-loading">
      <div className="loading-text">Searching for the requested Country.</div>
      <SyncLoader className="load" color={"#c30c0c"} loading={true} size={15} />
    </div>
  );
};

export default Loading;
