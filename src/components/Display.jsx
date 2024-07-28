import "./Display.css";
function Display(props) {
  return (
    <input
      className="form-control me-2"
      type="search"
      readOnly
      value={props.value}
      aria-label="Search"
    ></input>
  );
}
export default Display;
