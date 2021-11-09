import "./header.css";
import Logo from "../../img/logo.svg";


const Header = () => {
  return (
    <div className="logo">
      <img className="logo-tas" src={Logo} alt="logo"/>
      <div className="text">
        <p>Search web app</p>
      </div>
    </div>
  );
};

export default Header;
