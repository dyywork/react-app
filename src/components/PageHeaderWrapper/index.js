/*
* @header : 是否留出header的位置
* */

import React, {Component} from 'react';
import './index.less';

class PageHeaderWrapper extends Component {

    constructor(props) {
        super(props);
        this.state = {}
    }

    componentDidMount() {
    }

    render() {
        const {header} = this.props;
        return (
            <div className={header &&'header'}>
                {this.props.children}
            </div>
        )
    }
}

export default PageHeaderWrapper
