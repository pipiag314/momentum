import add_icon from "../assets/add-icon.svg";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-[32px]">
      <Link to="/">
        <div className="logo flex items-center gap-[4px]">
          <span>Momentum</span>
          <img src="/logo.svg" alt="logo" />
        </div>
      </Link>
      <div className="flex gap-[40px]">
        <Link className="header-btn header-secondary-btn">
          თანამშრომლის შექმნა
        </Link>
        <Link to="/createtask" className="header-btn header-primary-btn flex ">
          <img src={add_icon} alt="" />{" "}
          <span className="ml-[4px]">შექმენი ახალი დავალება</span>
        </Link>
      </div>
    </header>
  );
};
export default Header;
