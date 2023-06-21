# 시나브로

<img src="https://raw.githubusercontent.com/KubrickCode/Sinabro/master/image/Sinabro.png" width="300px" />

### **멸종 위기 동물에 대한 데이터 분석 및 인사이트 웹사이트**

<br />

## 1. 프로젝트 구성 안내

<br />

- 서비스 명 : 시나브로

- 개발 기간 : 2023.06.05 ~ 2023.06.23

- 주제 : 멸종 위기 동물에 대한 데이터 분석 및 인사이트

- 목표 : 멸종 위기 동물에 대해 관심이 없는 일반인들에게 사태의 심각성을 알리고 관심도 증가시키기

- 배포 페이지 : [바로 가기](http://kdt-ai7-team01.elicecoding.com)

- API문서 : [바로 가기](http://kdt-ai7-team01.elicecoding.com/api/docs)

<br />

## 2. 프로젝트 소개

<br />

### 📊 사용한 데이터

<br />

데이터 수집은 주로 공공데이터 포털과 국립 생태원을 통해 이뤄졌습니다.
<br/>이번 프로젝트에서 사용한 데이터는 한국의 멸종위기종 분포, 국립공원 지정 현황, 생태통로 위치, 지역별 멸종위기종 분포를 사용하였으며, 필요에 따라 이 데이터들을 가공하여 사용하였습니다.<br/>각각의 데이터는 지역별 분포, 각 데이터간의 상관관계, 연도별 상황을 나타내기 위해 활용되었습니다.
<br/>사용한 데이터에 대한 시각화 그래프는 다음과 같습니다

<br />

#### 연도별 멸종위기종 변화

<img src="https://raw.githubusercontent.com/KubrickCode/Sinabro/master/image/%EC%97%B0%EB%8F%84%EB%B3%84%20%EB%A9%B8%EC%A2%85%EC%9C%84%EA%B8%B0%EC%A2%85%20%EB%B3%80%ED%99%94.png" width="600px" />

- 연도별 멸종위기종이 어떻게 변화했는지 그래프를 통해 추이를 부여줍니다.

<br />

#### 지역별 멸종위기종 분포수

<img src="https://raw.githubusercontent.com/KubrickCode/Sinabro/master/image/%EC%A7%80%EC%97%AD%EB%B3%84%20%EB%A9%B8%EC%A2%85%EC%9C%84%EA%B8%B0%EC%A2%85.png" width="600px"  />

- 각 지역별로 멸종위기종이 얼마나 분포하고 있는지, 지도 클릭을 통해 볼 수 있습니다.

<br />

#### 멸종위기종과 지역별 국립공원수의 상관관계

<img src="https://raw.githubusercontent.com/KubrickCode/Sinabro/master/image/%EB%A9%B8%EC%A2%85%EC%9C%84%EA%B8%B0%EC%A2%85%EA%B3%BC%20%EC%A7%80%EC%97%AD%EB%B3%84%20%EA%B5%AD%EB%A6%BD%EA%B3%B5%EC%9B%90%EC%88%98.png" width="600px"  />

- 각 지역별 국립공원 수와 멸종위기종의 분포수에 대한 상관관계를 보여줍니다.

<br />

#### 멸종위기종과 지역별 생태통로수의 상관관계

<img src="https://raw.githubusercontent.com/KubrickCode/Sinabro/master/image/%EB%A9%B8%EC%A2%85%EC%9C%84%EA%B8%B0%EC%A2%85%EA%B3%BC%20%EC%A7%80%EC%97%AD%EB%B3%84%20%EC%83%9D%ED%83%9C%ED%86%B5%EB%A1%9C.png" width="600px"  />

- 각 지역별 생태통로 수와 멸종위기종의 분포수에 대한 상관관계를 보여줍니다.

<br />

#### 국내 외래생물 유입 추이

<img src="https://raw.githubusercontent.com/KubrickCode/Sinabro/master/image/%EA%B5%AD%EB%82%B4%20%EC%99%B8%EB%9E%98%EC%83%9D%EB%AC%BC%20%EC%9C%A0%EC%9E%85%20%EC%B6%94%EC%9D%B4.png" width="600px"  />

- 국내 외래생물의 유입 추이를 보여줍니다.

<br />

### 🔧 사용한 기술 스택 및 설명

<br />

#### **프론트엔드**

<div>
<img src="https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=JavaScript&logoColor=white"/>
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/>
<img src="https://img.shields.io/badge/TailwindCSS-06B6D4?style=flat-square&logo=TailwindCSS&logoColor=white"/>
<img src="https://img.shields.io/badge/Chart.Js-FF6384?style=flat-square&logo=Chart.Js&logoColor=white"/>
<img src="https://img.shields.io/badge/Axios-5A29E4?style=flat-square&logo=Axios&logoColor=white"/>
<img src="https://img.shields.io/badge/ContextAPI-764ABC?style=flat-square&logo=Redux&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-41454A?style=flat-square&logo=JSON%20web%20tokens&logoColor=white"/>

</div>

- 리액트를 사용하여 클라이언트를 구성.
- Tailwind의 클래스 제어를 통해 CSS 구현.
- Context API를 통해 전역 상태 관리.
- Axios의 인스턴스를 통해 서버와의 통신.
- React-ChartJS2 를 통해 그래프 시각화.

<br />

#### **백엔드**

<div>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/NestJs-E0234E?style=flat-square&logo=NestJs&logoColor=white"/>
<img src="https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white"/>
<img src="https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=PostgreSQL&logoColor=white"/>
<img src="https://img.shields.io/badge/Prisma-2D3748?style=flat-square&logo=Prisma&logoColor=white"/>
<img src="https://img.shields.io/badge/JWT-41454A?style=flat-square&logo=JSON%20web%20tokens&logoColor=white"/>
<img src="https://img.shields.io/badge/TypeDI-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/>
<img src="https://img.shields.io/badge/Passport-34E27A?style=flat-square&logo=Passport&logoColor=white"/>
<img src="https://img.shields.io/badge/Jest-C21325?style=flat-square&logo=Jest&logoColor=white"/>
<img src="https://img.shields.io/badge/Swagger-85EA2D?style=flat-square&logo=Swagger&logoColor=white"/>
</div>

- 기본 언어로 타입스크립트를 사용.
- 기본적으로 라우터 - 컨트롤러 - 서비스 - 리포지토리 의 계층형 아키텍처 구성.
- 같은 동작을 하는 ExpressJS와 NestJS 두가지 버전의 서버 구성.
- PostgreSQL과 Prisma를 사용하여 DB를 제어.
- Passport와 JWT를 통해 사용자 인증.
- Express에서는 TypeDI를 통해 의존성 주입.
- Jest를 통해 테스트 구축.
- Swagger를 통해 API 문서화.

<br />

#### **데이터 분석**

<div>
<img src="https://img.shields.io/badge/Python-3776AB?style=flat-square&logo=Python&logoColor=white"/>
<img src="https://img.shields.io/badge/Pandas-150458?style=flat-square&logo=Pandas&logoColor=white"/>
<img src="https://img.shields.io/badge/NumPy-013243?style=flat-square&logo=NumPy&logoColor=white"/>
<img src="https://img.shields.io/badge/Matplotlib-ffffff?style=flat-square&logo=SoundCharts&logoColor=black"/>
</div>

- 파이썬의 Numpy와 Pandas를 사용하여 공공데이터 분석.
- Matplotlib을 통해 분석 데이터 그래프 시각화.

<br />

## 3. 프로젝트 기획 및 목표

<br />

- 프로젝트 아이디어 동기 : 환경에 대한 데이터를 탐색 중, 멸종위기종에 대한 사람들의 관심도가 떨어진다는 것을 알게됨.
- 우선적으로 멸종위기종에 대한 데이터를 수집하고 분석을 진행하여 팀원들끼리 해당 데이터에 대해 논의함.
- 데이터를 그래프를 통해 시각화하여 유저들에게 제공하고, 멸종위기종에 대해 더욱 관심을 가지게 하도록 웹사이트 자체 컨텐츠를 기획함.

<br />

## 4. 프로젝트 기능 설명

### **주요 기능**

- 자료탭에 각종 멸종위기종의 데이터에 대한 시각화
- 각종 서비스 참여를 통해 포인트 획득
  - 자료 열람
  - 영상 시청
  - 캠페인 참여
  - 멸종위기종 정보 열람
  - 퀴즈 참여
  - 동참하기
- 획득한 포인트를 통해 멸종위기종 카드를 수집 가능

### **서브 기능**

- 비밀번호 변경 및 회원탈퇴
- 멸종위기종에 대한 소식 열람 가능

<br />

## 5. 프로젝트 팀원 역할 분담

<br />

| 이름   | 담당 업무        |
| ------ | ---------------- |
| 방석진 | 팀장/데이터 분석 |
| 이지윤 | 프론트엔드 개발  |
| 황준성 | 프론트엔드 개발  |
| 이채영 | 프론트엔드 개발  |
| 이승현 | 백엔드 개발      |

<br />

**파트별 responsibility**

<br />

1. 데이터 분석

- 기획 단계: 홈페이지의 방향성을 결정.
- 개발 단계: 주제를 바탕으로 데이터 탐색 및 시각화 진행.
- 수정 단계: 코치님 피드백을 바탕으로 인사이트 추가 및 시각화 자료 수정.
  <br />

2. 프론트엔드

- 기획 단계: 큰 주제를 바탕으로 데이터 수집, 와이어프레임 작성.
- 개발 단계: 와이어프레임을 기반으로 구현, 데이터 처리 및 시각화 담당, UI 디자인 완성.
- 수정 단계: 디자인 수정 및 코치님 피드백 반영해서 각종 기능 수정.
  <br />

3.  백엔드

- 기획 단계: 사용하고자 하는 아키텍처 및 디자인 패턴, DB, 계층 설계.
- 개발 단계: 클라이언트와 통신할 수 있는 환경 구성 및 API개발, 관심사 분리 및 의존성 주입 구현.
- 수정 단계: 코치님 피드백 반영해서 DB성능 테스트, 동시성 테스트 및 설계 수정.
  <br />

## 6. 버전

- Version 1.0.0

<br />

## 7. 프로젝트 구조

<br />

```
📦client
┣ 📂public
┃ ┣ 📂endangered
┃ ┣ 📂images
┃ ┣ 📂videos
┃ ┗ 📜vite.svg
┣ 📂src
┃ ┣ 📂assets
┃ ┃ ┗ 📜react.svg
┃ ┣ 📂components
┃ ┃ ┣ 📂About
┃ ┃ ┃ ┣ 📜About.jsx
┃ ┃ ┃ ┣ 📜Contacts.jsx
┃ ┃ ┃ ┣ 📜Intent.jsx
┃ ┃ ┃ ┗ 📜SpeciesRank.jsx
┃ ┃ ┣ 📂Admin
┃ ┃ ┃ ┣ 📂Content
┃ ┃ ┃ ┃ ┣ 📂Table
┃ ┃ ┃ ┃ ┃ ┣ 📜AdminCampaign.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜AdminNews.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜AdminParticipation.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜AdminUsers.jsx
┃ ┃ ┃ ┃ ┃ ┗ 📜AdminVideo.jsx
┃ ┃ ┃ ┃ ┗ 📜AdminContent.jsx
┃ ┃ ┃ ┣ 📂Tab
┃ ┃ ┃ ┃ ┗ 📜AdminTab.jsx
┃ ┃ ┃ ┗ 📜Admin.jsx
┃ ┃ ┣ 📂Article
┃ ┃ ┃ ┣ 📜Article.jsx
┃ ┃ ┃ ┣ 📜ArticleResult.jsx
┃ ┃ ┃ ┗ 📜newsResult.json
┃ ┃ ┣ 📂Collection
┃ ┃ ┃ ┣ 📜Collection.jsx
┃ ┃ ┃ ┗ 📜Draw.jsx
┃ ┃ ┣ 📂Data
┃ ┃ ┃ ┣ 📂Chart
┃ ┃ ┃ ┃ ┣ 📜HorizontalChart.jsx
┃ ┃ ┃ ┃ ┣ 📜LineChart.jsx
┃ ┃ ┃ ┃ ┣ 📜MultiLineChart.jsx
┃ ┃ ┃ ┃ ┗ 📜ScatterChart.jsx
┃ ┃ ┃ ┣ 📂ReasonData
┃ ┃ ┃ ┃ ┗ 📜ReasonData.jsx
┃ ┃ ┃ ┣ 📂RegionData
┃ ┃ ┃ ┃ ┣ 📂Map
┃ ┃ ┃ ┃ ┃ ┣ 📜Map.jsx
┃ ┃ ┃ ┃ ┃ ┗ 📜MapSvg.jsx
┃ ┃ ┃ ┃ ┣ 📂RegionAnimals
┃ ┃ ┃ ┃ ┃ ┣ 📜RegionAnimals.jsx
┃ ┃ ┃ ┃ ┃ ┗ 📜RegionAnimalsList.jsx
┃ ┃ ┃ ┃ ┗ 📜RegionData.jsx
┃ ┃ ┃ ┣ 📜Data.jsx
┃ ┃ ┃ ┗ 📜DataTab.jsx
┃ ┃ ┣ 📂Global
┃ ┃ ┃ ┣ 📂AnimalButton
┃ ┃ ┃ ┃ ┣ 📂AnimalSVG
┃ ┃ ┃ ┃ ┃ ┣ 📜Algae.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜All.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Bird.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Fish.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Insect.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Invertebrate.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Mammalia.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Mine.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Mushroom.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Plant.jsx
┃ ┃ ┃ ┃ ┃ ┣ 📜Salamander.jsx
┃ ┃ ┃ ┃ ┃ ┗ 📜Turtle.jsx
┃ ┃ ┃ ┃ ┗ 📜AnimalButton.jsx
┃ ┃ ┃ ┗ 📜Card.jsx
┃ ┃ ┣ 📂Homepage
┃ ┃ ┃ ┣ 📂News
┃ ┃ ┃ ┃ ┣ 📜News.jsx
┃ ┃ ┃ ┃ ┣ 📜NewsArticle.jsx
┃ ┃ ┃ ┃ ┗ 📜NewsVideo.jsx
┃ ┃ ┃ ┣ 📜Banner.jsx
┃ ┃ ┃ ┣ 📜DailySpecies.jsx
┃ ┃ ┃ ┗ 📜Homepage.jsx
┃ ┃ ┣ 📂Layout
┃ ┃ ┃ ┣ 📜Footer.jsx
┃ ┃ ┃ ┣ 📜Header.jsx
┃ ┃ ┃ ┗ 📜Layout.jsx
┃ ┃ ┣ 📂Modal
┃ ┃ ┃ ┣ 📜modal.css
┃ ┃ ┃ ┗ 📜Modal.jsx
┃ ┃ ┣ 📂Mypage
┃ ┃ ┃ ┣ 📜PwChange.jsx
┃ ┃ ┃ ┗ 📜PwChangeForm.jsx
┃ ┃ ┣ 📂Participate
┃ ┃ ┃ ┣ 📂Campaign
┃ ┃ ┃ ┃ ┣ 📜Campaign.jsx
┃ ┃ ┃ ┃ ┣ 📜CampaignCheck.jsx
┃ ┃ ┃ ┃ ┗ 📜CampaignFrame.jsx
┃ ┃ ┃ ┣ 📂Join
┃ ┃ ┃ ┃ ┣ 📜Join.jsx
┃ ┃ ┃ ┃ ┣ 📜JoinCheck.jsx
┃ ┃ ┃ ┃ ┣ 📜JoinDescr.jsx
┃ ┃ ┃ ┃ ┗ 📜JoinImage.jsx
┃ ┃ ┃ ┣ 📂Quiz
┃ ┃ ┃ ┃ ┣ 📜Quiz.jsx
┃ ┃ ┃ ┃ ┣ 📜QuizGetNumbers.js
┃ ┃ ┃ ┃ ┣ 📜QuizImage.jsx
┃ ┃ ┃ ┃ ┣ 📜QuizProblem.jsx
┃ ┃ ┃ ┃ ┗ 📜species.json
┃ ┃ ┃ ┗ 📜Participate.jsx
┃ ┃ ┣ 📂Points
┃ ┃ ┃ ┣ 📜Heart.jsx
┃ ┃ ┃ ┣ 📜Points.jsx
┃ ┃ ┃ ┣ 📜PointsLog.jsx
┃ ┃ ┃ ┗ 📜UserCard.jsx
┃ ┃ ┗ 📂User
┃ ┃ ┃ ┣ 📜Loginform.jsx
┃ ┃ ┃ ┗ 📜RegisterForm.jsx
┃ ┣ 📂data
┃ ┃ ┣ 📜alien*species_data.js
┃ ┃ ┣ 📜data.js
┃ ┃ ┣ 📜ecological_pathway_data.js
┃ ┃ ┣ 📜endanger_year_data.js
┃ ┃ ┣ 📜locate_endanger_data.js
┃ ┃ ┗ 📜national_park_data.js
┃ ┣ 📂services
┃ ┃ ┗ 📜api.js
┃ ┣ 📂store
┃ ┃ ┣ 📜Context.jsx
┃ ┃ ┗ 📜store.js
┃ ┣ 📂utils
┃ ┃ ┗ 📜axios.js
┃ ┣ 📜App.jsx
┃ ┣ 📜index.css
┃ ┣ 📜main.jsx
┃ ┗ 📜Router.jsx
┣ 📜.env
┣ 📜.eslintrc.cjs
┣ 📜.gitignore
┣ 📜index.html
┣ 📜package.json
┣ 📜postcss.config.js
┣ 📜tailwind.config.js
📦dataset
┣ 📜.gitkeep
┣ 📜국립공원*특별보호구역*지정현황*소재지.csv
┗ 📜멸종위기*야생생물*종목록\_통계.xlsx
📦express_server
┣ 📂prisma
┃ ┣ 📂migrations
┃ ┃ ┗ 📜migration_lock.toml
┃ ┗ 📜schema.prisma
┣ 📂src
┃ ┣ 📂controllers
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📜campaign.controller.ts
┃ ┃ ┃ ┣ 📜news.controller.ts
┃ ┃ ┃ ┣ 📜participation.controller.ts
┃ ┃ ┃ ┗ 📜video.controller.ts
┃ ┃ ┣ 📜auth.controller.ts
┃ ┃ ┣ 📜collection.controller.ts
┃ ┃ ┣ 📜content.controller.ts
┃ ┃ ┣ 📜point.controller.ts
┃ ┃ ┗ 📜user.controller.ts
┃ ┣ 📂docs
┃ ┃ ┣ 📂admin
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┣ 📜login.yaml
┃ ┃ ┃ ┗ 📜register.yaml
┃ ┃ ┣ 📂collection
┃ ┃ ┃ ┗ 📜getAllCollection.yaml
┃ ┃ ┣ 📂content
┃ ┃ ┃ ┣ 📜getCampaign.yaml
┃ ┃ ┃ ┣ 📜getNews.yaml
┃ ┃ ┃ ┣ 📜getSelectedParticipation.yaml
┃ ┃ ┃ ┗ 📜getSelectedVideo.yaml
┃ ┃ ┣ 📂global
┃ ┃ ┃ ┣ 📜invalidBody.yaml
┃ ┃ ┃ ┗ 📜invalidToken.yaml
┃ ┃ ┣ 📂point
┃ ┃ ┃ ┣ 📜getCampaignLog.yaml
┃ ┃ ┃ ┣ 📜getDailyEventsLog.yaml
┃ ┃ ┃ ┣ 📜getPoint.yaml
┃ ┃ ┃ ┣ 📜getPointLog.yaml
┃ ┃ ┃ ┗ 📜putPoint.yaml
┃ ┃ ┣ 📂user
┃ ┃ ┃ ┣ 📜changePassword.yaml
┃ ┃ ┃ ┣ 📜deleteUser.yaml
┃ ┃ ┃ ┗ 📜getUser.yaml
┃ ┃ ┣ 📜swagger.option.ts
┃ ┃ ┗ 📜swagger.schema.ts
┃ ┣ 📂dto
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📜campaign.dto.ts
┃ ┃ ┃ ┣ 📜news.dto.ts
┃ ┃ ┃ ┣ 📜participation.dto.ts
┃ ┃ ┃ ┗ 📜video.dto.ts
┃ ┃ ┣ 📜auth.dto.ts
┃ ┃ ┣ 📜collection.dto.ts
┃ ┃ ┣ 📜global.dto.ts
┃ ┃ ┣ 📜point.dto.ts
┃ ┃ ┗ 📜user.dto.ts
┃ ┣ 📂libraries
┃ ┃ ┣ 📂config
┃ ┃ ┃ ┗ 📜config.ts
┃ ┃ ┣ 📂integrations
┃ ┃ ┃ ┣ 📜handleLogin.ts
┃ ┃ ┃ ┣ 📜handlePassword.ts
┃ ┃ ┃ ┗ 📜handlePoints.ts
┃ ┃ ┗ 📂utils
┃ ┃ ┃ ┣ 📜getRandomAnimal.ts
┃ ┃ ┃ ┗ 📜setPoints.ts
┃ ┣ 📂middlewares
┃ ┃ ┣ 📂passport
┃ ┃ ┃ ┣ 📜index.ts
┃ ┃ ┃ ┣ 📜jwt.strategy.ts
┃ ┃ ┃ ┗ 📜validateJWT.ts
┃ ┃ ┗ 📜validateDto.ts
┃ ┣ 📂repository
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📜campaign.repository.ts
┃ ┃ ┃ ┣ 📜news.repository.ts
┃ ┃ ┃ ┣ 📜participation.repository.ts
┃ ┃ ┃ ┗ 📜video.repository.ts
┃ ┃ ┣ 📂test
┃ ┃ ┃ ┗ 📜db_push.repository.ts
┃ ┃ ┣ 📜collection.repository.ts
┃ ┃ ┣ 📜content.repository.ts
┃ ┃ ┣ 📜point.repository.ts
┃ ┃ ┗ 📜user.repository.ts
┃ ┣ 📂routes
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📜campaign.route.ts
┃ ┃ ┃ ┣ 📜news.route.ts
┃ ┃ ┃ ┣ 📜participation.route.ts
┃ ┃ ┃ ┗ 📜video.route.ts
┃ ┃ ┣ 📜admin.route.ts
┃ ┃ ┣ 📜auth.route.ts
┃ ┃ ┣ 📜collection.route.ts
┃ ┃ ┣ 📜content.route.ts
┃ ┃ ┣ 📜index.ts
┃ ┃ ┣ 📜point.route.ts
┃ ┃ ┗ 📜user.route.ts
┃ ┣ 📂services
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📜campaign.service.ts
┃ ┃ ┃ ┣ 📜news.service.ts
┃ ┃ ┃ ┣ 📜participation.service.ts
┃ ┃ ┃ ┗ 📜video.service.ts
┃ ┃ ┣ 📜auth.service.ts
┃ ┃ ┣ 📜collection.service.ts
┃ ┃ ┣ 📜content.service.ts
┃ ┃ ┣ 📜point.service.ts
┃ ┃ ┗ 📜user.service.ts
┃ ┣ 📂types
┃ ┃ ┗ 📜customuser.d.ts
┃ ┗ 📜index.ts
┣ 📂test
┃ ┣ 📂admin
┃ ┃ ┣ 📂campaign
┃ ┃ ┣ 📂news
┃ ┃ ┣ 📂participation
┃ ┃ ┗ 📂video
┃ ┣ 📂auth
┃ ┃ ┣ 📜auth.login.e2e-spec.ts
┃ ┃ ┗ 📜auth.register.e2e-spec.ts
┃ ┣ 📂collection
┃ ┃ ┗ 📜getCollection.e2e-spec.ts
┃ ┣ 📂content
┃ ┃ ┣ 📜getCampaignContent.e2e-spec.ts
┃ ┃ ┣ 📜getNewsContent.e2e-spec.ts
┃ ┃ ┣ 📜getParticipationContent.e2e-spec.ts
┃ ┃ ┗ 📜getVideoContent.e2e-spec.ts
┃ ┣ 📂DB
┃ ┃ ┣ 📜delete_point_db.e2e-spec.ts
┃ ┃ ┣ 📜push_collection_to_db.e2e-spec.ts
┃ ┃ ┣ 📜push_mock_user.e2e-spec.ts
┃ ┃ ┣ 📜push_point_to_db.e2e-spec.ts
┃ ┃ ┗ 📜spend_point_db.e2e-spec.ts
┃ ┣ 📂point
┃ ┃ ┣ 📜getCampaignLogs.e2e-spec.ts
┃ ┃ ┣ 📜getDailyEventsLogs.e2e-spec.ts
┃ ┃ ┣ 📜getPoint.e2e-spec.ts
┃ ┃ ┣ 📜getPointLogs.e2e-spec.ts
┃ ┃ ┗ 📜putPoint.e2e-spec.ts
┃ ┣ 📂user
┃ ┃ ┣ 📜changePassword.e2e-spec.ts
┃ ┃ ┣ 📜deleteUser.e2e-spec.ts
┃ ┃ ┗ 📜getUser.e2e-spec.ts
┃ ┣ 📜jest-e2e.json
┃ ┗ 📜jest.setup.js
┣ 📜.env
┣ 📜.gitignore
┣ 📜jest.config.js
┣ 📜package.json
┣ 📜tsconfig.json
┣ 📜yarn-error.log
┗ 📜yarn.lock
📦nest_server
┣ 📂prisma
┃ ┣ 📂migrations
┃ ┃ ┗ 📜migration_lock.toml
┃ ┗ 📜schema.prisma
┣ 📂src
┃ ┣ 📂admin
┃ ┃ ┣ 📂campaign
┃ ┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┃ ┣ 📜campaign.request.dto.ts
┃ ┃ ┃ ┃ ┗ 📜campaign.response.dto.ts
┃ ┃ ┃ ┣ 📜campaign.controller.spec.ts
┃ ┃ ┃ ┣ 📜campaign.controller.ts
┃ ┃ ┃ ┣ 📜campaign.module.ts
┃ ┃ ┃ ┣ 📜campaign.repository.ts
┃ ┃ ┃ ┣ 📜campaign.service.spec.ts
┃ ┃ ┃ ┗ 📜campaign.service.ts
┃ ┃ ┣ 📂news
┃ ┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┃ ┣ 📜news.request.dto.ts
┃ ┃ ┃ ┃ ┗ 📜news.response.dto.ts
┃ ┃ ┃ ┣ 📜news.controller.spec.ts
┃ ┃ ┃ ┣ 📜news.controller.ts
┃ ┃ ┃ ┣ 📜news.module.ts
┃ ┃ ┃ ┣ 📜news.repository.ts
┃ ┃ ┃ ┣ 📜news.service.spec.ts
┃ ┃ ┃ ┗ 📜news.service.ts
┃ ┃ ┣ 📂participation
┃ ┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┃ ┣ 📜participation.request.dto.ts
┃ ┃ ┃ ┃ ┗ 📜participation.response.dto.ts
┃ ┃ ┃ ┣ 📜participation.controller.spec.ts
┃ ┃ ┃ ┣ 📜participation.controller.ts
┃ ┃ ┃ ┣ 📜participation.module.ts
┃ ┃ ┃ ┣ 📜participation.repository.ts
┃ ┃ ┃ ┣ 📜participation.service.spec.ts
┃ ┃ ┃ ┗ 📜participation.service.ts
┃ ┃ ┗ 📂video
┃ ┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┃ ┣ 📜video.request.dto.ts
┃ ┃ ┃ ┃ ┗ 📜video.response.dto.ts
┃ ┃ ┃ ┣ 📜video.controller.spec.ts
┃ ┃ ┃ ┣ 📜video.controller.ts
┃ ┃ ┃ ┣ 📜video.module.ts
┃ ┃ ┃ ┣ 📜video.repository.ts
┃ ┃ ┃ ┣ 📜video.service.spec.ts
┃ ┃ ┃ ┗ 📜video.service.ts
┃ ┣ 📂auth
┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┣ 📜auth.request.dto.ts
┃ ┃ ┃ ┗ 📜auth.response.dto.ts
┃ ┃ ┣ 📂interfaces
┃ ┃ ┃ ┣ 📜DecodeToken.interface.ts
┃ ┃ ┃ ┗ 📜RequestUser.interface.ts
┃ ┃ ┣ 📂passport
┃ ┃ ┃ ┣ 📜admin.guard.ts
┃ ┃ ┃ ┣ 📜jwt.guard.ts
┃ ┃ ┃ ┣ 📜jwt.strategy.ts
┃ ┃ ┃ ┣ 📜local.guard.ts
┃ ┃ ┃ ┗ 📜local.strategy.ts
┃ ┃ ┣ 📜auth.controller.spec.ts
┃ ┃ ┣ 📜auth.controller.ts
┃ ┃ ┣ 📜auth.module.ts
┃ ┃ ┣ 📜auth.service.spec.ts
┃ ┃ ┗ 📜auth.service.ts
┃ ┣ 📂collection
┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┗ 📜collection.response.dto.ts
┃ ┃ ┣ 📜collection.controller.spec.ts
┃ ┃ ┣ 📜collection.controller.ts
┃ ┃ ┣ 📜collection.module.ts
┃ ┃ ┣ 📜collection.repository.ts
┃ ┃ ┣ 📜collection.service.spec.ts
┃ ┃ ┗ 📜collection.service.ts
┃ ┣ 📂content
┃ ┃ ┣ 📜content.controller.spec.ts
┃ ┃ ┣ 📜content.controller.ts
┃ ┃ ┣ 📜content.module.ts
┃ ┃ ┣ 📜content.repository.ts
┃ ┃ ┣ 📜content.service.spec.ts
┃ ┃ ┗ 📜content.service.ts
┃ ┣ 📂docs
┃ ┃ ┣ 📂admin
┃ ┃ ┃ ┣ 📂campaign
┃ ┃ ┃ ┣ 📂news
┃ ┃ ┃ ┣ 📂participation
┃ ┃ ┃ ┗ 📂video
┃ ┃ ┣ 📂auth
┃ ┃ ┃ ┗ 📜auth.swagger.ts
┃ ┃ ┣ 📂collection
┃ ┃ ┃ ┗ 📜collection.swagger.ts
┃ ┃ ┣ 📂content
┃ ┃ ┃ ┗ 📜content.swagger.ts
┃ ┃ ┣ 📂point
┃ ┃ ┃ ┗ 📜point.swagger.ts
┃ ┃ ┣ 📂user
┃ ┃ ┃ ┗ 📜user.swagger.ts
┃ ┃ ┣ 📜global.swagger.ts
┃ ┃ ┗ 📜global.swagger.type.ts
┃ ┣ 📂libraries
┃ ┃ ┣ 📂integrations
┃ ┃ ┃ ┣ 📜HandlePassword.ts
┃ ┃ ┃ ┗ 📜HandlePoints.ts
┃ ┃ ┗ 📂utils
┃ ┃ ┃ ┣ 📜getRandomAnimal.ts
┃ ┃ ┃ ┗ 📜setPoints.ts
┃ ┣ 📂point
┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┣ 📜point.request.dto.ts
┃ ┃ ┃ ┗ 📜point.response.dto.ts
┃ ┃ ┣ 📜point.controller.spec.ts
┃ ┃ ┣ 📜point.controller.ts
┃ ┃ ┣ 📜point.module.ts
┃ ┃ ┣ 📜point.repository.ts
┃ ┃ ┣ 📜point.service.spec.ts
┃ ┃ ┗ 📜point.service.ts
┃ ┣ 📂user
┃ ┃ ┣ 📂dto
┃ ┃ ┃ ┣ 📜user.request.dto.ts
┃ ┃ ┃ ┗ 📜user.response.dto.ts
┃ ┃ ┣ 📜user.controller.spec.ts
┃ ┃ ┣ 📜user.controller.ts
┃ ┃ ┣ 📜user.module.ts
┃ ┃ ┣ 📜user.repository.ts
┃ ┃ ┣ 📜user.service.spec.ts
┃ ┃ ┗ 📜user.service.ts
┃ ┣ 📜app.controller.spec.ts
┃ ┣ 📜app.controller.ts
┃ ┣ 📜app.dto.ts
┃ ┣ 📜app.module.ts
┃ ┣ 📜app.service.ts
┃ ┣ 📜main.ts
┃ ┗ 📜prisma.service.ts
┣ 📂test
┃ ┣ 📜app.e2e-spec.ts
┃ ┗ 📜jest-e2e.json
┣ 📜.env
┣ 📜.eslintrc.js
┣ 📜.gitignore
┣ 📜.prettierrc
┣ 📜nest-cli.json
┣ 📜package.json
┣ 📜README.md
┣ 📜tsconfig.build.json
┣ 📜tsconfig.json
┗ 📜yarn.lock
```
