import "./headerLeft.css"
import HeaderLeftPhone from "./phone/headerLeftPhone";
import HeaderLeftMail from "./mail/headerLeftMail";

const HeaderLeft = () => {
    return (
        <div className="header-left">
            <HeaderLeftPhone />
            <HeaderLeftMail />
        </div>
    )
}

export default HeaderLeft;