import { useState } from "react";
import add_icon from "../assets/add-icon.svg";
import { Link } from "react-router";
import Modal from "./Modal";
import { useEffect } from "react";

const Header = () => {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if(showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }, [showModal])
  
  document.body

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <header className="flex justify-between items-center py-[32px]">
        <Link to="/">
          <div className="logo flex items-center gap-[4px]">
            <span>Momentum</span>
            <img src="/logo.svg" alt="logo" />
          </div>
        </Link>
        <div className="flex gap-[40px]">
          <button
            onClick={toggleModal}
            className="header-btn header-secondary-btn">
            თანამშრომლის შექმნა
          </button>
          <Link
            to="/createtask"
            className="header-btn header-primary-btn flex w-fit">
            <img src={add_icon} alt="" />{" "}
            <span className="ml-[4px]">შექმენი ახალი დავალება</span>
          </Link>
        </div>
      </header>

      {showModal && <Modal toggleModal={toggleModal} />}
    </>
  );
};
export default Header;
