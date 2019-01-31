import React, { Component } from 'react';
//css
import './Home.css';
import '../../assets/index.css';
import '../../assets/swiper.css';
//引入子组件
import Hheader from '../../containers/Hheader/Hheader.jsx';
import SignIn from '../../containers/SignIn/SignIn.jsx';
import Swiper from '../../containers/Swiper/Swiper.jsx';
import Cenbox from '../../containers/Cenbox/Cenbox.jsx';
import Introduction from '../../containers/Introduction/Introduction.jsx';
// import Footer from '../../containers/Footer/Footer.jsx';

class Home extends Component {
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
      <div>
        <SignIn />
        <Hheader />
        <Swiper />
        <Cenbox />
        <Introduction />
        {/* <Footer /> */}
      </div>
    );
  }
}

export default Home;
