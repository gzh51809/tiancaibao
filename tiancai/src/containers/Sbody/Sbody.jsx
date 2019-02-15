import React, { Component } from 'react';

import {Link} from 'react-router-dom';

class Sbody extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lists: [{
                title: "保障措施",
                href: "/about/safe"
            }, {
                title: "信息暴露",
                href: "/about/infop"
            }, {
                title: "平台月报",
                href: "/about/report"
            }, {
                title: "风险教育",
                href: "/about/education"
            }, {
                title: "风险测评",
                href: "/about/assessment"
            }, {
                title: "网贷知识",
                href: "/about/industry"
            }, {
                title: "意见反馈",
                href: "/about/feedback"
            },]
        };
    }
    render() {
        return (
            <div className="wra_item">
                <ul className="mt10">
                    {(() => {
                        return (
                            this.state.lists.map((item,idx) => {
                                return (
                                    <li key={idx}>
                                        <Link to={{pathname:item.href}} replace title={item.title}>
                                            <span className="fl ft14">{item.title}</span>
                                            <strong className="fr ft14 fn por pr15"></strong>
                                        </Link>
                                    </li>
                                )
                            })
                        )
                    })()}
                </ul>
                <ul className="mt10">
                    <li>
                        <Link to="/about/help" title="关于天财宝">
                            <span className="fl ft14">关于天财宝</span>
                            <strong className="fr ft14 fn por pr15">  </strong>
                        </Link>
                    </li>
                </ul>
                <p className="tc pt10 pb5 a0a ft12">当前版本 V4.0</p>
            </div>
        );
    }
}

export default Sbody;
