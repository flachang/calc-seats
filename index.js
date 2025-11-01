import React, { useState } from "react";
import reactDom from "react-dom";
import OperateSeats from "./src/App"
import { Demo } from "./src/Demo";
import CloneEle from "./src/CloneEle";

const toLearn = ['react', 'vue', 'nodejs', 'webpack']
const TextComponent = () => <div><div>zxx</div>hello, i am function component</div>

class Home extends React.PureComponent {
    renderFoot = () => <div>i am foot</div>
    render() {
        return <div style={{ marginTop: '100px' }}>
            {/* 元素类型 */}
            <div>hello world</div>
            {/* fragment */}
            <React.Fragment>
                <div>fragment</div>
            </React.Fragment>
            {/* text */}
            xiao mao
            {/* array node */}
            {toLearn.map(l => <div key={l}>let use learn {l}</div>)}
            {/* 组件类型 */}
            <TextComponent />

            {this.renderFoot()}

            <CloneEle />
        </div>
    }
}

// console.log(React.Children.map(Home().props.children, i => i))

// jsx => React.createElement 
// React.createElement 会 return 一个对象，就是 ReactElement 
console.log(new < Home />.type)
console.log(<div>1111</div>)

reactDom.render(<Home />, document.getElementById("root"));