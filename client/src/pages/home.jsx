import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import "./style.css";

function Home() {
    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll('section');
            sections.forEach(sec => {
                const top = window.scrollY;
                const offset = sec.offsetTop - 150;
                const height = sec.offsetHeight;

                if (top >= offset && top < offset + height) {
                    sec.classList.add('show-animate');
                } else {
                    sec.classList.remove('show-animate');
                }
            });
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup function to remove event listener on unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array ensures that this effect runs only once after the initial render

    return (
        <div>
            <header>
                <nav>
                    <ul>
                        <li className="dropdown">
                            <a href="#" className="dropbtn">Menu <i className="fas fa-caret-down"></i></a>
                            <div className="dropdown-content">
                                <a href="#">Recipe</a>
                                <a href="#">About Us</a>
                            </div>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            {/* <a href="login.html">Login</a> */}
                            <Link to="/login">Login</Link>
                            
                        </li>
                        <li>
                            <Link to="/login">Register</Link>
                        </li>
                        <li>
                            <a href="#">
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </li>
                    </ul>
                </nav>
            </header>
            <main>
                <img src="original.png" alt="background" className="bg-img" />
                <div className="text parallax">
                    <h1>COOKZILLA</h1>
                </div>  
            </main>
            <section className="sec-1 show-animate">
                <h1 className="animate">Welcome to Cookzilla</h1>
                <p className="animate">Get your personalized recipe here</p>
            </section>
            <section className="sec-2">
                <h1 className="animate">Give it a Try!!!</h1>
                <p className="animate">Try our AI integrated recipe finder</p>
            </section>
            <Link to="./search">
                <button className="c-button c-button--gooey"> Recipes
                    <div className="c-button__blobs">
                        <div></div>
                        <div></div>
                        <div></div>
                    </div>
                </button>
            </Link>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style={{ display: 'none' }}>
                <defs>
                    <filter id="goo">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur>
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo"></feColorMatrix>
                        <feBlend in="SourceGraphic" in2="goo"></feBlend>    
                    </filter>
                </defs>
            </svg>
            <section className="sec-4">
                <h1 className="animate">Discover our recipes</h1>
                <p className="animate">Find different cuisines</p>
            </section>
            <section className="sec-5">
                <div className="images">
                    <img src="American.jpg" alt="American cuisine" className="animate" style={{ "--i": 0 }} />
                    <img src="chickentikka.jpg" alt="Chicken Tikka" className="animate" style={{ "--i": 1 }} />
                    <img src="Chinesecuisine.jpg" alt="Chinese cuisine" className="animate" style={{ "--i": 2 }} />
                    <a href = "#"><img src="Frenchcuisine.jpg" alt="French cuisine" className="animate" style={{ "--i": 3 }} /></a>
                    <img src="Indiancuisine.jpg" alt="Indian cuisine" className="animate" style={{ "--i": 4 }} />
                </div>
            </section>
            <div className="about-us">
                <div className="container">
                    <h2>About Us</h2>
                    <p>Just some students doing DBMS project</p>
                    <div className="social-icons">
                        <ul>
                            <li><a href="#"><img src="instagram-icon.jpg" alt="Instagram" /></a></li>
                            <li><a href="#"><img src="facebook-icon.webp" alt="Facebook" /></a></li>
                            <li><a href="#"><img src="twitter-icon.png" alt="Twitter" /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;