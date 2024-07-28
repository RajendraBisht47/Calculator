import Container from "./components/Container";
import Display from "./components/Display";
import { useState } from "react";
import Button from "./components/Button";
import "./App.css";
function App() {
  const [value, setValue] = useState("");

  var method = (event) => {
    if (event.target.innerHTML == "C") {
      setValue("");
    } else if (event.target.innerHTML == "=") {
      let newvalue = eval(value);
      setValue(newvalue);
    } else {
      let newvalue = value + event.target.innerHTML;
      setValue(newvalue);
    }
  };

  return (
    <>
      <Container>
        <h1>Calculator</h1>

        <div className="conatiner">
          <Display value={value}></Display>
          <Button method={method}></Button>
        </div>
      </Container>
    </>
  );
}

export default App;
