import HeaderBottom from "./HeaderBottom";
import HeaderTop from "./HeaderTop";

const Header = () => {
  return (
    <header className="w-full sticky top-0 z-50">
      <HeaderTop />
      <HeaderBottom />
    </header>
  );
};

export default Header;
