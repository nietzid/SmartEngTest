import React from 'react';
// import Row from 'react-bootstrap/Row'
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Components/NavOri';

export default function TestDashboard(props) {
    return (
        <div>
            <Head title={props.title}/>
            <Nav/>
            <link />
            <h1>lorem</h1>
            <div className="grid grid-rows-3 grid-flow-col gap-4">
                <div className="row-span-2 ...">
                    <h1 className="font-bold text-regal-blue">
                        Test Dashboard
                    </h1>
                </div>
                <div className="row-span-3 ...">01</div>
                {/*<div className="row-span-2 col-span-2 ...">03</div>*/}
            </div>
            {/*<Row>*/}
            {/*    <Col md={{ span: 9, offset: 3}}>*/}
            {/*        <h1>Lorem Ipsum</h1>*/}
            {/*    </Col>*/}
            {/*    <Col md={{ span: 3, offset: 3}}>*/}
            {/*        <h1>Lorem Ipsum</h1>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
        </div>
    )
}
