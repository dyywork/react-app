import React from 'react';
import {Button} from "antd-mobile";
import Header from '@/components/Header'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageContentWrapper from '@/components/PageContentWrapper';

class Home extends React.Component{
    
    componentDidMount() {
    }

    goTabs=()=> {
        this.props.history.push('/app/tabs?id=1')
    }

    render() {
        return (
            <PageHeaderWrapper header>
                <Header title='home' />
                <PageContentWrapper>
                    <div style={{height:'1000px'}}>
                        <Button type="primary" onClick={this.goTabs}>Tabs</Button>   
                    </div>
                </PageContentWrapper>
            </PageHeaderWrapper>
        )
    }
}
export default Home;
