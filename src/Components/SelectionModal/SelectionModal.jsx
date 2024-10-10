import { useEffect, useState } from "react"
import close from "./../../assets/icon-close-modal.svg"
import "./SelectionModal.css"

function SelectionModal({ r1, r2 }) {
    const [pledge25, setPledge25] = useState(25);
    const [pledge75, setPledge75] = useState(75);

    const [radio0, setRadio0] = useState(false);
    const [radio1, setRadio1] = useState(r1);
    const [radio2, setRadio2] = useState(r2);

    useEffect(() => {
        setRadio1(r1);
        setRadio2(r2);
    }, [r1, r2]);

    useEffect(() => {
        const pledge = document.querySelectorAll(".selected-card .pledge");
        const selected = document.querySelectorAll(".selected");
        const card = document.querySelectorAll(".selected-card");

        if (radio1 === true) {
            pledge.forEach(p => p.style.display = "none");
            pledge[1].style.display = "flex"

            selected.forEach(s => s.classList.contains("border-bottom") ? s.classList.remove("border-bottom") : "");
            selected[1].classList.add("border-bottom");

            card.forEach(c => c.classList.contains("checked") ? c.classList.remove("checked") : "");
            card[1].classList.add("checked");
        } else if (radio2 === true) {
            pledge.forEach(p => p.style.display = "none");
            pledge[2].style.display = "flex"

            selected.forEach(s => s.classList.contains("border-bottom") ? s.classList.remove("border-bottom") : "");
            selected[2].classList.add("border-bottom");

            card.forEach(c => c.classList.contains("checked") ? c.classList.remove("checked") : "");
            card[2].classList.add("checked");
        }
    }, [radio1, radio2]);

    const handleRadio0 = () => {
        setRadio0(true);
        setRadio1(false);
        setRadio2(false);
    }

    const handleRadio1 = () => {
        setRadio1(true);
        setRadio0(false);
        setRadio2(false);
    }

    const handleRadio2 = () => {
        setRadio2(true);
        setRadio0(false);
        setRadio1(false);
    }

    const handleRadio = (e) => {
        const pledge = document.querySelectorAll(".selected-card .pledge");
        const selected = document.querySelectorAll(".selected");
        const card = document.querySelectorAll(".selected-card");

        if (e.target.checked) {
            pledge.forEach(p => p.style.display = "none");
            pledge[e.target.id].style.display = "flex"

            selected.forEach(s => s.classList.contains("border-bottom") ? s.classList.remove("border-bottom") : "");
            selected[e.target.id].classList.add("border-bottom");

            card.forEach(c => c.classList.contains("checked") ? c.classList.remove("checked") : "");
            card[e.target.id].classList.add("checked");
        }

        document.querySelector(".content").style.height = document.querySelector(".modal").offsetHeight + "px";
    }

    const handlePledge25 = (e) => {
        setPledge25(e.target.value);
    }

    const pledge25OnFocus = () => {
        document.querySelector(".form1 label").style.borderColor = "hsl(176, 50%, 47%)";
    }

    const pledge25OnBlur = () => {
        document.querySelector(".form1 label").style.borderColor = "hsla(0, 0%, 48%, 0.4)";
    }

    const handlePledge75 = (e) => {
        setPledge75(e.target.value);
    }

    const pledge75OnFocus = () => {
        document.querySelector(".form2 label").style.borderColor = "hsl(176, 50%, 47%)";
    }

    const pledge75OnBlur = () => {
        document.querySelector(".form2 label").style.borderColor = "hsla(0, 0%, 48%, 0.4)";
    }

    const handleCloseButton = () => {
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".content").style.height = "fit-content";
        cleanUp();
    }

    const cleanUp = () => {
        setRadio0(false);
        setRadio1(false);
        setRadio2(false);

        const pledge = document.querySelectorAll(".selected-card .pledge");
        const selected = document.querySelectorAll(".selected");
        const card = document.querySelectorAll(".selected-card");

        pledge.forEach(p => p.style.display = "none");
        selected.forEach(s => s.classList.contains("border-bottom") ? s.classList.remove("border-bottom") : "");
        card.forEach(c => c.classList.contains("checked") ? c.classList.remove("checked") : "");
    }

    const handleButtonCompleted = () => {
        document.querySelector(".modal").style.display = "none";
        document.querySelector(".completed").style.display = "flex";
        document.querySelector(".content").style.height = "100%";
        cleanUp();
    }

    return (
        <div className="selection-card">
            <img src={close} alt="close" onClick={handleCloseButton} />
            <h3>Back this project</h3>
            <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>

            <div className="selected-card no-reward">
                <div className="selected">
                    <div className="sel-input">
                        <input type="radio" name="select" id="0" checked={radio0} onClick={handleRadio0} onChange={handleRadio} />
                    </div>
                    <div className="selection-text">
                        <label htmlFor="0"><h4>Pledge with no reward</h4></label>
                        <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                            you will be signed up to receive product updates via email.
                        </p>
                    </div>
                </div>
                <div className="pledge">
                    <button onClick={handleButtonCompleted}>Continue</button>
                </div>
            </div>

            <div className="selected-card">
                <div className="selected">
                    <div className="sel-input">
                        <input type="radio" name="select" id="1" checked={radio1} onClick={handleRadio1} onChange={handleRadio} />
                    </div>
                    <div className="selection-text">
                        <div className="selection-heading">
                            <div className="selection-left">
                                <label htmlFor="1"><h4>Bamboo Stand</h4></label>
                                <p>Pledge $25 or more</p>
                            </div>
                            <p><span>101</span> left</p>
                        </div>
                        <p>You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and
                            you’ll be added to a special Backer member list.
                        </p>
                    </div>
                </div>
                <div className="pledge">
                    <p>Enter your pledge</p>
                    <div className="form form1">
                        <label htmlFor="num1">
                            <p>$</p>
                            <input className="radio" type="number" value={pledge25} id="num1" onChange={handlePledge25} onFocus={pledge25OnFocus} onBlur={pledge25OnBlur} />
                        </label>
                        <button onClick={handleButtonCompleted}>Continue</button>
                    </div>
                </div>
            </div>

            <div className="selected-card">
                <div className="selected">
                    <div className="sel-input">
                        <input type="radio" name="select" id="2" checked={radio2} onClick={handleRadio2} onChange={handleRadio} />
                    </div>
                    <div className="selection-text">
                        <div className="selection-heading">
                            <div className="selection-left">
                                <label htmlFor="2"><h4>Black Edition Stand</h4></label>
                                <p>Pledge $75 or more</p>
                            </div>
                            <p><span>64</span> left</p>
                        </div>
                        <p>You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer
                            member list. Shipping is included.
                        </p>
                    </div>
                </div>
                <div className="pledge">
                    <p>Enter your pledge</p>
                    <div className="form form2">
                        <label htmlFor="num2">
                            <p>$</p>
                            <input className="radio" type="number" value={pledge75} id="num2" onChange={handlePledge75} onFocus={pledge75OnFocus} onBlur={pledge75OnBlur} />
                        </label>
                        <button onClick={handleButtonCompleted}>Continue</button>
                    </div>
                </div>
            </div>

            <div className="selected-card card-mahogany">
                <div className="selected">
                    <div className="sel-input">
                        <input type="radio" id="3" value={200} />
                    </div>
                    <div className="selection-text">
                        <div className="selection-heading">
                            <div className="selection-left">
                                <h4>Mahogany Special Edition</h4>
                                <p>Pledge $200 or more</p>
                            </div>
                            <p><span>0</span> left</p>
                        </div>
                        <p>You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added
                            to our Backer member list. Shipping is included.
                        </p>
                    </div>
                </div>
                <div className="pledge">
                    <p>Enter your pledge</p>
                    <div className="form">
                        <label htmlFor="num3">
                            <p>$</p>
                            <input type="number" id="num3" />
                        </label>
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SelectionModal
