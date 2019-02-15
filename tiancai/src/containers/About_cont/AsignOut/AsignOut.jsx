import React, { Component } from 'react';


import './AsignOut.css';

class AsignOut extends Component {
    signOut(){
        var d = new Date();
	    d.setDate(d.getDate()-1);
	    document.cookie = "userName=" + "" + "; path=/" + "; expires=" + d.toUTCString();
    }
    render() {
        return (
            <div>
                <article className="user_set">
                    <ul>
                        <li className="noname">
                            <a href="javascript:;" title="用户">
                                <span className="fl ft14">实名认证</span>
                                <strong className="fr pr15 por fn">未认证</strong>
                                <input type="hidden" value="" name="unname" />
                            </a>
                        </li>
                        <li className="nobank">
                            <a href="javascript:;" title="绑卡">
                                <span className="fl ft14">绑定银行卡</span>
                                <strong className="fr ft14 fn por pr15">未绑卡</strong>
                                <input type="hidden" value="" name="unback" />
                            </a>
                        </li>
                        <li>
                            <a href="/home/address-index" title="收获地址">
                                <span className="fl ft14">收货地址</span>
                                <strong className="fr ft14 fn por pr15">  </strong>
                            </a>
                        </li>
                    </ul>
                    <ul className="mt10">
                        <li>
                            <a href="javascript:;" title="自动复投" id="reSwicth">
                                <span className="fl ft14">开启债转产品本金到期自动复投</span>
                                <strong className="fr fn por"><i></i></strong>
                            </a>
                        </li>
                        <li>
                            <a href="/reset-password" title="登录密码">
                                <span className="fl ft14">登录密码</span>
                                <strong className="fr ft14 fn por pr15"></strong>
                            </a>
                        </li>
                    </ul>
                </article>
                <a href="/" className="submit ft16" id="submit" onClick={this.signOut}>退出登录</a>
            </div>
        );
    }
}

export default AsignOut;
