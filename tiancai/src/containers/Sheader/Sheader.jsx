import React, { Component } from 'react';

import {Link} from "react-router-dom";

class Sheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            navs: [{
                title: "任务",
                content: "任务奖励",
                href: "",
                img_url: "http://weixin.51tiancai.com/tiancaibao/images/2018_01.png",
            }, {
                title: "公告",
                content: "平台公告",
                href: "",
                img_url: "http://weixin.51tiancai.com/tiancaibao/images/2018_03.png",
            }, {
                title: "问题",
                content: "常见问题",
                href: "",
                img_url: "http://weixin.51tiancai.com/tiancaibao/images/2018_05.png",
            }, {
                title: "故事",
                content: "用户故事",
                href: "",
                img_url: "http://weixin.51tiancai.com/tiancaibao/images/2018_07.png",
            },]
        };
    }
    render() {
        return (
            <div>
                <header className="header tc">
                    <article className="header_container por">
                        <h1 className="ft16 tc">服务</h1>
                    </article>
                </header>
                <div className="wra_t por">
                    <div className="wra_t por">
                        <div className="yelw"></div>
                        <div className="l_con poa">
                            <div className="l_item tc">
                                <p className="ft14 pb5 fthome">工作时间每日： 9:00-20:00</p>
                                <p className="ft14 co33">客服电话： <span className="ft20 fontC midle">400-803-1206</span></p>
                                <Link to="javascript:;" className="btn tel_num" data="400-803-1206">立即拨打</Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wra_cen tc">
                    <ul className="fir">
                        {(() => {
                            return (
                                this.state.navs.map((item, idx) => {
                                    return (
                                        <li className="pb15 pt15" key={idx}>
                                            <Link to="/serve/show-task" title={item.title}>
                                                <img src={item.img_url} alt="" width="28px" height="28px" className="pb5" /><br />
                                                <span className="co55 ft14">{item.content}</span>
                                            </Link>
                                        </li>
                                    )
                                })
                            )
                        })()}
                    </ul>
                    <ul className="mt10 serve">
                        <li>
                            <Link to="/about/charts">
                                <img src="http://weixin.51tiancai.com/tiancaibao/images/qq.png" alt="" width="22px" height="22px" />
                                <span className="name">QQ客服</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/about/more">
                                <img src="http://weixin.51tiancai.com/tiancaibao/images/wx.png" alt="" width="26px" height="22px" />
                                <span className="name">微信服务</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Sheader;
