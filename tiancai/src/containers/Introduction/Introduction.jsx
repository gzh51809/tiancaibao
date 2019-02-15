import React, { Component } from 'react';


class Introduction extends Component {
  //数据
  constructor(props) {
    super(props);
    this.state = {
       
    };
  }
  //事件
  //创建圆形进度条
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
        if (speed >= 47) speed = 47;        
    }());
}
//遍历圆形进度条
bianli(length){        
  // console.log(document.querySelectorAll('.circles').length);
  for (let i = 0; i < length; i++) {
      // console.log(i);
      this.goProgress(i);
  }
}
componentDidMount() {
  var length = document.querySelectorAll('.circles').length;
  // this.goProgress();
  this.bianli(length);
  
}

  //html
  render() {
    return (
        <div className="wrapper"> 
   <div className="product_area"> 
    <div className="mt10 white_bg bor_t"> 
     <h1 className="new_tit ft16 por"><span className="fw">散标区</span><span className="ft12 co55 pl8"></span> <label className="fr ft12 active_id por"> </label> <label className="fr ft12 active_id por" id="active_id"> </label> </h1> 
     <div className="std_rate pt15 pb10 pl15 pr15 cf"> 
      <a href="/wealthCarefree/details?productId=7621" className="block cf"> <h1 className="ft14 cf mb10 work pb5"> <label className="hotSign ft12">散 标</label> <span className="fl block wordBreak">181117002 </span> </h1> 
       <div className="fl std_in1"> 
        <p className="ft14 red"> <span className="ft22 saleRate">8.50</span>% </p> 
        <p className="ft12 nocor">历史年化利率</p> 
       </div> 
       <div className="fl std_in2"> 
        <p className="ft14 line_hgt33">项目期限&nbsp;&nbsp;90天</p> 
        <p className="ft12 nocor">先息后本</p> 
       </div> 
       <div className="fr std_in3"> 
        <canvas className="circles" data-progress="0" data-text="募集中" height="50" width="50" style={{
          height: "50px",
          width: "50px",
          backgroundColor: "rgb(255, 255, 255)"
        }}> 
        </canvas> 
       </div> </a> 
     </div> 
     <div className="std_rate pt15 pb10 pl15 pr15 cf"> 
      <a href="/wealthCarefree/details?productId=7624" className="block cf"> <h1 className="ft14 cf mb10 work pb5"> <label className="hotSign ft12">散 标</label> <span className="fl block wordBreak">181115002 </span> </h1> 
       <div className="fl std_in1"> 
        <p className="ft14 red"> <span className="ft22 saleRate">8.50</span>% </p> 
        <p className="ft12 nocor">历史年化利率</p> 
       </div> 
       <div className="fl std_in2"> 
        <p className="ft14 line_hgt33">项目期限&nbsp;&nbsp;90天</p> 
        <p className="ft12 nocor">先息后本</p> 
       </div> 
       <div className="fr std_in3"> 
        <canvas className="circles" data-progress="100" data-text="还款中" height="50" width="50" style={{
          height: "50px",
          width: "50px",
          backgroundColor:"rgb(255, 255, 255)"}}>
          还款中 
        </canvas> 
       </div> </a> 
     </div> 
     <div className="std_rate pt15 pb10 pl15 pr15 cf"> 
      <a href="/wealthCarefree/details?productId=7623" className="block cf"> <h1 className="ft14 cf mb10 work pb5"> <label className="hotSign ft12">散 标</label> <span className="fl block wordBreak">181117001 </span> </h1> 
       <div className="fl std_in1"> 
        <p className="ft14 red"> <span className="ft22 saleRate">8.50</span>% </p> 
        <p className="ft12 nocor">历史年化利率</p> 
       </div> 
       <div className="fl std_in2"> 
        <p className="ft14 line_hgt33">项目期限&nbsp;&nbsp;90天</p> 
        <p className="ft12 nocor">先息后本</p> 
       </div> 
       <div className="fr std_in3"> 
        <canvas className="circles" data-progress="100" data-text="还款中" height="50" width="50" style={{
          height: "50px",
          width: "50px",
          backgroundColor: "rgb(255, 255, 255)"
        }}>
          还款中 
        </canvas> 
       </div> </a> 
     </div> 
     <div className="std_rate pt15 pb10 pl15 pr15 cf"> 
      <a href="/wealthCarefree/details?productId=7622" className="block cf"> <h1 className="ft14 cf mb10 work pb5"> <label className="hotSign ft12">散 标</label> <span className="fl block wordBreak">181117001 </span> </h1> 
       <div className="fl std_in1"> 
        <p className="ft14 red"> <span className="ft22 saleRate">8.50</span>% </p> 
        <p className="ft12 nocor">历史年化利率</p> 
       </div> 
       <div className="fl std_in2"> 
        <p className="ft14 line_hgt33">项目期限&nbsp;&nbsp;90天</p> 
        <p className="ft12 nocor">先息后本</p> 
       </div> 
       <div className="fr std_in3"> 
        <canvas className="circles" data-progress="100" data-text="还款中" height="50" width="50" style={{
          height: "50px",
          width: "50px",
          backgroundColor: "rgb(255, 255, 255)"
        }}>
          还款中 
        </canvas> 
       </div> </a> 
     </div> 
    </div> 
   </div> 
   <div className="product_area"> 
    <div className="current_wra mt10"> 
     <div className="current_rate"> 
      <h1 className="ft18 fw"><i className="bg_l"></i>债转区<i className="bg_r"></i> </h1> 
      <a href="/about?type=1" className="block pt10 pb10 pl15 pr15"> 
       <div className="curAticle fl"> 
        <div className="rate_number mt10 "> 
         <p className="ft14 red"> <span className="red ft22" data-rate="">7.88</span>% <span className="addInterest red ft14">+<i className="interestNum"></i>%</span> </p> 
        </div> 
        <div className="ft12"> 
         <p className="nocor">历史年化利率</p> 
        </div> 
       </div> 
       <div className=" fl std_in2"> 
        <p className="ft14 co33 mt10" style={{lineHeight: "33px"}}>100元起</p> 
        <p className="ft12 a0a">最小出借金额</p> 
       </div> </a> 
      <div className="btnP"> 
       <a href="/about?type=1" className="btn invest" id="">我要出借</a> 
      </div> 
     </div> 
    </div> 
   </div> 
   <div className="mt10 tc data_bto pt30"> 
    <h2 className="tc ft15 co33"><i></i>平台已安全运营<span>1,238</span>天<i></i></h2> 
    <ul> 
     <li className="pt20"> <p className="ft14 mt10 co33">累计成交额(元)</p> <p className="totalAmount ft15 co55 pt5" >2,509,838,885.62</p> </li> 
     <li className="mt20 pb20"> <p className=" ft14 mt10 co33">注册用户数(人)</p> <p className=" totalPeople ft15 co55 pt5" >412,633</p> </li> 
    </ul> 
   </div> 
   <div className="bt_info data-bom mt10"> 
    <div className="ft14 a0a b-bom"> 
     <ul className="tc"> 
      <li> <a href="/about/app-safe"> <i className="icon-b insurance"></i> <span className="co33">风险管理</span> </a> </li> 
      <li> <a href="/infop"> <i className="icon-b z_s"></i> <span className="co33">信息披露</span> </a> </li> 
      <li> <a href="/news/news?type=industry"> <i className="icon-b sa_fe"></i> <span className="co33">网贷知识</span> </a> </li> 
     </ul> 
    </div> 
   </div> 
   <div className="tc ft12 pt20 pb15 nocor"> 
    <img src="https://weixin.51tiancai.com/tiancaibao/pages/index/images/b_logo.png" alt="天财宝小钱包" className="pb5" width="160px" />
    <br /> &nbsp;&nbsp;&nbsp;&nbsp;市场有风险，出借需谨慎 
   </div> 
  </div>
    );
  }
}

export default Introduction;