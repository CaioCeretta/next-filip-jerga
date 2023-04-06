import React, { useEffect, useState } from "react";

function CompA(props) {
  useEffect(() => {
    console.log("CompA useEffect!");
  }, [props.myProp1]);

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
  constructor() {
    super();
    this.state = {
      myValue: 10,
    };
  }

  changeState(incrementor) {
    this.setState({
      myValue: incrementor,
    });
  }

  render() {
    const { myValue } = this.state;
    const { myProp1, myProp2: MyNewComponent } = this.props;

    return (
      <>
        <h1>Hello CompC</h1>
        CurrentValue: <h1>{myValue}</h1>
        <button onClick={() => this.changeState(myValue + 1)}> + </button>
        <button onClick={() => this.changeState(myValue - 1)}> - </button>
        <h2>{myProp1}</h2>
        <MyNewComponent

        />
      </>
    );
  }
}

function MyComponent() {
  return <h1>My Component!</h1>;
}

const HomePage = () => {
  const [value, setValue] = useState(0);
  const [otherValue, setOtherValue] = useState(0);

  useEffect(() => {
    // console.log("Use effect called");
  }, [value, otherValue]);

  function handleIncrement() {
    setValue((prevValue) => prevValue + 1);
  }

  function handleDecrement() {
    setValue((prevValue) => prevValue - 1);
  }

  function handleIncrementOther() {
    setOtherValue((prevValue) => prevValue + 1);
  }

  function handleDecrementOther() {
    setOtherValue((prevValue) => prevValue - 1);
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

      <hr />

      <h1>Other Value</h1>
      <span style={{ marginRight: "15px" }}>
        {" "}
        Current Other Value: {otherValue}
      </span>
      <button onClick={handleIncrementOther} type="button">
        +
      </button>
      <button onClick={handleDecrementOther} type="button">
        -
      </button>

      <CompC myProp1={value}
      myProp2={
        () => <CompA 
        myProp1={value}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={() => <div> My New JSX</div>}/>
      } 
      />
      {/* <CompA
        myProp1={value}
        myProp2="My Custom Value"
        myProp3={true}
        myProp4={() => <div> My New JSX</div>}
      /> */}
    </>
  );
};

export default HomePage;
