import "./headerLeftPhone.css";
import phoneImg from "./TelLeft.png"

const HeaderLeftPhone = () => {
    return (
        <div className="header-phone">
            <div class="phone">
                <img src={phoneImg} alt="TelLeft" />
                <a href="tel">+7 952 552-52-52</a>
            </div>

            <div class="mesen">
                <a href="https://reactjs.org" class="msg-link">Viber</a>
                <a href="https://reactjs.org" class="msg-link">WhatsApp</a>
                <a href="https://reactjs.org" class="msg-link">Telegram</a>
            </div>
        </div>
    )
}

export default HeaderLeftPhone;