import React from 'react';
import {Button} from "antd-mobile";
import Header from '@/components/Header'
import {Link} from "react-router-dom";
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageContentWrapper from '@/components/PageContentWrapper';

class Home extends React.Component{
    componentDidMount() {
        console.log('home')
    }

    render() {
        return (
            <PageHeaderWrapper header>
                <Header title='home' icon='left' />
                <PageContentWrapper>
                    <div style={{height:'1000px'}}>
                        <Button>Home</Button>
                        <Link to='/tabs'>Tabs</Link>
                    </div>
                </PageContentWrapper>
            </PageHeaderWrapper>
        )
    }
}
export default Home;
