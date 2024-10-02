import { useState } from "react";

import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import { menus, selectIcon } from "../util/util";

const Menu = () => {
  const [isBoardOpen, setIsBoardOpen] = useState(false);

  const handleBoard = () => {
    setIsBoardOpen(!isBoardOpen);
  };

  const [isSendOpen, setIsSendOpen] = useState(false);

  const handleSend = () => {
    setIsSendOpen(!isSendOpen);
  };

  return (
    <>
      <div className="w-2/12 flex-col">
        {menus.map((menu) => (
          <>
            <div
              className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]"
              key={menu.id}
              onClick={() => {
                if (menu.id === 1) handleBoard();
                else if (menu.id === 2) handleSend();
              }}
            >
              <div className="flex items-center">
                <div>{selectIcon(menu.icon)}</div>

                <div className="ml-[10px] font-bold text-xl"> {menu.title}</div>
              </div>

              <ExpandCircleDownOutlinedIcon
                style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
              />
            </div>
            {menu.subtitle &&
              isBoardOpen &&
              menu.id === 1 &&
              menu.subtitle.map((subtitle) => (
                <div
                  className="px-10 py-3 text-xl cursor-pointer"
                  key={subtitle.subId}
                >
                  {subtitle.title}
                </div>
              ))}
            {menu.subtitle &&
              isSendOpen &&
              menu.id === 2 &&
              menu.subtitle.map((subtitle) => (
                <div
                  className="px-10 py-3 text-xl cursor-pointer"
                  key={subtitle.subId}
                >
                  {subtitle.title}
                </div>
              ))}
          </>
        ))}
      </div>
    </>
  );
};

export default Menu;
