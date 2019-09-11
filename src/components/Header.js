/**
*@author: dingyongya
*@date : 2019/9/11
*@params:{
 *  title: header标题
 *  icon: 是否展示后退按钮,修改后退按钮样式
 *}
**/

import React, {Component} from 'react';
import {Icon, NavBar} from "antd-mobile";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    goBack =() => {
        customHistory.go(-1)
    };

    render() {
        const {title,icon} = this.props;
        return (
            <div style={{ position: 'fixed', width: '100%', top: 0,zIndex:10,height: '45px' }}>
                <NavBar
                    mode="light"
                    icon={icon && <Icon type={icon} />}
                    onLeftClick={() => icon ? this.goBack() :''}
                >{title}</NavBar>
            </div>
        )
    }
}

export default Header
