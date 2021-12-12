import "./headerRight.css";
import basketImg from "./basket.png";
import likeImg from "./like.png";
import profileImg from "./profile.png";

const HeaderRight = () => {
    return (
        <div className="header-right">
            <p>37 789  rub</p>
            <a href="basket">
                <img src={basketImg} alt="basket" />
            </a>
            <a href="like">
                <img src={likeImg} alt="Like" />
            </a>

            <a href="profile">
                <img src={profileImg} alt="Like" />
            </a>


        </div >
    )
}

export default HeaderRight;