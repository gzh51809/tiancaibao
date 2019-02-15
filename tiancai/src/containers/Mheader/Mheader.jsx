import React, { Component } from 'react';

import { Link } from "react-router-dom";
//jquery
import $ from 'jquery';

//css

//引入子组件

class Mheader extends Component {
    //数据
    constructor(props) {
        super(props);
        this.state = {
            isShow: true,
            uname:"",
            docs:"",
            assets: {
                total_assets: "0.00",
                profit: "200.00",
                locking: "1000.00",
                usable: "3800.00",
            }
        };
    }
    componentWillMount() {
        var cookies = document.cookie;
        var arr = cookies.split('=');
        var username = arr[1];
        $.ajax({
            type:'POST',
            url:'http://localhost:4321/nice/mine',
            data:{
                username:username
            },
            success:(docs)=>{
                console.log(docs);
                this.setState({
                    docs:docs
                });
                this.setState({
                    assets: {
                        total_assets: docs[0].sum+'.00',
                        profit: "200.00",
                        locking: "1000.00",
                        usable: "3800.00",
                    },
                    uname:username
                })
            }
        })
    }
    //事件
    eyeClick() {
        if (this.state.isShow) {
            this.setState({
                isShow: !this.state.isShow,
                assets: {
                    total_assets: "******",
                    profit: "****",
                    locking: "****",
                    usable: "****"
                }
            })
        }else if(!this.state.isShow){
            this.setState({
                isShow: !this.state.isShow,
                assets: {
//                  total_assets: this.state.docs[0].sum+'.00',
					total_assets: "0.00",
                    profit: "200.00",
                    locking: "1000.00",
                    usable: "3800.00",
                }
            })
        }

    }
    //html
    render() {
        return (
            <div>
                <div className="containt_top por" >
                    <div className="top">
                        <div className="fl top_left">
                            <span className="co33 fw">{this.state.uname}</span><Link to="javascript:;" className="co33 member" href="/home/members-grade">注册会员</Link>
                        </div>
                        <div className="fr top_right">
                            <Link to="/home/talent-deail" className="co33" style={{ width: "120px" }}>天才值：<span className="red talent_value">60</span></Link>
                        </div>
                    </div>
                    <h1 className="tc">
                        <div className="amount_wrap mb5">
                            <span className="ft30 sum_amount">{this.state.assets.total_assets}</span><span className="ft36 amount_eyes" onClick={this.eyeClick.bind(this)}><i className={this.state.isShow ? "eyes_open" : "eyes_close"} id="eyes"></i></span>
                        </div>
                        <label className="ft14 co33 zzc">
                            账户总资产(元)<span className="cumulativeWrap1"><i className="quesClick"></i></span>
                        </label>

                    </h1>
                    <p className="poa">
                        <label className="invite tl fl ft14">
                            <span className="ft14 mt5">累计收益(元) <label className="co33 total_invest">{this.state.assets.profit}</label></span><span className="cumulativeWrap2"><i className="quesClick"></i></span>
                        </label>
                        <label className="record tr fr ft14">
                            锁定中资产(元) <span className="ft14 co33 current_limit">{this.state.assets.locking}</span><span className="cumulativeWrap"><i className="quesClick"></i></span>
                        </label>
                    </p>
                </div >
                <div className="info_wra tc operation_wrap">
                    <div className="fl">
                        <p className="ft14 pt10 pl15 co55"><label className="w120">我的可用余额(元)</label></p>
                        <p><span className="ft15 co33 account_amount">{this.state.assets.usable}</span></p>
                    </div>
                    <div className="fr operation">
                        <Link to="/withdrawal" className="co33 ft15" title="提现">提现</Link>
                        <Link to="/recharge" className="co33 recharge block ft15" title="充值">充值</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Mheader;
