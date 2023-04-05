import React, { useEffect, useState } from "react";

function CompA(props) {
  return (
    <>
      <h1>CompA</h1>
      <p>Hello CompA</p>
      <div>MyProp1: {props.myProp1}</div>
      <div className="">My Prop2: {props.myProp2}</div>
      <div className="">My Prop3: {props.myProp3}</div>
      <div className="">My Prop4: {<props.myProp4 />}</div>
    </>
  );
}

class CompC extends React.Component {
  render() {
    return React.createElement("h1", null, "Hello CompC");
  }
}

const HomePage = () => {
  const [value, setValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  useEffect(() => {
    console.log("Use effect called");
  }, []);

  function handleIncrement() {
    setValue((prevValue) => prevValue + 1);
  }

  function handleDecrement() {
    setValue((prevValue) => prevValue - 1);
  }

  function handleIncrementOther() {
    setValue((prevValue) => prevValue + 1);
  }

  function handleDecrementOther() {
    setValue((prevValue) => prevValue - 1);
  }

  return (
    <>
      <h1>Current Value</h1>
      <span style={{ marginRight: "15px" }}> Current Value: {value}</span>
      <button onClick={handleIncrement} type="button">
        +
      </button>
      <button onClick={handleDecrement} type="button">
        -
      </button>

      <h1>Other Value</h1>
      <span style={{ marginRight: "15px" }}> Current Value: {otherValue}</span>
      <button onClick={handleIncrementOther} type="button">
        +
      </button>
      <button onClick={handleDecrementOther} type="button">
        -
      </button>
      <CompA
        myProp1={value}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={() => <div> My New JSX</div>}
      />
    </>
  );
};

export default HomePage;
