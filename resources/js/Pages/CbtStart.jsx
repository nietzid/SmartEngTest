import React from 'react';
// import Row from 'react-bootstrap/Row'
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Components/NavOri';
import './Style.css';

export default function CbtStart(props) {
    return (
        <div>
            <Head title={props.title}/>
            <Nav/>
            <link />
            <br /><br />
            <div className='container mt-5 font-poppins'>
                <h1 style={{color: "#3E6D81"}}> <b>Let`s Start</b> </h1>
                <form className='mt-5'>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtext1" className="form-label"><b>Name</b></label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtext1" className="form-label"><b>Code</b></label>
                        <input type="text" className="form-control" id="" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputtext1" className="form-label"><b>Password</b></label>
                        <input type="text" className="form-control" id="" />
                    </div>

                    <a href="/start_test">
                            <button
                            type="button"
                            className="btn ps-5 pe-5 text-light"
                            style={{ backgroundColor: "#3E6D81", float: 'right' }}
                            >
                            Start Test
                            </button>
                        </a>
                </form>
            </div> 
        </div>
    )
}
