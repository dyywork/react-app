import React from 'react';
import {Button} from "antd-mobile";
import Header from '@/components/Header'
import {Link,withRouter} from "react-router-dom";
import PageHeaderWrapper from '@/components/PageHeaderWrapper';
import PageContentWrapper from '@/components/PageContentWrapper';
import RouteWithSubRoutes from '@/components/RouteWithSubRoutes';

class Home extends React.Component{
    componentDidMount() {
        console.log('home')
    }

    render() {
        console.log(this.props)
        const {routes,children} = this.props;
        console.log(children)
        console.log(routes)
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
export default withRouter(Home);
