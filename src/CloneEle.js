import React from "react";

const Father = ({ children, name = "son" }) => {
  const newChildren = children.map((c, i) =>
    React.cloneElement(c, { age: 18, key: i })
  );

  return (
    <div>
      <div style={{ color: "red" }}>{name}</div>
      {newChildren}
    </div>
  );
};

const NewFather = ({ children }) =>
  React.cloneElement(<Father>{children}</Father>, { name: "fatherName" });

const Son = ({ age }) => <div>{` 我永远${age}岁 `}</div>;

function FWC(props) {
  console.log("props :>> ", props);
  return (
    <NewFather>
      <Son />
      <Son />
      <Son />
      <Son />
      <span>i am span son</span>
    </NewFather>
  );
}

export default FWC;