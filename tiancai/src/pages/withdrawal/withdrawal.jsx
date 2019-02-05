import React, { Component } from 'react';
import './withdrawal.css';

class withdrawal extends Component {
    render() {
        return (
            <div>
            <header className="header tc">
                <article className="header_container por">
                    <i className="home poa">
                        <a href="javascript:history.go(-1)" title="首页"></a>
                    </i>
                    <h1 className="ft16">提现</h1>
                </article>
            </header>
            <div className="dzcare" style={{display:"none"}}>
                <p className="pr10 pt10 pl10 pb10" style={{color:"#F24C2C",fontSize: "12px"}}></p>
            </div>
            <section className="select_col">
                <form action="/withdraw/confirm" method="post" className="apy_tab">
                    <div className="pl15 pr15 buy_amt">
                        <span>账户余额</span><h3 className="fn ft14 buy_title" style={{width:"50%"}}>0元</h3>
                    </div>
                    <div className="pl15 pr15 buy_amt">
                        <span>提现手续费</span><h3 className="fn ft14 buy_title" style={{width:"50%"}} id="fee">0.00元</h3>
                    </div>
                    <div className="pl15 pr15 buy_amt">
                        <input type="number" name="amount" id="input" autocomplete="off" placeholder="请输入提现金额" className="ft14 amt" require="" /><h3 className="fn ft14 buy_title">元</h3>
                    </div>
                    <p className="pll15 pr15 mt10 tr ftcor">当前最多可提现¥<span id="user_amount">0</span>元</p>
                    <ul className="pt10">
                        <li>
                            <a href="javascript:;" className="btn submit ft16 gray" title="确认提现">确认提现</a>
                        </li>
                    </ul>
                    <p className="mt10 tc ftcor ft12">注：每月5次免费提现,超过次数每笔提现收2.00元手续费</p>
                </form>
            </section>
            
            <div style={{padding: "15px"}} className="care">
            

                <h3 className="ft14 co55"><span className="pl5 pr5 ">*</span>温馨提示：</h3>

                <p className="pb10 pt10 pl10 pr10 ft12 co55">根据国家相关政策要求，2018年7月1日起，每日提现≤10000元时，可选择“快速到账”方式，提现当天到账；当日提现金额＞10000元时，选择“普通到账”的交易，参照如下普通到账时间：</p>

                <div className="pb10 pt10 pl10 pr10"><table border="1" cellspacing="0" cellpadding="0">
            

                    <tbody><tr>
                        <th>提现时间</th>
                        <th>到账时间</th>
                    </tr>
                        <tr>
                            <td>周日15:00至周一15:00</td>
                            <td>周二24:00前</td>
                        </tr>
                        <tr>
                            <td>周一15:00至周二15:00</td>
                            <td>周三24:00前</td>
                        </tr>
                        <tr>
                            <td>周二15:00至周三15:00</td>
                            <td>周四24:00前</td>
                        </tr>
                        <tr>
                            <td>周三15:00至周四15:00</td>
                            <td>周五24:00前</td>
                        </tr>
                        <tr>
                            <td>周四15:00至周五15:00</td>
                            <td>周六24:00前</td>
                        </tr>
                        <tr>
                            <td>周五15:00至周六15:00</td>
                            <td>周日24:00前</td>
                        </tr>
                        <tr>
                            <td>周六15:00至周日15:00</td>
                            <td>周一24:00前</td>
                        </tr>
                    </tbody></table>

                </div>

            </div>
            </div>
        );
    }
}

export default withdrawal;