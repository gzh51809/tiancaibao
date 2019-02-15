import React, { Component } from 'react';

import {connect} from 'react-redux';
//router
import { Link } from 'react-router-dom';
//css
import './Sign.css';
//引入jquery
import $ from 'jquery';

//引入子组件
class Sign extends Component {
	constructor(props) {
		super(props);
		this.state = {
		   
		};
	  }
	//登录
	denglu(){
		var phone = this.refs.tel.value;
		var password = this.refs.psw.value;
		$.ajax({
			type:'POST',
			url:'http://localhost:4321/nice/sign',
			data:{
				phone:phone,
				password:password
			},
			success:(data)=>{
				console.log(data);
				if(data=="true"){
					var userName = phone
					var passwords = password					
					// console.log(this)
					document.cookie = "userName=" + userName + "; path=/";
					window.location.hash = "/talent/mine";
					this.props.cookieState();
				}else if(data=="false"){
					alert('账号或者密码不正确')
				}
				
			}
		})
	}
  render() {
    return (
       		<div>
                <header className="header tc" style={{background:"#fff"}}>
                    <article className="header_container por">
                        <i className="home poa">
                            <a href="#/talent/home" title="首页">
                            </a>
                        </i>
                        <h1 className="ft18" id="title">
                            <Link to={{ pathname: "/register" }} className="ft14 fr co33" title="注册">
                                注册
                            </Link>
                        </h1>
                    </article>
                </header>
                <div className="tl pt20 pl15">
                    <span className="co33 ft36">
                        欢迎来到天财宝
                    </span>
                </div>
	            <section className="apy_tab pt10">
	                <ul className="apy_list" id="apy_wrap">
	                    <li className="item">
	                        <label className="label_l">
	                            <i className="tel_icon">
	                            </i>
	                        </label>
	                        <input type="tel" ref="tel" className="ipt_text" name="phone" maxLength="11" placeholder="请输入手机号" />
	                    </li>
	                    <li className="item pas">
	                        <label className="label_l">
	                            <i className="pwd_icon">
	                            </i>
	                        </label>
	                        <input type="password" ref="psw" className="ipt_text" placeholder="请输入密码" name="password" />
	                    </li>
	                    <li className="item codes cf hide">
	                        <label className="label_l fl">
	                            <i className="info_icon">
	                            </i>
	                        </label>
	                        <input type="text" className="ipt_text ipt fl" id="phoneCode" placeholder="请输入短信验证码"
	                        name="" />
	                        <a className="identifying get_code fr" url="/sms/send">
	                            获取验证码
	                        </a>
	                    </li>
	                </ul>

	            <article className="pt20 pl15 pr15">
	                <a href="javascript:;" onClick={this.denglu.bind(this)} className="btn submit ft16 login " title="登录" url="/auth/login">
	                    登录
	                </a>
	            </article>
	                <div className="block tl mt10 ml15 mr15">
	                    <a href="/auth/forget-password" className="nocor pl15 fl">
	                        忘记密码?
	                    </a>
	                    <a href="javascript:;" className="ftcor pr15 fr actClor codeBtn">
	                        验证码登录
	                    </a>
	                </div>
	            </section>
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
  })(Sign);
