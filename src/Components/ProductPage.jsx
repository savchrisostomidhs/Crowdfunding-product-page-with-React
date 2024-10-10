import logo from "./../assets/logo.svg"
import burger from "./../assets/icon-hamburger.svg"
import close from "./../assets/icon-close-menu.svg"
import mastercraft from "./../assets/logo-mastercraft.svg"
import SelectionModal from "./SelectionModal"
import ModalCompleted from "./ModalCompleted"
import "./ProductPage.css"
import { useState } from "react"

function ProductPage() {
    const [r1, setR1] = useState(false);
    const [r2, setR2] = useState(false);

    const bookmarked = (e) => {
        const bookmark = document.querySelector(".bookmark");
        const text = document.querySelector(".bookmark p");

        if (bookmark.classList.contains("bookmarked")) {
            bookmark.classList.remove("bookmarked");
            bookmark.classList.add("bmhover");
            text.style.color = "hsl(0, 0%, 48%)";
            text.innerHTML = "Bookmark";
        } else {
            bookmark.classList.add("bookmarked");
            bookmark.classList.remove("bmhover");
            text.style.color = "hsl(176, 72%, 28%)";
            text.innerHTML = "Bookmarked";
        }
    }

    const handleClick = (e) => {
        const radios = document.querySelectorAll(".radio");

        if (Number(e.target.id) === 1) {
            setR1(true);
            setR2(false);
        } else if (Number(e.target.id) === 2) {
            setR2(true);
            setR1(false);
        }

        document.querySelector(".modal").style.display = "flex";
        document.querySelector(".content").style.height = document.querySelector(".modal").offsetHeight + "px";
    }

    const handleBurger = () => {
        document.querySelector("header ul").style.display = "flex";
        document.querySelector("header .burger").style.display = "none";
        document.querySelector("header .close").style.display = "block";
    }

    const handleClose = () => {
        document.querySelector("header ul").style.display = "none";
        document.querySelector("header .close").style.display = "none";
        document.querySelector("header .burger").style.display = "block";
    }

    window.addEventListener("resize", () => {
        if (window.innerWidth > 700) {
            document.querySelector("header ul").style.display = "flex";
            document.querySelector("header .close").style.display = "none";
            document.querySelector("header .burger").style.display = "block";
        } else {
            document.querySelector("header ul").style.display = "none";
            document.querySelector("header .close").style.display = "none";
            document.querySelector("header .burger").style.display = "block";
        }
    });

    return (
        <div className="content">
            <div className="completed">
                <ModalCompleted />
            </div>
            <div className="modal">
                <SelectionModal r1={r1} r2={r2} />
            </div>
            <div className="container">
                <header>
                    <img src={logo} alt="logo" />
                    <div className="hamburger">
                        <img className="burger" src={burger} alt="burger" onClick={handleBurger} />
                        <img className="close" src={close} alt="close" onClick={handleClose} />
                    </div>
                    <ul>
                        <li>About</li>
                        <li>Discover</li>
                        <li>Get Started</li>
                    </ul>
                </header>
                <main>
                    <div className="top">
                        <img src={mastercraft} alt="mastercraft" />
                        <h1>Mastercraft Bamboo Monitor Riser</h1>
                        <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                        <div className="button">
                            <button onClick={handleClick}>Back this project</button>
                            <div className="bmhover bookmark" onClick={bookmarked}>
                                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                                    <g fill="none" fillRule="evenodd">
                                        <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                                        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                                    </g>
                                </svg>
                                <p>Bookmark</p>
                            </div>
                        </div>
                    </div>

                    <div className="middle">
                        <div className="stats">
                            <div className="backed">
                                <h2>$89,914</h2>
                                <p>of $100,000 backed</p>
                            </div>
                            <div className="backers">
                                <h2>5,007</h2>
                                <p>total backers</p>
                            </div>
                            <div className="days">
                                <h2>56</h2>
                                <p>days left</p>
                            </div>
                        </div>
                        <div className="bar"><div className="active-bar"></div></div>
                    </div>

                    <div className="bottom">
                        <h3>About this project</h3>
                        <p>The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform that elevates your screen
                            to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve
                            your posture and make you more comfortable while at work, helping you stay focused on the task at hand.
                        </p>
                        <p>Featuring artisan craftsmanship, the simplicity of design creates extra desk space below your computer
                            to allow notepads, pens, and USB sticks to be stored under the stand.
                        </p>
                        <div className="card bamboo">
                            <div className="heading">
                                <h4>Bamboo Stand</h4>
                                <p>Pledge $25 or more</p>
                            </div>
                            <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                                you’ll be added to a special Backer member list.
                            </p>
                            <div className="left">
                                <p><span>101</span>left</p>
                                <button id="1" onClick={handleClick}>Select Reward</button>
                            </div>
                        </div>
                        <div className="card black-edition">
                            <div className="heading">
                                <h4>Black Edition Stand</h4>
                                <p>Pledge $75 or more</p>
                            </div>
                            <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                                member list. Shipping is included.
                            </p>
                            <div className="left">
                                <p><span>64</span>left</p>
                                <button id="2" onClick={handleClick}>Select Reward</button>
                            </div>
                        </div>
                        <div className="card mahogany">
                            <div className="heading">
                                <h4>Mahogany Special Edition</h4>
                                <p>Pledge $200 or more</p>
                            </div>
                            <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                                to our Backer member list. Shipping is included.
                            </p>
                            <div className="left">
                                <p><span>0</span>left</p>
                                <button>Out of Stock</button>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
}

export default ProductPage