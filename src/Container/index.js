import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import jsonData from "../api/jsonData.json";
import Pagination from "../util/pagination";

const Container = () => {
  const [data, setData] = useState(jsonData);
  const [filteredData, setFilteredData] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const [registerDate, setRegisterDate] = useState("");

  const selectDate = (event) => {
    setRegisterDate(event.target.value);
  };

  const [condition, setCondition] = useState("title");

  const onSelect = (event) => {
    setCondition(event.target.value);
  };

  const [searchInput, setSearchInput] = useState("");

  const onChangeSearch = (e) => {
    setSearchInput(e.target.value);
  };

  const search = (option, text, date) => {
    const filteredResult = data.filter((v) => {
      if (date !== "") {
        if (option === "title")
          return v.title.includes(text) && v.date.includes(date);
        else if (option === "writer")
          return v.writerID.includes(text) && v.date.includes(date);
      } else if (date === "") {
        if (option === "title") return v.title.includes(text);
        else if (option === "writer") return v.writerID.includes(text);
      }
    });

    setFilteredData(filteredResult);
  };

  const resetSearchCondition = () => {
    setSearchInput("");
    setCondition("title");
    setRegisterDate("");
  };

  const totalPage =
    filteredData && filteredData.length !== 0
      ? Math.ceil(filteredData.length / postsPerPage)
      : Math.ceil(data.length / postsPerPage);
  return (
    <>
      <div className="bg-[#e3e3e3] w-10/12 h-auto p-5">
        <div className="rounded-xl w-full h-full bg-white p-5">
          <div className="rounded-lg w-full p-5 bg-[#e8e8e8] flex">
            <div className="flex items-center">
              <div className="text-lg font-semibold">등록일 기준</div>

              <input
                type="date"
                className="ml-[10px]"
                value={registerDate}
                onChange={selectDate}
              />
            </div>

            <div className="flex items-center ml-5">
              <div className="text-lg font-semibold">검색 조건</div>

              <select className="ml-[10px]" onChange={onSelect}>
                <option value="title">제목</option>
                <option value="writer">작성자(ID)</option>
              </select>
            </div>

            <div className="flex items-center ml-5">
              <input
                className="w-[300px] p-[3px]"
                placeholder="검색어를 입력해주세요"
                onChange={onChangeSearch}
                value={searchInput}
              />

              <div
                className="ml-[6px] flex justify-center items-center bg-[#a5a5a5] cursor-pointer"
                onClick={() => {
                  search(condition, searchInput, registerDate);
                  resetSearchCondition();
                }}
              >
                <SearchIcon
                  style={{ width: "32px", height: "32px", color: "white" }}
                />
              </div>
            </div>
          </div>

          <div className="mt-5 flex justify-between items-center">
            <div className="flex items-center">
              <div className="text-lg">전체 글</div>

              <div className="ml-[10px] rounded-full bg-[#a2a2a2] flex justify-center items-center text-white text-lg font-bold px-2 py-1">
                {filteredData && filteredData.length !== 0
                  ? filteredData.length
                  : data.length}
              </div>
            </div>

            <div className="flex justify-center items-center px-3 py-2 cursor-pointer bg-[#00dd00]">
              <AddIcon
                style={{ width: "20px", height: "20px", color: "white" }}
              />

              <div className="ml-2 text-white text-lg">등록</div>
            </div>
          </div>

          <table className="mt-[10px] w-full">
            <thead>
              <tr className="bg-[#e5e5e5]">
                <th>ID</th>
                <th>제목</th>
                <th>작성자(ID)</th>
                <th>작성일</th>
                <th>조회수</th>
              </tr>
            </thead>
            <tbody>
              {filteredData && filteredData.length !== 0
                ? currentPosts(filteredData).map((article) => (
                    <tr
                      className="text-center bg-[#f5f5f5] border-b-2 border-[#d4d4d4]"
                      key={article.id}
                    >
                      <td>{article.id}</td>
                      <td className="text-left">{article.title}</td>
                      <td>{article.writerID}</td>
                      <td>{article.date}</td>
                      <td>{article.viewCount}</td>
                    </tr>
                  ))
                : currentPosts(data).map((article) => (
                    <tr
                      className="text-center bg-[#f5f5f5] border-b-2 border-[#d4d4d4]"
                      key={article.id}
                    >
                      <td>{article.id}</td>
                      <td className="text-left">{article.title}</td>
                      <td>{article.writerID}</td>
                      <td>{article.date}</td>
                      <td>{article.viewCount}</td>
                    </tr>
                  ))}
            </tbody>
          </table>

          <Pagination
            totalPage={totalPage}
            limit={postsPerPage}
            page={currentPage}
            setPage={setCurrentPage}
          ></Pagination>
        </div>
      </div>
    </>
  );
};

export default Container;
