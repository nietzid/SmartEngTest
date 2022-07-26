import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Components/NavOri';
import Button from '@/Components/Button';
import './Style.css'

const tests = [
    {
        test_id: '123',
        title: 'English Test',
        date: 'Admin',
        start_time: 'janecooper@example.com',
        end_time: '+1-202-555-0170',
    },
    {
        test_id: '123',
        title: 'English Test',
        date: 'Admin',
        start_time: 'janecooper@example.com',
        end_time: '+1-202-555-0170',
    },
    {
        test_id: '123',
        title: 'English Test',
        date: 'Admin',
        start_time: 'janecooper@example.com',
        end_time: '+1-202-555-0170',
    },
    {
        test_id: '123',
        title: 'English Test',
        date: 'Admin',
        start_time: 'janecooper@example.com',
        end_time: '+1-202-555-0170',
    },
    // More data...
]

export default function TestDashboard(props) {
    return (
        <div>
            <Head title={props.title}/>
            <Nav/>
            <link href="https://fonts.googleapis.com/css2?family=Poppins&display=swap" rel="stylesheet"/>
            <div className="grid grid-rows-9 grid-flow-col gap-4 mt-5 ms-5" >
                <div className="row-span-4 ... font-poppins" >
                    <h1 className="font-bold text-regal-blue">
                        Test Dashboard
                    </h1>
                    <p font-bold>
                        Here you can view and manage all the test you <br/> have created
                    </p>

                    <button
                        type="button"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-regal-blue hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Create new test
                    </button>
                </div>

                {/*<div className="row-span-6 ... me-5">*/}
                {/*    /!*<img src="/images/test_img.png" alt="Test Logo" width="35%" style={{float: 'middle'}}/>*!/*/}
                {/*</div>*/}
            </div>

            <div className="mt-5">
                <ul role="list" className="grid grid-cols-1 gap-6 sm:grid-cols-3 lg:grid-cols-auto ml-5 mr-5">
                    {tests.map((test) => (
                        <li key={test.test_id} className="col-span-1   divide-gray-200">
                            <a href="#" className="block p-6 max-w-sm bg-white rounded-lg border border-gray-200 shadow-md hover:bg-gray-100">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Noteworthy technology acquisitions 2021</h5>
                                <p className="font-normal text-gray-700">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
    )
}
