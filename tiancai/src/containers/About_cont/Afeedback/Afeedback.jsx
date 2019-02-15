import React, { Component } from 'react';

import './Afeedback.css';


class Afeedback extends Component {
    render() {
        return (
            <div>
                <ul className="apy_list">
                    <li className="item">
                        <textarea placeholder="请填写您的意见" className="nocor content" name="content" require=""></textarea>
                        <input type="text" placeholder="您的联系方式" name="email" className="email" require="" />
                    </li>
                </ul>
                <a href="javascript:;" className="btn ft16 feedback">提交反馈</a>
            </div>
        );
    }
}

export default Afeedback;
