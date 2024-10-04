import MenuIcon from "@mui/icons-material/Menu";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Header = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-[#11ff77] px-[10px]">
        <div className="flex items-center">
          <MenuIcon
            style={{
              width: "50px",
              height: "50px",
              color: "white",
              cursor: "pointer",
            }}
          />

          <div className="flex ml-5 items-baseline">
            <div className="text-[40px] text-white font-bold">TMS</div>

            <div className="text-base text-white ml-[10px]">
              Total Marketing Server
            </div>
          </div>
        </div>

        <div className="flex items-center">
          <EmojiEmotionsIcon
            style={{ width: "50px", height: "50px", color: "yellow" }}
          />

          <div className="ml-5 flex items-center cursor-pointer">
            <div className="text-white text-xl mr-5">휴머스온</div>

            <ArrowDropDownIcon style={{ color: "white" }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
