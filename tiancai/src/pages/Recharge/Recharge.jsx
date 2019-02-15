import React, { Component } from 'react';

//jquery
import $ from 'jquery';
//classnames库
import classnames from 'classnames'
class Recharge extends Component {
    //数据
    constructor(props) {
		super(props);
		this.state = {
            money:[{
                sum:100
            },{
                sum:5000
            },{
                sum:10000
            },{
                sum:20000
            },{
                sum:50000
            }],
            tab:0,
            qian:"",
            queren:true
		};
      }
      //事件
      //点中高亮
      changeTab(item,index){
          this.setState({
              tab:index,
              qian:this.state.money[index].sum,
              queren:false
          });
        //   console.log(this.state.qian);
      }
      //视图更新后
      componentDidUpdate() {
        $('.amt')[0].value = this.state.qian        
      }
     //充值
     confirm_r(){
        var cookies = document.cookie;
        var arr = cookies.split('=');
        var username = arr[1]
        $.ajax({
            type:'POST',
            url:'http://localhost:4321/nice/recharge',
            data:{
                username:username,
                sum:$('.amt')[0].value
            },
            success:function(docs){
                alert(docs)
            }
        })
     }
    //html
    render() {
        var confirm = classnames({
            btn:true,
            submit:true,
            ft16:true,
            gray:this.state.queren
        })
        return (
            <div>
                <header className="header tc">
                    <article className="header_container por">
                        <i className="home poa">
                            <a href="javascript:history.go(-1)" title="首页"></a>
                        </i>
                        <h1 className="ft16">充值<a href="/withdraw" className="history fr ft14 tr co33 poa" style={{ right: "0px", display: "none" }}>提现</a></h1>
                    </article>
                </header>
                <section className="select_col">
                    <form action="/recharge/confirm?plat=" method="post" className="apy_tab">
                        <div className="pl15 pr15 buy_amt">
                            <input type="number" name="amount" autoComplete="off" placeholder="请输入充值金额（最低0.01元）" className="ft14 amt" require="" /><h3 className="fn ft14 buy_title" >元</h3>
                        </div>
                        <p className="pl15 pr15 mt10 tl co33">当前账户可用余额：0.00元</p>                        
                        <p className="pt10 pb10 cf tc" id="choose">
                        {(()=>{
                            return this.state.money.map((item,index)=>{
                                return (
                                    <span key={index} onClick={this.changeTab.bind(this,item,index)} className={this.state.tab==index?"jine active":"jine"}>{item.sum}元</span>
                                )
                            });                            
                        })()}
                            
                        </p>
                        <ul className="pt10 pb20">
                            <li>
                                <a className={confirm} onClick={this.confirm_r.bind(this)} title="确认充值">确认充值</a>
                            </li>
                        </ul>
                    </form>
                </section>
                <p className="pl20 pt10 co33">已绑定银行卡</p>
                <div className="mt10">
                    <table className="tc">
                        <tbody className="t_body">
                            <tr className="coff5"><td style={{ width: "44%" }}>招商银行</td><td style={{ width: "28%" }}>5K元</td><td>5K元</td></tr>
                        </tbody>
                    </table>
                </div>
                <p className="pl20 pt10 co33">限额说明</p>
                <p className="pl20 ft12" style={{ color: "#a0abbb" }}>快捷支付支持银行见下表</p>
                <p className="pl20 ft12" style={{ color: "#a0abbb" }}>停止快捷支付的银行付款方式改为选择银联支付方式即可</p>
                <input type="text" name="login_error"  />
                <input type="hidden" name="isABC"  />
                <div className="mt10">
                    <table className="tc">
                        <tbody className="t_body">
                            <tr className="co33"><td>银行名称</td><td>单笔限额(元)</td><td>单日限额(元)</td></tr>
                            <tr><td>交通银行</td><td>9999</td><td>50 W</td></tr>
                            <tr><td>中国银行</td><td>1 W</td><td>1 W</td></tr>
                            <tr><td>建设银行</td><td>5W</td><td>20 W</td></tr>
                            <tr><td>工商银行</td><td>5 K</td><td>5W</td></tr>
                            <tr><td>中信银行</td><td>5 K</td><td>2 W</td></tr>
                            <tr><td>兴业银行</td><td>5 W</td><td>5 W</td></tr>
                            <tr><td>光大银行</td><td>5K</td><td>5 W</td></tr>
                            <tr><td>上海银行</td><td>5 K</td><td>1 W</td></tr>
                            <tr><td>邮政银行</td><td>5 K</td><td>5 K</td></tr>
                            <tr><td>平安银行</td><td>2W</td><td>2 W</td></tr>
                            <tr><td>浦发银行</td><td>49999</td><td>5W</td></tr>
                            <tr><td>广发银行</td><td>2 W</td><td>2 W</td></tr>
                            <tr><td>华夏银行</td><td>5 K</td><td>1 W</td></tr>
                            <tr><td>招商银行</td><td>5K</td><td>5K</td></tr>
                            <tr><td>重庆农商行</td><td>2W</td><td>2W</td></tr>
                            <tr><td>民生银行</td><td>2W</td><td>2W</td></tr>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Recharge;
