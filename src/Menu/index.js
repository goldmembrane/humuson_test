import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ExpandCircleDownOutlinedIcon from "@mui/icons-material/ExpandCircleDownOutlined";

import { useLocation, useNavigate } from "react-router-dom";

const Menu = () => {
  const router = useNavigate();

  const { pathname } = useLocation();

  return (
    <>
      <nav className="w-2/12 flex-col">
        <div
          className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]"
          onClick={() => router("/article")}
        >
          <div className="flex items-center">
            <CalendarMonthIcon />

            <div className="ml-[10px] font-bold text-xl">게시판</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>
        {pathname.includes("/article") && (
          <>
            <div
              className="px-10 py-3 text-xl cursor-pointer"
              onClick={() => router("/article/notice")}
            >
              공지사항
            </div>
            <div
              className="px-10 py-3 text-xl cursor-pointer"
              onClick={() => router("/article/q&a")}
            >
              Q&A
            </div>
          </>
        )}

        <div
          className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]"
          onClick={() => router("/message")}
        >
          <div className="flex items-center">
            <SendIcon />

            <div className="ml-[10px] font-bold text-xl">메시지</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>
        {pathname.includes("/message") && (
          <div
            className="px-10 py-3 text-xl cursor-pointer"
            onClick={() => router("/message/send")}
          >
            발송하기
          </div>
        )}

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <PeopleIcon />

            <div className="ml-[10px] font-bold text-xl">캠페인</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <AssignmentIcon />

            <div className="ml-[10px] font-bold text-xl">템플릿</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <DonutSmallIcon />

            <div className="ml-[10px] font-bold text-xl">발송 관리</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <DonutSmallIcon />

            <div className="ml-[10px] font-bold text-xl">리포트</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <AssessmentIcon />

            <div className="ml-[10px] font-bold text-xl">통계</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <EqualizerIcon />

            <div className="ml-[10px] font-bold text-xl">정산</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <PeopleIcon />

            <div className="ml-[10px] font-bold text-xl">회원</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <PeopleIcon />

            <div className="ml-[10px] font-bold text-xl">PUSH 사용자</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>

        <div className="flex justify-between px-[10px] py-3 cursor-pointer border-b-2 border-[#e3e3e3]">
          <div className="flex items-center">
            <BookmarkBorderIcon />

            <div className="ml-[10px] font-bold text-xl">대시보드</div>
          </div>

          <ExpandCircleDownOutlinedIcon
            style={{ width: "30px", height: "30px", color: "#e3e3e3" }}
          />
        </div>
      </nav>
    </>
  );
};

export default Menu;
