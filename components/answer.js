import React from "react";
import "../styles/tailwind.css";
export default function Answer(props) {
  return (
    <div>
      <span className="text-xl italic">Answer</span>
      {props.children}
    </div>
  );
}
