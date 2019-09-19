import React, {Component} from 'react';
import PageHeaderWrapper from "@/components/PageHeaderWrapper";
import {InputItem,Button} from 'antd-mobile';
import { createForm } from 'rc-form';

class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidMount() {
    }

    login=()=> {
      console.log(this.props)
        const {history} = this.props;
      history.push('/app/home')
    };

    render() {
        const {getFieldProps} = this.props.form;
        return (
            <PageHeaderWrapper>
                <InputItem
                    {...getFieldProps('phone')}
                    type="phone"
                    placeholder="186 1234 1234"
                >手机号码</InputItem>
                <InputItem
                    {...getFieldProps('password')}
                    type="password"
                    placeholder="****"
                >密码</InputItem>
                <Button type="primary" onClick={()=>this.login()}>登录</Button>
            </PageHeaderWrapper>
        )
    }
}

export default createForm()(Login)
