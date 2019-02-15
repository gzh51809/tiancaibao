import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Aheader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            back: ""
        }
        
        switch (window.location.hash.slice(1)) {
            case "/about/safe":
                this.state.title = "保障措施"
                this.state.back = "/talent/service"
                break;
            case "/about/infop":
                this.state.title = "信息暴露";
                this.state.back = "/talent/service"
                break;
            case "/about/report":
                this.state.title = "平台月报";
                this.state.back = "/talent/service"
                break;
            case "/about/education":
                this.state.title = "风险教育";
                this.state.back = "/talent/service"
                break;
            case "/about/assessment":
                this.state.title = "风险测评";
                this.state.back = "/talent/service"
                break;
            case "/about/industry":
                this.state.title = "网贷知识";
                this.state.back = "/talent/service"
                break;
            case "/about/feedback":
                this.state.title = "意见反馈";
                this.state.back = "/talent/service"
                break;
            case "/about/help":
                this.state.title = "关于我们";
                this.state.back = "/talent/service"
                break;
            case "/about/signOut":
                this.state.title = "账户设置";
                this.state.back = "/talent/mine"
                break;
        }
    }
    render() {
        return (
            <header className="header tc">
                <article className="header_container por">
                    <i className="home poa">
                        <Link to={{ pathname: this.state.back }} replace title="首页"></Link>
                    </i>
                    <h1 className="ft16">{this.state.title}</h1>
                </article>
            </header>
        );
    }
}

export default Aheader;
