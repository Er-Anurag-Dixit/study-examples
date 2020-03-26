import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer(props) {
  const [number, setNumber] = useState(1);
  const SetCakeNumber = e => {
    setNumber(e.target.value);
  };
  return (
    <div>
      <h2>Number of cakes - {props.numOfCakes} </h2>
      <form onSubmit={SetCakeNumber()}>
        <input type="text" value={number} />
        <button onClick={() => props.buyCake(number)}>Buy X Cakes</button>
      </form>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.cake.numOfCakes
  };
};

const mapDispatchToProps = dispatch => {
  return {
    buyCake: number => dispatch(buyCake(number))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
