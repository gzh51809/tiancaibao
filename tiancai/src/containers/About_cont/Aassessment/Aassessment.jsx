import React, { Component } from 'react';
import Swipers from 'swiper/dist/js/swiper.js'

import './Aassessment.css';
//jquery
import $ from 'jquery';
class Aassessment extends Component {
    //事件
    componentDidMount() {
        var mySwiper = new Swipers('.swiper-container', {
            
        });
    }
    //html
    render() {
        return (
            <section>
                <div className="notice coff pl25 pr25 pt10 pb10">
                    以下问题将根据您的出借风格、风险偏好和风险承受能力等对您做风险评估，以便为您更好的配置资产，请您认真作答！<br />
                    (每个问题可选择唯一选项)
                </div>
                <form action="" method="" id="form" className="first">
                    {/* <div className="ft12 nocor tc pt10 uphands">选择完自动跳至下一题</div> */}
                    <div className="swiper-container swiper-container-horizontal">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide swiper-slide-active" >
                                <div className="list mt10">
                                    <ul className="pl15 pr15 pt20 pb10">
                                        <li className="fir pb10">1.您的年龄是？</li>
                                        <input type="hidden" name="11" value="" />
                                        <li>
                                            <input type="radio" name="11" value="a" id="id_111" className="fl mr10" />
                                            <label htmlFor="id_111">A.0-25岁</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="11" value="b" id="id_211" className="fl mr10" />
                                            <label htmlFor="id_211">B.26-45岁</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="11" value="c" id="id_311" className="fl mr10" />
                                            <label htmlFor="id_311">C.46-60岁</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="11" value="d" id="id_411" className="fl mr10" />
                                            <label htmlFor="id_411">D.高于60岁</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide swiper-slide-next" >
                                <div className="list mt10">
                                    <ul className="pl15 pr15 pt20 pb10">
                                        <li className="fir pb10">2.您的家庭年收入为(折合人民币)？</li>
                                        <input type="hidden" name="12" value="" />
                                        <li>
                                            <input type="radio" name="12" value="a" id="id_112" className="fl mr10" />
                                            <label htmlFor="id_112">A.5万元以下</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="12" value="b" id="id_212" className="fl mr10" />
                                            <label htmlFor="id_212">B.5-20万元</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="12" value="c" id="id_312" className="fl mr10" />
                                            <label htmlFor="id_312">C.20-50万元</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="12" value="d" id="id_412" className="fl mr10" />
                                            <label htmlFor="id_412">D.50-100万元</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="12" value="e" id="id_512" className="fl mr10" />
                                            <label htmlFor="id_512">E.100万元以上</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="list mt10">
                                    <ul className="pl15 pr15 pt20 pb10">
                                        <li className="fir pb10">3.在您每年的家庭收入中，可用于金融投资(储蓄存款除外)的比例为？</li>
                                        <input type="hidden" name="13" value="" />
                                        <li>
                                            <input type="radio" name="13" value="a" id="id_113" className="fl mr10" />
                                            <label htmlFor="id_113">A.小于10%</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="13" value="b" id="id_213" className="fl mr10" />
                                            <label htmlFor="id_213">B.10%至25%</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="13" value="c" id="id_313" className="fl mr10" />
                                            <label htmlFor="id_313">C.25%至50%</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="13" value="d" id="id_413" className="fl mr10" />
                                            <label htmlFor="id_413">D.大于50%</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="list mt10">
                                    <ul className="pl15 pr15 pt20 pb10">
                                        <li className="fir pb10">4.您有多少年投资股票、基金、外汇、互联网金融理财产品等风险投资品的经验？</li>
                                        <input type="hidden" name="14" value="" />
                                        <li>
                                            <input type="radio" name="14" value="a" id="id_114" className="fl mr10" />
                                            <label htmlFor="id_114">A.没有经验</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="14" value="b" id="id_214" className="fl mr10" />
                                            <label htmlFor="id_214">B.少于2年</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="14" value="c" id="id_314" className="fl mr10" />
                                            <label htmlFor="id_314">C.2至5年</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="14" value="d" id="id_414" className="fl mr10" />
                                            <label htmlFor="id_414">D.5至8年</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="14" value="e" id="id_514" className="fl mr10" />
                                            <label htmlFor="id_514">E.8年以上</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="list mt10">
                                    <ul className="pl15 pr15 pt20 pb10">
                                        <li className="fir pb10">5.您投资互联网金融理财产品计划的期限是多久？</li>
                                        <input type="hidden" name="15" value="" />
                                        <li>
                                            <input type="radio" name="15" value="a" id="id_115" className="fl mr10" />
                                            <label htmlFor="id_115">A.活期、1个月</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="15" value="b" id="id_215" className="fl mr10" />
                                            <label htmlFor="id_215">B.3个月—6个月</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="15" value="c" id="id_315" className="fl mr10" />
                                            <label htmlFor="id_315">C.6个月—12个月</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="15" value="d" id="id_415" className="fl mr10" />
                                            <label htmlFor="id_415">D.12个月以上</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="swiper-slide" >
                                <div className="list mt10">
                                    <ul className="pl15 pr15 pt20 pb10">
                                        <li className="fir pb10">6.您的投资出现何种程度的波动时，您会呈现明显的焦虑？</li>
                                        <input type="hidden" name="16" value="" />
                                        <li>
                                            <input type="radio" name="16" value="a" id="id_116" className="fl mr10" />
                                            <label htmlFor="id_116">A.本金无损失，但收益未达预期</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="16" value="b" id="id_216" className="fl mr10" />
                                            <label htmlFor="id_216">B.出现轻微本金损失</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="16" value="c" id="id_316" className="fl mr10" />
                                            <label htmlFor="id_316">C.本金10%以内的损失</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="16" value="d" id="id_416" className="fl mr10" />
                                            <label htmlFor="id_416">D.本金20-50%的损失</label>
                                        </li>
                                        <li>
                                            <input type="radio" name="16" value="e" id="id_516" className="fl mr10" />
                                            <label htmlFor="id_516">E.本金50%以上损失</label>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <a href="javascript:;" className="submit ft16 assessment">提交</a>
                </form>
            </section>
        );
    }
}
export default Aassessment;
