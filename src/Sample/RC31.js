import React from "react";

export const RC31 = () => {
  const Header = () => <div>Header</div>;
  const Footer = () => <div>Footer</div>;

  return (
    <div>
      {Header()}
      {Footer()}

      {/* 如果把渲染函数处理成组件呢？每次diff时都会重新渲染在虚拟dom中，增加性能开销 */}
      {/* <Header /> */}
      {/* <Footer /> */}
    </div>
  );
};
