import React from 'react';
import {Button} from "antd-mobile";
import Header from '@/components/Header'
import PageHeaderWrapper from '@/components/PageHeaderWrapper';


class Person extends React.Component{
    render() {
        return (
            <PageHeaderWrapper header>
                <Header title='Person'/>
                <Button>Person</Button>
            </PageHeaderWrapper>
        )
    }
}
export default Person;
