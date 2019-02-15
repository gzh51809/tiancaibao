import React, { Component } from 'react';

//链接仓库
import {connect} from 'react-redux';

class SignIn extends Component {
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
       <div className="shop_mast " style={{display: this.props.sign_s?"block":"none",top:"0px"}}> 
           <div className="mast_bg sign_no"> 
              <p className="co3d pt214 ft14 have_sign" style={{display:this.props.sign_p?"none":"block"}}>已连续签到<strong className="days ft16">2</strong>天</p> 
              <p className="ft14 pt206 weight over_hide co3d"  style={{display:this.props.sign_p?"block":"none"}}>+<strong className="integral">4</strong>积分</p> 
              <p className="ft14 sign_no co3d"  style={{display:this.props.sign_p?"block":"none"}}>已连续签到<strong className="days">2</strong>天</p> 
              <p className="ft14 red">明天签到奖励<strong className="integral_tomorrow">6</strong>分</p> 
              <p className="pt10 tc close_btn"> <a onClick={
                this.props.toggleSign
                } title="关闭"> <img src="http://weixin.51tiancai.com//tiancaibao/pages/index/images/close_03.png" alt="关闭" width="45" height="45" /> </a> </p> 
              <a href="/sign_in/sign-record" className="record_dlog"></a> 
              <a href="/shop/taste" className="taste_dlog"></a> 
           </div> 
        </div>
    );
  }
}

export default connect((state)=>{
  return state
},(dispatch)=>{
  return {
    toggleSign(){
      dispatch({
          type:"toggleSign",
          sign_s:false
      })
    }
  }
})(SignIn);