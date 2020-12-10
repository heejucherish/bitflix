import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./Header";
import Home from "../routes/Home";
import TV from "../routes/TV";
import Detail from "../routes/Detail";
import Search from "../routes/Search";

// 오로지 라우터만 관리하는 컴포넌트가 될 것이다.

export default () => (
  <Router>
    <>
      <Header />
      {/* 기본적으로 switch가 없으면 라우터 배치하면 모든 라우터들이 탄다 */}
      {/* switch를 활용하면 오로지 하나의 라우터만 타게된다.  */}
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/tv" exact component={TV} />
        <Route path="/search" exact component={Search} />
        <Route path="/movie/:id" exact component={Detail} />
        <Route path="/show/:id" exact component={Detail} />
      </Switch>
    </>
  </Router>
);
