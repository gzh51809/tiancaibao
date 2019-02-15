import React, { Component } from 'react';

//classnames库
import classnames from 'classnames'
//引入jquery
import $ from 'jquery';
class Register extends Component {
     //数据
    constructor(props) {
        super(props);
        this.state = {
            gaoLiang:true,
            eye:true
        };
    }
    //事件
    //监听输入框
    jianting(){
        var phone = this.refs.phone.value;
        var password = this.refs.psw.value;
        var ident = this.refs.ident.value;
        if(phone&&password&&ident){
            this.setState({
                gaoLiang:false
            })
        }else{
            this.setState({
                gaoLiang:true
            })
        }
    }
    //眼睛图标切换
    toggleEye(){
        this.setState({
            eye:!this.state.eye
        })
    }
    //注册到数据库
    confirm(){
        var phone = this.refs.phone.value;
        var password = this.refs.psw.value;
        $.ajax({
            type:'POST',
            url:'http://localhost:4321/nice/register',
            data:{
                phone:phone,
                password:password
            },
            success:function(docs){
               alert(docs)
            }
        })
    }
    //挂载完
    componentDidMount() {
        
    }
    //html
    render() {
        var regBtn = classnames({
            btn:true,
            submit:true,
            ft16:true,
            gray:this.state.gaoLiang
        });
        var eye = classnames({
            eyes:true,
            poa:true,
            eyeclose:this.state.eye,
            eyeopen:!this.state.eye
        });
        return (
            <div>
                <header className="header tc" style={{background: "#fff"}}>
                    <article className="header_container por">
                        <i className="home poa">
                            <a href="javascript:history.go(-1)" title="首页"></a>
                        </i>
                        <h1 className="ft16">欢迎注册天财宝</h1>
                    </article>
                </header>
                <section className="apy_tab">
                    <ul className="apy_list">
                        <li className="items"><label className="label_l"><i className="tel_icon"></i></label><input onChange={this.jianting.bind(this)} ref="phone" type="tel" className="ipt_text" name="phone" maxLength="11" placeholder="请输入手机号" require="" /></li>
                        <li className="items cf"><label className="label_l fl"><i className="ident_icon"></i></label><input onChange={this.jianting.bind(this)} ref="ident" type="tel" className="ipt_text ipt fl" maxLength="6" placeholder="请输入验证码" id="phone_code" require="" /><a href="javascript:;" className="identifying getCode fr" url="/sms/send">获取验证码</a></li>
                        <li className="items"><label className="label_l"><i className="pwd_icon"></i></label><input ref="psw" onChange={this.jianting.bind(this)} type={this.state.eye?"password":"text"} className="ipt_text" placeholder="请输入密码" name="password" require="" /><span className={eye} onClick={this.toggleEye.bind(this)}></span></li>
                        <li className="items"><label className="label_l"><i className="user_icon"></i></label><input type="tel" className="ipt_text" name="tel" maxLength="11" placeholder="邀请人(选填)" id="invited_by_phone" /></li>
                    </ul>
                    <article className="pt20 pl15 pr15">
                        <a href="javascript:;" onClick={this.confirm.bind(this)} className={regBtn} title="注册" url="/sign-up/regist">立即注册</a>
                    </article>
                    <article className="pt10 ft12 tl ml15 mr10 nocor" style={{paddingLeft:"5%"}}>
                        <input className="mr5" type="checkbox" name="chekbx" style={{verticalAlign: "middle}"}} require="" /><span>阅读并同意<a href="/newpro/user" className="ftcor">《天财宝用户服务协议》</a></span>
                    </article>
                </section>
            </div>
        );
    }
}

export default Register;
