import React from "react";

const Father = ({ children }) => {
  const newChildren = children.map((c, i) =>
    React.cloneElement(c, { age: 18, key: i })
  );

  return <div>{newChildren}</div>;
};

const Son = ({ age }) => <div>{` 我永远${age}岁 `}</div>;

function FWC() {
  return (
    <Father>
      <Son />
      <Son />
      <Son />
      <Son />
      <span>i am span son</span>
    </Father>
  );
}

export default FWC;