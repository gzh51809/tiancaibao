import React, { Component } from 'react';
import './Hheader.css';

//classNames库
import classnames from 'classnames'
//链接仓库
import {connect} from 'react-redux'
class Hheader extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
       hide:true
    };
  }
  //事件
  componentDidMount() {
    // document.documentElement.addEventListener('mousedown', e => {
    //     console.log(77888);
    //     this.setState({
    //         hide: false
    //     });
    // });
  }
  html
  
  render() {
    var hBtn = classnames({
      "header":true,
      "tc":true,
      "hide":this.state.hide
    })
    return (
        <header className={hBtn} id="headOnce"> 
           <article className="header_container por"> 
            <h1 className="ft18">天财宝</h1> 
            <h5 className="poa sign_btn ft14">{this.props.qiandao?"签到":"已签到"}</h5> 
           </article> 
        </header>
    );
  }
}

export default connect((state)=>{
    return state;
})(Hheader);