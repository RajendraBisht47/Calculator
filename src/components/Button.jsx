import "./Button.css";
function Button({ method }) {
  let arr = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "*",
    "9",
    "0",
    "=",
  ];
  return (
    <div className="buttons m-3">
      {arr.map((value) => (
        <button
          key={value}
          onClick={method}
          type="button"
          className="btn btn-info"
        >
          {value}
        </button>
      ))}
    </div>
  );
}
export default Button;
