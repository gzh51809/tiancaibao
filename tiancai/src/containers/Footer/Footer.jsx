import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import {connect} from 'react-redux';

import './Footer.css';

class Footer extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
      // isSign:"false",
      signUrl:"/sign",
      footNav:0,
      footNavs: [{
        title: "首页",
        className: "idx",
        link: "/talent/home",
        iconName: "index_icon",
        icon_yel: "index_yel",
        qty: 0
      }, {
        title: "出借",
        className: "ivst",
        link: "/talent/lend",
        iconName: "invest_icon",
        icon_yel: "invest_yel",
        qty: 0
      }, {
        title: "服务",
        className: "sev",
        link: "/talent/service",
        iconName: "serve_icon",
        icon_yel: "serve_yel",
        qty: 0
      }, {
        title: "我的",
        className: "idx",
        link: "/talent/mine",
        iconName: "home_icon",
        icon_yel: "home_yel",
        qty: 1
      }]
    }
    // switch(window.location.hash.slice(1)){
    //   case "/talent/home":
    //     this.state.footNav=0
    //   break;
    //   case "/talent/lend":
    //     this.state.footNav=1
    //   break;
    //   case "/talent/service":
    //     this.state.footNav=2
    //   break;
    //   case "/talent/mine":
    //     this.state.footNav=3
    //   break;
    // }
  }
  //事件
    tabClick(index){
      // this.checkRoute();
      this.setState({
        footNav:index
      })
      if(index==3){
        this.hasCookie()
      }
    }

  // componentWillMount(){
  //   this.checkRoute();
  //   window.addEventListener("window.location.hash.slice(1)",this.checkRoute())

  // }
  componentWillMount(){
    // this.checkRoute();
    window.addEventListener("window.location",this.checkRoute());
  }
    checkRoute()  {
      switch(window.location.hash.slice(1)){
        case "/talent/home":
          this.setState({
            footNav:0
          })
        break;
        case "/talent/lend":
          this.setState({
            footNav:1
          })
        break;
        case "/talent/service":
          this.setState({
            footNav:2
          })
        break;
        case "/talent/mine":
          this.setState({
            footNav:3
          })
        break;
      }
    }
    hasCookie(){
      var cookies = document.cookie;
      if(cookies!=""){
        this.props.cookieState();
      }
    }

  //html
  render() {
    return (
        <div className="foot_menu"> 
           <div className="footer_nav"> 
            <ul>
              {(()=>{
                return (this.state.footNavs.map((item,index)=>{
                  return (
                    <li onClick={this.tabClick.bind(this,index)} className={`${item.className}`} key={index}> <Link  to={this.props.isSign=="false"&&index==3?this.state.signUrl:{pathname:`${item.link}` }}  replace >
                    {/* to={ {pathname:`${item.link}`} repalce */}
                    {(()=>{
                      if(item.qty > 0){
                        return (<i className="messages" id="mes" style={{display: "block"}}>{item.qty}</i>)
                      }
                    })()}
                    <i  className={this.state.footNav===index?`iconfont ${item.icon_yel}`:`iconfont ${item.iconName}`}></i> 
                      <div className="name">
                        {item.title}
                      </div> </Link> </li>
                  )
                }))
              })()} 
            </ul> 
           </div> 
          </div>
    );
  }
}

export default connect((state)=>{
  return state
},(dispatch)=>{
  return {
    cookieState(){
      dispatch({
        type:"cookieState",
        isSign:"true"
      })
    }
  }
})(Footer);