import React from 'react';
// import Row from 'react-bootstrap/Row'
import { Link, Head } from '@inertiajs/inertia-react';
import Nav from '@/Components/NavOri';
import './Style.css';

export default function StartTest(props) {
    return (
        <div>
            <Head title={props.title}/>
            <Nav/>
            <link />
            <br /><br />
            <div className='p-5 font-poppins'>
                <p id="demo" className="mt-2" style={{color: '#3E6D81', fontSize: '20px', fontWeight: 600, textAlign: 'right'}} />
                <div className="row mb-4 mt-5 gap-4">
                    <div className="col-lg-9 col-md-9 col-12 p-4" style={{backgroundColor: "white", textAlign:"justify", boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.35)"}}>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus consequatur eveniet laborum. Rerum in perferendis labore officiis reprehenderit officia quas dolore minus, saepe repudiandae laudantium aliquam temporibus, inventore maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus consequatur eveniet laborum. Rerum in perferendis labore officiis reprehenderit officia quas dolore minus, saepe repudiandae laudantium aliquam temporibus, inventore maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus consequatur eveniet laborum. Rerum in perferendis labore officiis reprehenderit officia quas dolore minus, saepe repudiandae laudantium aliquam temporibus, inventore maxime? Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque repellendus consequatur eveniet laborum. Rerum in perferendis labore officiis reprehenderit officia quas dolore minus, saepe repudiandae laudantium aliquam temporibus, inventore maxime?
                        </p>
                        <p>
                            1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis laudantium numquam maiores nisi aut? Molestias rem, at ratione esse eius aliquid voluptatem animi. Totam tempore amet rerum fugit, sapiente rem.
                        </p>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Lorem
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Ipsum
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Dolor
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                            <label className="form-check-label" htmlFor="flexRadioDefault1">
                                Sit Amet
                            </label>
                        </div>
                        <div className="row mt-3" style={{float: 'right'}}>
                            <a href="<?= base_url('CBT/result_test') ?>">
                                <button className="btn" style={{backgroundColor: '#3E6D81', width: '150px', color: 'white'}}>Next</button>
                            </a>
                        </div>
                    </div>
                    <div className="col-lg col-md col p-4" style={{backgroundColor: "white", textAlign:"justify", boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.35)"}}>
                        <div class="grid grid-cols-4 gap-4">
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">01</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">02</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">03</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">04</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">05</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">06</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">07</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">08</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">09</div>
                            <div style={{backgroundColor: "lightgrey", textAlign: 'center'}} className="p-2">10</div>
                        </div>
                    </div>
                </div>
            </div> 
        </div> 
    )
}