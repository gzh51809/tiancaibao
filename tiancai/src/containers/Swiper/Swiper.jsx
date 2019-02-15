import React, { Component } from 'react';

//classNames库
import classnames from 'classnames'
//链接仓库
import {connect} from 'react-redux';
//引入swiper
import Swipers from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
class Swiper extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }
  //事件
  nn(){
    console.log(5656);
  }
  componentDidMount(){
      var mySwiper = new Swipers('.swiper-container', {
          autoplay: {
            delay: 2500,
            disableOnInteraction: false,
          },         
         loop:true,
         pagination: {
            el: '.swiper-pagination',
          },
      })
  }
  

  //html
  render() {
    var qClass = classnames({
        "sign_btn":true,
        "ft14":true,
        "coff":true,
        "poa":true,
        "signFlot":true,
        "orange_btn":this.props.sign_t
    })
    return (
        <div className="swiper-container por swiper-container-horizontal"> 
           <a onClick={this.props.toggleSign.bind(this)} className={qClass} >{this.props.qiandao?"签到":"已签到"}</a> 
           <div className="swiper-wrapper"> 
            <div className="swiper-slide swiper-slide-prev">
             <a><img src="http://weixin.51tiancai.com/uploads/7db3bb1ce56d8eb779494be938225ee3.jpg" alt="banner" /></a>
            </div>
            <div className="swiper-slide swiper-slide-active">
             <a><img src="http://weixin.51tiancai.com/uploads/6a1c15a93c9e0219f43d23da79b1d606.jpg" alt="banner" /></a>
            </div>
            <div className="swiper-slide swiper-slide-next">
             <a><img src="http://weixin.51tiancai.com/uploads/7aee236a6799b976a86fc91c08247727.jpg" alt="banner" /></a>
            </div>
           </div> 
           <div className="swiper-pagination"></div>
           <img src="http://weixin.51tiancai.com/tiancaibao/pages/index/images/advert_tip.png" alt="" className="advert" /> 
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
          sign_s:true,
          sign_t:false,
          qiandao:false
      })
    }
  }
})(Swiper);