import SearchIcon from "@mui/icons-material/Search";
import AddIcon from "@mui/icons-material/Add";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const Container = () => {
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

              <div className="ml-[10px] rounded-full bg-[#a2a2a2] flex justify-center items-center text-white text-lg font-bold px-2">
                1
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
            <tr className="text-center bg-[#f5f5f5] border-b-2 border-[#d4d4d4]">
              <td>1</td>
              <td className="text-left">test</td>
              <td>ruo</td>
              <td>2024-07-04 14:04:22</td>
              <td>5</td>
            </tr>
            <tr className="text-center bg-[#f5f5f5] border-b-2 border-[#d4d4d4]">
              <td>2</td>
              <td className="text-left">onenanlsadanl</td>
              <td>void</td>
              <td>2024-08-12 10:00:56</td>
              <td>18</td>
            </tr>
            <tr className="text-center bg-[#f5f5f5] border-b-2 border-[#d4d4d4]">
              <td>3</td>
              <td className="text-left">이것이 테스트임</td>
              <td>de-tests-tda</td>
              <td>2024-07-04 19:52:24</td>
              <td>27</td>
            </tr>
          </table>

          <div className="flex justify-center items-center mt-5">
            <KeyboardDoubleArrowLeftIcon
              style={{
                cursor: "pointer",
                width: "32px",
                height: "32px",
                color: "#b7b7b7",
              }}
            />
            <KeyboardArrowLeftIcon
              style={{
                cursor: "pointer",
                width: "32px",
                height: "32px",
                marginLeft: "12px",
                color: "#b7b7b7",
              }}
            />
            <div className="ml-3 text-lg font-bold">1</div>
            <KeyboardArrowRightIcon
              style={{
                cursor: "pointer",
                width: "32px",
                height: "32px",
                marginLeft: "12px",
                color: "#b7b7b7",
              }}
            />
            <KeyboardDoubleArrowRightIcon
              style={{
                cursor: "pointer",
                width: "32px",
                height: "32px",
                marginLeft: "12px",
                color: "#b7b7b7",
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Container;
