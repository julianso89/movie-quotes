import React from "react";
import auth from "../hoc/auth";

const SecretList = props => {

  return (
    <div>
      <h1 className="center">Secret Operatives List</h1>
      <ol>
        <li>Kobe</li>
        <li>Michael</li>
        <li>Lamar</li>
      </ol>
    </div>
  );
};

export default auth(SecretList);
