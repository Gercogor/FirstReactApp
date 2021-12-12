import "./headerUp.css"
import HeaderLeft from "./headerLeft/headerLeft"
import HeaderLogo from "./headerLogo/headerLogo"
import HeaderRight from "./headerRight/headerRight"

const HeaderUp = () => {
    return (
        <div className="header-up">
            <HeaderLeft />
            <HeaderLogo />
            <HeaderRight />
        </div>
    )
}

export default HeaderUp;