import { Fragment } from 'react'


export default function Nav() {
    return (
        <div>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
            <nav
                className="navbar navbar-expand-lg navbar-light ps-3 pe-3 fixed-top"
                style={{
                    backgroundColor: "#3E6D81",
                    boxShadow: "0px 0px 10px -2px rgba(0,0,0,0.35)"
                }}
            >

                <div className="container-fluid ">
                    <a className="navbar-brand" href="#">
                        <img
                            src="/images/logo-light.png"
                            width="60%"
                            alt=""
                        />
                    </a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul
                            className="navbar-nav ms-auto mb-2 mb-lg-0"
                            style={{ fontWeight: 600 }}
                        >
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                style={{ color: "white" }}
                                aria-current="page"
                                href="/"
                            >
                                Home 
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                style={{ color: "white" }}
                                aria-current="page"
                                href="/collection"
                            >
                                Question Collection 
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                style={{ color: "white" }}
                                aria-current="page"
                                href="/generate"
                            >
                                Generate 
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                style={{ color: "white" }}
                                aria-current="page"
                                href="/cbt"
                            >
                                CBT 
                            </a>
                            </li>
                            <li className="nav-item">
                            <a
                                className="nav-link"
                                style={{ color: "white" }}
                                aria-current="page"
                                href="/signin"
                            >
                                Sign In 
                            </a>
                            </li>
                            {/* <div class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <a class='dropdown-item' href='/'>
                                            Masuk
                                        </a>
                                        <a class='dropdown-item' href='/'>
                                            Profile
                                        </a>
                                    </div> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}