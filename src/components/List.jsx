import React from "react";
import { containerStyle } from "../styles/container";

function List(props) {
  console.log("List Rendered", props);
  return (
    <div style={{ ...containerStyle, backgroundColor: "#c9c9c9" }}>
      <h6>
        {props.value} {props.age}
      </h6>
    </div>
  );
}

export default List;
