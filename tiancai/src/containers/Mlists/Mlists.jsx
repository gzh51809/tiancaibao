import React, { Component } from 'react';
//css

//引入子组件

class Mlists extends Component {
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
            <div className="info_wra tc pt10 bgcor" style={{marginBottom:"55px"}}>
                <ul className="fir">
                    <li className="r_b">
                        <a href="/home/current-className?type=1">
                            <i className="icon m_x"></i>
                            <div className="name">我的出借</div>
                        </a>
                    </li>
                    <li className="r_b">
                        <a href="/add-interest-coupon">
                            <i className="icon k_q"></i>
                            <i className="messages" style={{display: "block"}}>1</i>
                            <div className="name">我的优惠券</div>
                        </a>
                    </li>
                    <li>
                        <a href="/shop/index">
                            <i className="icon p_t"></i>
                            <div className="name">积分商城</div>
                        </a>
                    </li>
                </ul>
                <ul className="fir">
                    <li className="r_b">
                        <a href="/money-record">
                            <i className="icon i_record"></i>
                            <div className="name">交易记录</div>
                        </a>
                    </li>
                    <li className="r_b">
                        <a href="/home/members-grade">
                            <i className="icon v_p"></i>
                            <div className="name">会员等级</div>
                        </a>
                    </li>
                    <li className="r_b">
                        <a href="/about/actives">
                            <i className="icon m_c"></i>
                            <div className="name">活动中心</div>
                        </a>
                    </li>
                </ul>
                <ul className="fir">
                    <li className="r_b">
                        <a href="/home/message">
                            <i className="icon i_int por is_read"><i className="poin"></i></i>
                            <div className="name">我的消息</div>
                        </a>
                    </li>
                    <li className="r_b">
                        <a href="/home/my-invite-log-className">
                            <i className="icon i_t"></i>
                            <div className="name">我的邀请</div>
                        </a>
                    </li>
                    <li>
                        <a href="#/about/signOut">
                            <i className="icon s_t"></i>
                            <div className="name">账户设置</div>
                        </a>
                    </li>
                </ul>
                <div className="ban_img pt10">
                    <a href="/home/vip"><img src="http://weixin.51tiancai.com/tiancaibao/pages/home/images/banner-no.png" width="100%" /></a>
                </div>
                </div>
                );
              }
            }
            
            export default Mlists;
