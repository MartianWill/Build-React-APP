import "./styles.css";

export default function Skeleton() {
  return (
    <div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col" style={{ height: 300 }}></div>
        <div className="col" style={{ height: 300 }}></div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
      <div className="row">
        <div className="col"></div>
      </div>
    </div>
  );
}
