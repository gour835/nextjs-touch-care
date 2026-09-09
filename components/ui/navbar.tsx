'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function NavBar() {
    const pathname = usePathname();
    const router = useRouter();
    const [url, setUrl] = useState<string>(pathname);
    console.log(url);

    async function handleurl(pathname: string) {
        setUrl(pathname);
        router.push(pathname);

    }



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    <Link className="navbar-brand" href="/"><span className="flaticon-lotus"></span>Touch&Care</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="oi oi-menu"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav ml-auto">
                            <li className={`nav-item ${url === '/' ? 'active' : ''}`}>
                                <a onClick={() => {
                                    handleurl('/')
                                }}
                                    className="nav-link"
                                >
                                    Home
                                </a>
                            </li>

                            <li
                                className={`nav-item ${url === '/#treatment' ? 'active' : ''}`}
                            >
                                <a
                                    onClick={() => {
                                        handleurl('/#treatment')
                                    }}
                                    className="nav-link"
                                >Treatments
                                </a>
                            </li>
                            <li
                                className={`nav-item ${url === '/#pricing' ? 'active' : ''}`}
                            >
                                <a onClick={() => {
                                    handleurl('/#pricing')
                                }}
                                    className="nav-link"
                                >
                                    Pricing
                                </a>
                            </li>

                            <li
                                className={`nav-item ${url === '/blogs' ? 'active' : ''}`}
                            >
                                <a
                                    onClick={() => {
                                        handleurl('/blogs')
                                    }}
                                    className="nav-link"
                                >
                                    Blog
                                </a>
                            </li>

                            <li
                                className={`nav-item ${url === '/contact' ? 'active' : ''}`}
                            >
                                <a onClick={() => {
                                    handleurl('/contact')
                                }}
                                    className="nav-link"
                                >
                                    Contact
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
            {/* // end nav */}
        </>
    )
}
