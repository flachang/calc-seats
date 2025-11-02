import React, { useState } from "react";
import reactDom from "react-dom";

import { Demo } from "./src/Demo";
import CloneEle from "./src/CloneEle";

const toLearn = ["react", "vue", "nodejs", "webpack"];
const TextComponent = () => (
  <div>
    <div>zxx</div>hello, i am function component
  </div>
);

class Home extends React.PureComponent {
  renderFoot = () => <div>i am foot</div>;
  render() {
    return (
      <div style={{ marginTop: "100px" }}>
        {/* 元素类型 */}
        <div>hello world</div>
        {/* fragment */}
        <React.Fragment>
          <div>fragment</div>
        </React.Fragment>
        {/* text */}
        xiao mao
        {/* array node */}
        {toLearn.map((l) => (
          <div key={l}>let use learn {l}</div>
        ))}
        {/* 组件类型 */}
        <TextComponent />
        {this.renderFoot()}
        <CloneEle />
      </div>
    );
  }
}

// jsx => React.createElement
// React.createElement 会 return 一个对象，就是 ReactElement
console.log(
  "类组件创建出的ReactElement :>> ",
  "new Component.type() 返回的是 ReactElement 对象",
  new (<Home />).type()
);
console.log("<div>1111</div>", <div>1111</div>);

console.log("isValidElement :>> ", React.isValidElement(Home));
console.log("isValidElement :>> ", React.isValidElement(<Home />));

const isValidElement = React.isValidElement({
  $$typeof: Symbol.for("react.element"),
}); // true

console.log("isValidElement :>> ", isValidElement);

// const componentReturnEle = CloneEle({ title: "111" }); props 只能通过jsx 传递
const ComponentJSXEle = <CloneEle title={222} />;

console.log("props: {children: Array[5]} :>> ");
console.log("props: {} :>> ", <CloneEle />);

console.log("函数组件创造出的ReactElement type :>> ", (<CloneEle />).type());
console.log("CloneEle :>> ", CloneEle);

reactDom.render(<Home />, document.getElementById("root"));