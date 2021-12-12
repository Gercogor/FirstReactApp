import "./headerLeftMail.css";
import mailImg from "./mail.png";

const HeaderLeftMail = () => {
    return (
        <div className ="header-left mail">
            <img src={mailImg} alt="MAIL" />
            <a href="email">Mr.Driskell@mail.ru</a>
        </div>
    )
}

export default HeaderLeftMail;