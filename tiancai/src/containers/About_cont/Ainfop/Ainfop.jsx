import React, { Component } from 'react';

import './Ainfop.css';


class Ainfop extends Component {
    render() {
        return (
            <div className="wrap_all">
                <img src="http://weixin.51tiancai.com/tiancaibao/pages/infop/images/infopBanner.png" alt="" width="100%" />
                <ul className="infopList">
                    <li>
                        <a href="/infop/basic" className="por">
                            <span className="info_icon info"></span><span className="info_text">基本信息</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/organ" className="por a2">
                            <span className="info_icon architecture"></span><span className="info_text">组织架构</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/put" className="por a2">
                            <span className="info_icon put"></span><span className="info_text">备案信息</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/sure" className="por a2">
                            <span className="info_icon sure"></span><span className="info_text">信披确认函</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/plat" className="por a3">
                            <span className="info_icon data"></span><span className="info_text">平台数据</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/audit" className="por a3">
                            <span className="info_icon sj"></span><span className="info_text">财务审计</span>
                        </a>
                    </li>
                    <li>
                        <a href="/report" className="por a4">
                            <span className="info_icon Month_report"></span><span className="info_text">运营月报</span>
                        </a>
                    </li>
                    <li><a href="/infop/platreport" className="por a5">
                        <span className="info_icon yearreport"></span><span className="info_text">年度报告</span></a></li>
                    <li>
                        <a href="/infop/important" className="por a6">
                            <span className="info_icon important"></span><span className="info_text">重大事项</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/rules" className="por a7">
                            <span className="info_icon policy"></span><span className="info_text">政策法规</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/compliance" className="por a7">
                            <span className="info_icon policy2"></span><span className="info_text">合规审计</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/risk" className="por a8">
                            <span className="info_icon risk_manager"></span><span className="info_text">风控管理信息</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/aptitude" className="por a8">
                            <span className="info_icon apd"></span><span className="info_text">平台资质</span>
                        </a>
                    </li>
                    <li>
                        <a href="/infop/aptitudethr" className="por a8">
                            <span className="info_icon apd2"></span><span className="info_text">第三方资质</span>
                        </a>
                    </li>
                </ul>

            </div>
        );
    }
}

export default Ainfop;
