# 휴머스온 Front Engineer 과제

휴머스온 프론트엔드 사전 과제입니다.

## 개발 환경

- React v18.3.1


## 설치 및 실행

### 의존성 패키지 설치

npm
```
npm install  
```

yarn
```
yarn
```

### 프로덕션 환경 실행

npm
```
npm run start
```

yarn
```
yarn start
```

과제 화면은 http://localhost:3000/article/notice로 접속

## 기술 stack

- React v18.3.1: 컴포넌트 기반 개발과 넓은 커뮤니티를 가짐으로써 적극적인 활용 가능성을 생각하여 React를 선택하였습니다.
- tailwind css: React내의 jsx 파일과 css 파일을 구분짓지 않고 통합하여 빠르게 개발할 수 있고, 커스텀이 용이한 tailwind css를 선택하였습니다.

## 디렉토리 구조
```
📦src
 ┣ 📂api
 ┃ ┗ 📜jsonData.json
 ┣ 📂Container
 ┃ ┣ 📜empty.js
 ┃ ┗ 📜index.js
 ┣ 📂Header
 ┃ ┗ 📜index.js
 ┣ 📂Menu
 ┃ ┗ 📜index.js
 ┣ 📂SemiHeader
 ┃ ┗ 📜index.js
 ┣ 📂util
 ┃ ┣ 📂pagination
 ┃ ┃ ┣ 📜index.js
 ┃ ┃ ┗ 📜util.js
 ┃ ┗ 📜util.js
 ┣ 📜App.js
 ┣ 📜index.js
 ┣ 📜input.css
 ┗ 📜output.css
```

## 요구사항 체크 리스트
- [x] 레이아웃 배치
  ![1](https://github.com/user-attachments/assets/9aa04b29-8c8b-44da-bbf4-405c75f87bff)
- [x] 좌측상단 메뉴 클릭 시 사이드가 접힘 / 펼침
- [x] 사이드 메뉴 클릭 시 공지사항 화면외 다른 사이드메뉴는 제목만 나오도록 구현
![1](https://github.com/user-attachments/assets/8beabdf5-ddd8-4a02-a79c-a7fdc06de462)
- [x] 페이징은 한 화면에 5행씩 출력

  ![4](https://github.com/user-attachments/assets/3a88c40c-a9b2-4df9-9b59-951b4be99896)
- [x] 검색조건 + 검색어에 따라 테이블데이터가 필터링돼서 화면에 출력
  ![2](https://github.com/user-attachments/assets/85d6f4a9-f175-4544-bbf9-a050f68fee85)
  ![3](https://github.com/user-attachments/assets/b84d8063-3de2-4662-b3a6-c7800651d6c3)
- [x] 테이블의 컬럼은 ID, 제목, 작성자, 작성일
- [x] 행의 개수에 따라 전체 글 부분에 갯수 변경
- [x] 등록일 기준은 화면과 같이 날짜 영역 선택 가능
  ![2](https://github.com/user-attachments/assets/d6927518-db60-4bcb-be29-9755d4df1fda)
  ![3](https://github.com/user-attachments/assets/4cb29910-096c-4b5a-a2ee-4158c2569994)
