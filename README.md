# 방구석 Travllers :: BANGGUSEOK Travellers

## Project Introduce

코로나로 지친 위코더들의 다음 여행지를 골라드립니다.

당신의 환상적이었던 여행의 순간을 담은 사진을 모두에게 보여주세요. 위코더들의 투표를 통해 최고의 여행지를 선정해드립니다!

![스크린샷 2022-01-23 오후 11 04 1](https://user-images.githubusercontent.com/62171131/150684566-c5011761-4fbb-4fec-a1d3-d5bdefb99427.png)
[&#9658;전체기능 시연영상 링크](https://www.youtube.com/watch?v=o_FYp6VgCoo)

## 개발기간 (총 11일)

2021/1/10 ~ 2022/1/21

## 프로젝트 개요

Awwwards를 모티브로한 여행지사진 투표 및 추천 사이트(Front-end 3명 Back-end 2명 팀 Project)

Main Page와 Trip Detail Page 역임

투표 데이터를 백앤드 API로 전송하고, 결과를 반영하는 기능 구현

공통 컴포넌트의 선제적 구현을 통한 팀 시너지 창출

styled-component 사용된 파일의 분리로 가독성 및 유지보수성 증대

Reference : [Awwwards](https://www.awwwards.com/)

## Links

Backend Repo: [BACKEND_REPO](https://github.com/wecode-bootcamp-korea/28-2nd-BANGGUSEOK-Traveller-backend)

Figma : [Figma](https://www.figma.com/file/8hd0ZB7Bu6606dcG4ZYilq/BANGGUSEOK-Traveller)

## 팀원

김정현, 안현재, 엄성용 ( Frontend )

노세인, 장우경 ( Backend )

## Skills

Dev Environments

- JavaScript (ES6)
- React Hook v17.0.2
- eslint
- prettier

Packages

- react-router-dom | v6.2.1
- recoil | v0.5.2
- sass | v1.47.0
- styled-components | v5.3.3
- qs | v6.10.3
- fortawecome packages

Collabo Tools

- Git&Github
- Slack
- Notion
- Trello
- Figma

## Contents

- 메인 페이지 (안현재)

![스크린샷 2022-01-23 오후 11 04 1](https://user-images.githubusercontent.com/62171131/150684566-c5011761-4fbb-4fec-a1d3-d5bdefb99427.png)

```
- 상단 랜덤피드와 하단 리스트들을 표시하는 컴포넌트.
- 랜덤피드는 공통컴포넌트(RatingCircle) 활용해 점수 시각화.
- 하단 리스트는 백엔드로부터 받은 특정 리스트들과 피드 전체를 표시하는 리스트로 구성.
```

- 상세 페이지 (안현재, 엄성용)

![ezgif com-gif-maker (1)](https://user-images.githubusercontent.com/62171131/150683729-318a3d95-4621-4305-99bd-49ab0727db16.gif)

```
body - 안현재
- 선택한 피드의 디테일을 표시하고, 투표기능이 있는 컴포넌트. 상단부는 공통컴포넌트(TripCard) 재사용.
- 투표기록을 객체형태의 state로 관리하며 승인버튼을 누르면 백엔드로 POST요청.
- response가 이미 투표한 피드라면 경고창 발생.
```

- 재사용 컴포넌트 (전 팀원)

1. TripCard (안현재)

![스크린샷 2022-01-23 오후 11 05](https://user-images.githubusercontent.com/62171131/150682697-cb7786bb-e5ca-42ca-bd66-a4f9cb00e954.png)

```
- 하나의 피드를 받아 정보를 표시. 메인, 트립리스트, 트립디테일 등에서 활용됨.
```
