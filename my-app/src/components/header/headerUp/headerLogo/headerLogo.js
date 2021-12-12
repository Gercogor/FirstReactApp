import "./headerLogo.css";
import logo from"./logo.png";

const HeaderLogo = () => {
    return (
        <div className="header-logo">
            <img src={logo} alt="Logo" />
        </div>
    )
}

export default HeaderLogo;