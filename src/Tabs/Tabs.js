import React from 'react';
import {Button} from "antd-mobile";
import Header from '@/components/Header'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
class Tabs extends React.Component{
    render() {
        return (
            <PageHeaderWrapper>
                {this.props.children}
                <Header title='tabs' icon='left' />
                <div className="Tabs">
                    <Button>Tabs</Button>
                </div>
            </PageHeaderWrapper>
        )
    }
}
export default Tabs;
