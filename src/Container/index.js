import { useState } from "react";

import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";

import jsonData from "../api/jsonData.json";
import Pagination from "../util/pagination";

const Container = () => {
  const [data, setData] = useState(jsonData);

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(5);

  const indexOfLast = currentPage * postsPerPage;
  const indexOfFirst = indexOfLast - postsPerPage;
  const currentPosts = (posts) => {
    let currentPosts = 0;
    currentPosts = posts.slice(indexOfFirst, indexOfLast);
    return currentPosts;
  };

  const totalPage = Math.ceil(data.length / postsPerPage);

  return (
    <>
      <div className="bg-[#e3e3e3] w-10/12 h-auto p-5">
        <div className="rounded-xl w-full h-full bg-white p-5">
          <div className="rounded-lg w-full p-5 bg-[#e8e8e8] flex">
            <div className="flex items-center">
              <div className="text-lg font-semibold">등록일 기준</div>

              <input type="date" className="ml-[10px]" value="" />
            </div>

            <div className="flex items-center ml-5">
              <div className="text-lg font-semibold">검색 조건</div>

              <select className="ml-[10px]">
                <option value="title">제목</option>
                <option value="title">작성자(ID)</option>
                <option value="title">작성일</option>
              </select>
            </div>

            <div className="flex items-center ml-5">
              <input
                className="w-[300px] p-[3px]"
                placeholder="검색어를 입력해주세요"
              />

              <div className="ml-[6px] flex justify-center items-center bg-[#a5a5a5] cursor-pointer">
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
                {data.length}
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
            <tr className="bg-[#e5e5e5]">
              <th>ID</th>
              <th>제목</th>
              <th>작성자(ID)</th>
              <th>작성일</th>
              <th>조회수</th>
            </tr>
            {currentPosts(data).map((article) => (
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
