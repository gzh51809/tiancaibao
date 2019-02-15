import React, { Component } from 'react';

import ReactDOM from 'react-dom';
//swiper
import Swipers from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
//classNames库
import classnames from 'classnames'
//链接仓库
import { connect } from 'react-redux';
class Llist extends Component {
    //数据
    constructor(props) {
        super(props);
        this.state = {
            head: 0,
            tail: 10,
            tab_l: this.props.tab_l,
            Llist: [],
            length: 0
        };
    }
    //事件
    loadMore() {
        var self = this;
        React.axios.get('Llist.json')
            .then(function (response) {
                var Llist = response.data.Llist.slice(self.state.head, self.state.tail)
                self.setState({
                    Llist: self.state.Llist.concat(Llist)
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    goProgress(i) {
        var canvas = document.querySelectorAll('.circles')[i],  //获取canvas元素         
            context = canvas.getContext('2d'),  //获取画图环境，指明为2d
            centerX = canvas.width / 2,   //Canvas中心点x轴坐标
            centerY = canvas.height / 2,  //Canvas中心点y轴坐标
            rad = Math.PI * 2 / 100, //将360度分成100份，那么每一份就是rad度
            speed = 0.1; //加载的快慢就靠它了 
        //绘制蓝色外圈
        function blueCircle(n) {
            context.save();
            context.strokeStyle = "orange"; //设置描边样式
            context.lineWidth = 2; //设置线宽
            context.beginPath(); //路径开始
            context.arc(centerX, centerY, 24, -Math.PI / 2, -Math.PI / 2 + n * rad, false); //用于绘制圆弧context.arc(x坐标，y坐标，半径，起始角度，终止角度，顺时针/逆时针)
            context.stroke(); //绘制
            context.closePath(); //路径结束
            context.restore();
        }
        //绘制白色外圈
        function whiteCircle() {
            context.save();
            context.beginPath();
            context.strokeStyle = "#ccc";
            context.arc(centerX, centerY, 24, 0, Math.PI * 2, false);
            context.stroke();
            context.closePath();
            context.restore();
        }
        //百分比文字绘制
        function text(n) {
            context.save(); //save和restore可以保证样式属性只运用于该段canvas元素
            context.strokeStyle = "#ccc"; //设置描边样式
            context.font = "12px Arial"; //设置字体大小和字体
            //绘制字体，并且指定位置
            if(n<=100){
                context.strokeText(n.toFixed(0) + "%", centerX - 13, centerY + 5);
            }else if(n>100){
                context.strokeText("还款中", centerX - 18, centerY + 5);
            }
            
            context.stroke(); //执行绘制
            context.restore();
        }
        //动画循环
        (function drawFrame() {
            window.requestAnimationFrame(drawFrame, canvas);
            context.clearRect(0, 0, canvas.width, canvas.height);
            whiteCircle();
            text(speed);
            blueCircle(speed);
            speed += 1;
            if (speed > 100) speed = 101;
            
        }());
    }
    //swiper
    gundong() {
        var mySwiper = new Swipers('.swiper_z', {
            autoplay: {
                delay: 2500,
                disableOnInteraction: false,
            },
            loop: true,
            slidesPerView: "auto",
            autoHeight: true,
            // setWrapperSize :true,
            direction: 'vertical',
        })
    }

    bianli(length){        
        // console.log(document.querySelectorAll('.circles').length);
        for (let i = 0; i < length; i++) {
            // console.log(i);
            this.goProgress(i);
        }
    }

    componentWillMount() {
        
    }

    componentDidMount() {
        window.onscroll = () => {
            var allHeight = document.body.scrollHeight;//body高度
            var seeHeight = window.screen.height;//可视区域高度
            var notSeeHeight = document.documentElement.scrollTop;//滚动条卷上去的高度
            if (!notSeeHeight) {
                notSeeHeight = document.body.scrollTop;
            }
            if (seeHeight + notSeeHeight == allHeight) {
                this.setState({
                    head: this.state.head + 10,
                    tail: this.state.tail + 10
                });
                this.loadMore()
            }
        }
        this.loadMore();

    }
    componentDidUpdate() {
        var length = document.querySelectorAll('.circles').length;
        this.gundong();
        // this.goProgress();
        this.bianli(length);
        
    }

    componentWillUnmount() {
        window.onscroll = null;
    }

    //html
    render() {
        var artClass = classnames({
            "tab_box": true,
            "pb50": true,
            "hide": this.props.tab_l
        });
        var artClass2 = classnames({
            "tab_box": true,
            "hide": !this.props.tab_l
        })
        return (
            <div>
                <article className={
                    artClass
                }>
                    <div className="list_wra pb10" >
                        <div className="calendar_item">
                            {(() => {
                                return this.state.Llist.map((item, index) => {
                                    return (
                                        <div key={index} className="std_rate  pt10 pb10 pl20 pr20">
                                            <a className="block">
                                                <h1 className="ft14 cf mb5 pt5">
                                                    <label className="hotSign ft12 fl mr5">
                                                        散&nbsp;标
                            </label>
                                                    <label className="fl block wordBreak w90">
                                                        181117002
                            </label>
                                                </h1>
                                                <div className="fl std_in1">
                                                    <p className="ft14 red">
                                                        <span className="ft22 saleRate">
                                                            8.50
                                </span>
                                                        %
                            </p>
                                                    <p className="ft12 nocor">
                                                        历史年化利率
                            </p>
                                                </div>
                                                <div className="fl std_in2">
                                                    <p className="ft14 line_hgt33 co33">
                                                        项目期限90天
                            </p>
                                                    <p className="ft12 nocor">
                                                        先息后本
                            </p>
                                                </div>
                                                <div className="fr std_in3">
                                                    <canvas ref="progress" className="circles" data-progress="17.672413793103" data-text="募集中"
                                                        height="50" width="50" style={{
                                                            height: "50px",
                                                            width: "50px",
                                                            backgroundColor: "rgb(255, 255, 255)"
                                                        }}>
                                                    </canvas>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                });
                            })()}
                        </div>
                    </div>
                    <div className="tc pt10 pb50 grayBg wealthCarefreeBg">
                        <img src="http://weixin.51tiancai.com/tiancaibao/pages/invest/mores.png" width="140px" />
                    </div>
                </article>
                <article id="opacities" className={
                    artClass2
                }>
                    <div className="instruction">
                        <h2 className="tc ft15 coff5 pt15">
                            债转规则说明
            </h2>
                        <p className="ft12 co55 mt10 txind">
                            当您自主选择债转产品锁定期限后，会展示对应的出借服务，此时您可以查看服务详情或输入出借金额进行出借。持有超过锁定期限后可按照规则以债权转让的形式申请退出，是否退出成功及实际退出时间以债权实际承接情况为准。
            </p>
                    </div>
                    <div className="ins">
                        <a >
                            <h2>
                                <label className="hotSign">
                                    债&nbsp;转
                    </label>
                            </h2>
                            <div>
                                <div className="fl ml5">
                                    <p className="ft14 coff5">
                                        <span className="ft22">
                                            7.88
                            </span>
                                        <span>
                                            %
                            </span>
                                        <span className="hide">
                                            +0.2%
                            </span>
                                    </p>
                                    <p className="ft12 nocor">
                                        历史年化利率
                        </p>
                                </div>
                                <div className="fl">
                                    <p className="co33" style={{ lineHeight: "33px" }}>
                                        30天
                        </p>
                                    <p className="ft12 nocor">
                                        锁定期限
                        </p>
                                </div>
                            </div>
                        </a>
                        <div>
                            <a href="javascript:void(0);" data-url="/invest/limit?type=0&amp;lockDays=30"
                                className="ft14 co33" id="opacities_btn30">
                                我要出借
                </a>
                        </div>
                    </div>
                    <div className="ins">
                        <a href="selfBid/details?lockDays=1">
                            <h2>
                                <label className="hotSign">
                                    债&nbsp;转
                    </label>
                            </h2>
                            <div>
                                <div className="fl ml5">
                                    <p className="coff5 ft14">
                                        <span className="ft22">
                                            7.80
                            </span>
                                        <span>
                                            %
                            </span>
                                        <span className="interestNum">
                                        </span>
                                    </p>
                                    <p className="ft12 nocor">
                                        历史年化利率
                        </p>
                                </div>
                                <div className="fl">
                                    <p className="co33" style={{ lineHeight: "33px" }}>
                                        1天
                        </p>
                                    <p className="ft12 nocor">
                                        锁定期限
                        </p>
                                </div>
                            </div>
                        </a>
                        <div>
                            <a href="javascript:void(0);" data-url="/invest/limit?type=0&amp;lockDays=1"
                                className="ft14 co33" id="opacities_btn">
                                我要出借
                </a>
                        </div>
                    </div>
                    <div className="infro">
                        <h2 className="coff5 ft14 tc">
                            借款人信息
            </h2>
                        <div className="title">
                            <span className="num1">
                                姓名
                </span>
                            <span className="num2">
                                借款用途
                </span>
                            <span className="num1">
                                期限
                </span>
                            <span className="num2">
                                借款金额
                </span>
                        </div>
                        <div className="list_l swiper_z swiper-no-swiping">
                            <ul style={{ marginTop: "0px" }} className="swiper-wrapper">
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        李**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        邓**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        姬**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        31000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        杨**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        30900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        29800元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        侯**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        28600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        潘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        28200元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        冯**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        24400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        石**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        19900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        20000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        20000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        10000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        30000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        30000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        30000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        50000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        30000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        30000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        企业经营周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        50000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        乔**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        37800元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        冉**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        36400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        廖**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        36300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        马**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        36100元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        罗**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        34500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        33600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        姜**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        33200元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        谭**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        32100元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        任**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        31700元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        谢**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        31500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        万**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        31400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        龙**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        31100元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        卢**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        30900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        29600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        佘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        29400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        皮**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        29000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        吴**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        28600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        27700元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        汤**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        27500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        27100元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        25300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        夏**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        22500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        吴**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        22500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        22200元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        谭**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        20400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        钟**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        19600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        蒋**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        18900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        18900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        唐**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        18600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        罗**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        18200元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        17900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        任**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        17200元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        17100元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        15700元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        刘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        14100元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        13400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        韦**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        12700元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        孟**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        12500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        崔**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        180天
                        </span>
                                    <span className="num2">
                                        11500元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        37400元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        何**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        36800元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        赵**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        36600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        林**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        35900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        李**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        35900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        冯**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        35900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        35300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        35300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        潘**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        35000元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        黎**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34800元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        苟**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34700元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        张**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        陆**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        方**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        唐**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        王**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        34300元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        武**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        33900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        庞**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        33600元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        邓**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        吴**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        赵**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32900元
                        </span>
                                </li>
                                <li className="swiper-slide">
                                    <i>
                                    </i>
                                    <span className="num1">
                                        龙**
                        </span>
                                    <span className="num2">
                                        小额资金周转
                        </span>
                                    <span className="num1">
                                        360天
                        </span>
                                    <span className="num2">
                                        32600元
                        </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </article>
            </div>
        );
    }
}

export default connect((state) => {
    return state
})(Llist);