import React, { Component } from 'react';
//css
import './Mine.css';
//引入子组件
import Mheader from "../../containers/Mheader/Mheader.jsx";
import Mlists from "../../containers/Mlists/Mlists.jsx";
class Mine extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  //事件


  //html
  render() {
    return (
      <div>
          <Mheader />
          <Mlists />
      </div>
    );
  }
}

export default Mine;
