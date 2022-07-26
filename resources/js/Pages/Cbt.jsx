import React from 'react';
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Components/NavOri';
import './Style.css'

export default function Cbt(props) {
    return (
        <div>
            <Head title={props.title}/>
            <Nav/>
            <body
                style={{ backgroundColor: '#3E6D81' }}
                className='min-h-screen'
            >
                <div className="container-fluid pt-5">
                    <h2
                        className="mt-3 mb-5 text-center"
                        style={{ color: "white", fontWeight: 800 }}
                    >
                        Computer Based Test
                    </h2>
                    <img
                        className="mx-auto d-block"
                        width="15%"
                        src="/images/pronoun_reference.png"
                        alt=""
                    />
                    <p className="text-center mt-4" style={{ color: "white" }}>
                        Turn your question collection into Computer Based Test with a few simple and
                        easy step immediately. <br /> Students can instantly join the test with the
                        link and password you provide.
                    </p>
                    <div className="row mt-4">
                        <div className="col-4" />
                        <div className="col-2 text-center">
                        <a href="/test-dashboard">
                            <button
                            type="button"
                            className="btn ps-5 pe-5 text-light"
                            style={{ backgroundColor: "#5E7B87" }}
                            >
                            Test Dashboard
                            </button>
                        </a>
                        </div>
                        <div className="col-2 text-center">
                        <a href="/cbt_start">
                            <button
                            type="button"
                            className="btn ps-5 pe-5 text-light"
                            style={{ backgroundColor: "#5E7B87" }}
                            >
                            Start Test
                            </button>
                        </a>
                        </div>
                        <div className=" col-4"></div>
                    </div>
                </div>
            </body>
        </div>
    )
}
