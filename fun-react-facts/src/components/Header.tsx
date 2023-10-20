import Logo from "./Logo.tsx";
import HeaderTitle from "./HeaderTitle.tsx";
import "./Header.css";

function Header() {
  return (
    <header className="header__container">
      <Logo />
      <a href="https://scrimba.com/learn/learnreact/first-react-practice-codb545d191c6488eb4d30204" target="_blank"> <HeaderTitle /> </a>
    </header>
  );
}

export default Header;
