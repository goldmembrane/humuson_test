export const menus = [
  { title: "게시판", id: 1, icon: "calendar", link: "article" },
  { title: "메시지", id: 2, icon: "message", link: "messeage" },
  { title: "캠페인", id: 3, icon: "people", link: "" },
  { title: "템플릿", id: 4, icon: "document", link: "" },
  { title: "발송 관리", id: 5, icon: "circle", link: "" },
  { title: "리포트", id: 6, icon: "circle", link: "" },
  { title: "통계", id: 7, icon: "graph", link: "" },
  { title: "정산", id: 8, icon: "adjust", link: "" },
  { title: "회원", id: 9, icon: "people", link: "" },
  { title: "PUSH 사용자", id: 10, icon: "people", link: "" },
  { title: "대시보드", id: 11, icon: "bookmark", link: "" },
];

export const pathDivider = (path) => {
  if (path.includes("notice")) {
    return "공지사항";
  } else if (path.includes("q&a")) {
    return "Q&A";
  } else if (path.includes("article")) {
    return "게시판";
  } else if (path.includes("send")) {
    return "발송하기";
  } else if (path.includes("message")) {
    return "메시지";
  }
};

export const pathNamer = (path) => {
  const name = path.split("/");

  return `/ ${pathDivider(name[1])} ${
    name.length > 2 ? "/" + pathDivider(name[2]) : ""
  }`;
};
