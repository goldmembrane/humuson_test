import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeIcon from "@mui/icons-material/Home";

const SemiHeader = () => {
  return (
    <>
      <div className="px-[10px] flex items-center border-b-2 border-[#99ff77]">
        <div className="w-2/12 border-r-2 border-[#e3e3e3] flex justify-center items-center cursor-pointer p-[10px]">
          <div className="text-xl mr-2">휴머스온</div>

          <ArrowDropDownIcon />
        </div>

        <div className="flex justify-between items-center px-5 py-[10px] w-10/12">
          <div className="text-2xl font-bold">공지사항</div>

          <div className="flex items-center">
            <HomeIcon
              style={{ color: "#b6b6b6", width: "20px", height: "20px" }}
            />
            <div className="ml-[10px] text-[#b6b6b6] text-lg">
              / 게시판 / 공지사항
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SemiHeader;
