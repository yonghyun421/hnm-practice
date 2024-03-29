import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useNavigate } from "react-router-dom";

const Navbar = ({ authentication, setAuthentication }) => {
  const menuList = [
    "여성",
    "Divided",
    "남성",
    "신생아/유아",
    "아동",
    "H&M HOME",
    "Sale",
    "지속가능성",
  ];
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const search = (e) => {
    if (e.key === "Enter") {
      let keyword = e.target.value;
      navigate(`/?q=${keyword}`);
    }
  };
  return (
    <div>
      <div className="nav-login-button">
        {authentication ? (
          <div onClick={() => setAuthentication(false)}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer", marginLeft: "5px" }}>
              로그아웃
            </span>
          </div>
        ) : (
          <div onClick={() => navigate("/login")}>
            <FontAwesomeIcon icon={faUser} />
            <span style={{ cursor: "pointer", marginLeft: "5px" }}>로그인</span>
          </div>
        )}
      </div>
      <div className="nav-section">
        <img
          width={100}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1200px-H%26M-Logo.svg.png"
          alt="logo"
        />
      </div>
      <div className="menu-area">
        <ul className="menu-list">
          {menuList.map((menu) => (
            <li className="menu">{menu}</li>
          ))}
        </ul>
        <div className="search-area">
          <FontAwesomeIcon icon={faSearch} />
          <input
            id="searchInput"
            type="text"
            onKeyPress={(e) => search(e)}
            placeholder="상품을 입력해주세요."
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
