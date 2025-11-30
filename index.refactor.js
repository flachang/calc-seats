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

class RefactorHome extends React.PureComponent {
  controlledRenderContent = () => {
    const reactElement = (
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
        {toLearn.map((l, index) => (
          <div key={index}>let use learn {l}</div>
        ))}
        {/* 组件类型 */}
        <TextComponent />
        <CloneEle />
      </div>
    );

    console.log("Controlled Render Content ReactElement :>> ", reactElement);

    const { children } = reactElement.props;

    /* ① 扁平化children */
    const flatChildren = React.Children.toArray(children);

    console.log("flatChildren :>> ", flatChildren);

    const newChildren = [];

    /* ② 去除文本 */
    React.Children.forEach(flatChildren, (c) => {
      if (React.isValidElement(c)) newChildren.push(c);
    });

    /* ③ 插入新的节点 */
    const lastChildren = React.createElement(
      "div",
      { className: "inserted-div" },
      "i am new inserted div"
    );

    newChildren.push(lastChildren);

    console.log("newChildren :>> ", newChildren);

    const newReactElement = React.cloneElement(
      reactElement,
      {},
      ...newChildren
    );

    return newReactElement;
  };

  render() {
    return this.controlledRenderContent();
  }
}

reactDom.render(<RefactorHome />, document.getElementById("root"));
