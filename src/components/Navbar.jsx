import React, { useContext, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avtar from "../data/avatar.jpg";
import { Cart, Chat, Notification, UserProfile } from ".";
import { useStateContext } from "../contexts/ContextProvider";
const NavButton = ({ title, customFunc, color, icon, dotColor }) => (
  <TooltipComponent content={title} position="BottomCenter">
    <button
      type="button"
      style={{ color }}
      onClick={customFunc}
      className=" relative text-xl rounded-full p-3 hover:bg-light-gray"
    >
      <span
        style={{ background: dotColor }}
        className=" absolute inline-flex rounded-full h-2 w-2 right-2
    top-2"
      />
      {icon}
    </button>
  </TooltipComponent>
);
const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor,
  } = useStateContext();
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [screenSize]);
  const handleResize = () => setScreenSize(window.innerWidth);

  useEffect(() => {
    // console.log("hello");
    if (screenSize <= 900) {
      setActiveMenu(false);
    } else {
      setActiveMenu(true);
    }
  }, [screenSize]);
  return (
    <div className=" flex justify-between p-2 md:mx-6  relative">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prevState) => !prevState)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />

      <div className=" flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          customFunc={() => handleClick("chat")}
          color={currentColor}
          dotColor="#03C9D7"
          icon={<BsChatLeft />}
        />{" "}
        <NavButton
          title="Notificaton"
          dotColor="#03C9D7"
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="profile" position="BottomCenter">
          <div
            className="flex items-center gap-2 cursor-pointer p-1 hover:bg-light-gray rounded-lg"
            onClick={() => handleClick("userProfile")}
          >
            <img src={avtar} alt="avatar" className="rounded-full w-8 h-8" />
            <p>
              <span
                className=" text-gray-400
            text-14"
              >
                Hi,{" "}
                <span className="text-gray-400 font-bold ml-1 text-14">
                  Sahil
                </span>
              </span>
            </p>
            <MdKeyboardArrowDown
              className=" text-gray-400
            text-14"
            />
          </div>
        </TooltipComponent>
        {isClicked.cart && <Cart />}
        {isClicked.chat && <Chat />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </div>
  );
};

export default Navbar;
