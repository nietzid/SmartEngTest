import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Components/NavOri';
import Button from '@/Components/Button';
import './Style.css'

export default function TestDashboard(props) {
    console.log(props)
    return (
        <div>
            <Head title={props.title}/>
            <Nav/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            <div className="grid grid-rows-9 grid-flow-col gap-4 mt-5 mx-5" >
                <div className="row-span-4 ... font-poppins" >
                    <h1 className="font-bold text-regal-blue">
                        Test Dashboard
                    </h1>
                    <br/>
                    <p font-bold>
                        Here you can view and manage all the test you <br/> have created
                    </p>
                    <a href="/" style={{ textDecoration: 'none' }}>
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-full shadow-sm text-white bg-regal-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create new test
                        </button>
                    </a>
                </div>

                {/*<div className="row-span-6 ... me-5">*/}
                {/*    /!*<img src="/images/test_img.png" alt="Test Logo" width="35%" style={{float: 'middle'}}/>*!/*/}
                {/*</div>*/}

            </div>

            <div className="mt-5 mr-8">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-4 lg:grid-cols-auto mx-3">
                    {props.tests.map((test) => (
                        <li key={test.id} className="col-span-auto divide-gray-200" >
                            <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100" style={{ textDecoration: 'none' }}>
                                <h5 className="mb-0 text-2xl font-bold tracking-tight text-regal-blue">{test.title}</h5>
                                <hr className="mb-4 bg-regal-blue"/>
                                <p className="mb-0 font-poppins text-gray-700">{test.date}</p>
                                <p className="font-normal text-gray-700">{test.start_time + " - " + test.end_time}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
