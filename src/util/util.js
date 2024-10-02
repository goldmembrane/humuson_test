import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import SendIcon from "@mui/icons-material/Send";
import PeopleIcon from "@mui/icons-material/People";
import AssignmentIcon from "@mui/icons-material/Assignment";
import DonutSmallIcon from "@mui/icons-material/DonutSmall";
import AssessmentIcon from "@mui/icons-material/Assessment";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

export const selectIcon = (icon) => {
  if (icon === "calendar") {
    return <CalendarMonthIcon />;
  } else if (icon === "message") {
    return <SendIcon />;
  } else if (icon === "people") {
    return <PeopleIcon />;
  } else if (icon === "document") {
    return <AssignmentIcon />;
  } else if (icon === "circle") {
    return <DonutSmallIcon />;
  } else if (icon === "graph") {
    return <AssessmentIcon />;
  } else if (icon === "adjust") {
    return <EqualizerIcon />;
  } else if (icon === "bookmark") {
    return <BookmarkBorderIcon />;
  }
};

export const menus = [
  {
    title: "게시판",
    subtitle: [
      { title: "공지사항", subId: 1 },
      { title: "Q&A", subId: 2 },
    ],
    id: 1,
    icon: "calendar",
  },
  {
    title: "메시지",
    subtitle: [{ title: "발송하기", subId: 3 }],
    id: 2,
    icon: "message",
  },
  { title: "캠페인", id: 3, icon: "people" },
  { title: "템플릿", id: 4, icon: "document" },
  { title: "발송 관리", id: 5, icon: "circle" },
  { title: "리포트", id: 6, icon: "circle" },
  { title: "통계", id: 7, icon: "graph" },
  { title: "정산", id: 8, icon: "adjust" },
  { title: "회원", id: 9, icon: "people" },
  { title: "PUSH 사용자", id: 10, icon: "people" },
  { title: "대시보드", id: 11, icon: "bookmark" },
];
