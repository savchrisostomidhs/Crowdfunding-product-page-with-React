import check from "./../../assets/icon-check.svg"
import "./ModalCompleted.css"

function ModalCompleted() {
    const handleButton = () => {
        document.querySelector(".completed").style.display = "none";
        document.querySelector(".content").style.height = "fit-content";
    }

    return (
        <div className="card-completed">
            <img src={check} alt="check" />
            <h5>Thanks for your support!</h5>
            <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                an email once our campaign is completed.
            </p>
            <button onClick={handleButton}>Got it!</button>
        </div>
    )
}

export default ModalCompleted