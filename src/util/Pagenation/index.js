import { useEffect, useState } from "react";

import { sliceArrayByLimit } from "./util";

const Pagination = ({ totalPage, limit, page, setPage }) => {
  const [currentPage, setCurrentPage] = useState([]);
  const [totalPageArray, setTotalPageArray] = useState([]);

  useEffect(() => {
    if (page % limit === 1) {
      setCurrentPage(totalPageArray[Math.floor(page / limit)]);
    } else if (page % limit === 0) {
      setCurrentPage(totalPageArray[Math.floor(page / limit) - 1]);
    }
  }, [page]);

  useEffect(() => {
    const slicedArray = sliceArrayByLimit(totalPage, limit);
    setTotalPageArray(slicedArray);
    setCurrentPage(slicedArray[0]);
  }, [totalPage]);

  return (
    <div className="flex justify-center items-center mt-5">
      <div
        className="w-8 h-8 text-[#b7b7b7] cursor-pointer"
        onClick={() => setPage(1)}
      >
        <KeyboardDoubleArrowLeftIcon />
      </div>
      <div
        className="w-8 h-8 text-[#b7b7b7] cursor-pointer"
        onClick={() => setPage(page - 1)}
      >
        <KeyboardArrowLeftIcon />
      </div>
      {currentPage.map((i) => (
        <div
          className="ml-3 text-lg font-bold"
          key={i + 1}
          onClick={() => setPage(i + 1)}
        >
          {i + 1}
        </div>
      ))}
      <div
        className="w-8 h-8 text-[#b7b7b7] cursor-pointer"
        onClick={() => setPage(page + 1)}
        aria-disabled={page === totalPage}
      >
        <KeyboardArrowRightIcon />
      </div>
      <div
        className="w-8 h-8 text-[#b7b7b7] cursor-pointer"
        onClick={() => setPage(totalPage)}
        aria-disabled={page === totalPage}
      >
        <KeyboardDoubleArrowRightIcon />
      </div>
    </div>
  );
};

export default Pagination;
