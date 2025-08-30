# 기본적인 정보

이 웹사이트는 IChTo (International Chemistry Tournament) 대회에 관한 정보를 담은 웹사이트이다.

# 사용하는 기술 스택

- React Router (v7 Framework mode)
- Vercel (for deployment)

# 페이지 구성

- Header: 데스크탑 페이지에서는 각각의 요소들이 가로로 리스팅됨. 모바일 페이지에서는 로고 버튼과 샌드위치 버튼으로 존재
 - 좌측: 로고. 클릭 시 / 로 리다이렉트
 - 우측 or 샌드위치 버튼: About, Participation, Program 과 'Register Now' 라고 적혀 있는 강조된 버튼. 각각 클릭 시 /about, /participation, /program, /register 로 리다이렉트됨
- Main
- Footer: International Chemistry Tournament 2026 in Hoengseong, KR 이라고 적힌 텍스트

## 페이지 목록

페이지 구성 중 'Main' 에 들어가는 내용

- /
  - Landing Page
  - 3 섹션으로 나눠져 있음 (Scroll Snap 적용)
    1. 상단 섹션. 배경으로 `landing.jpg` 사용하나 살짝 블러 처리되어 있음. 가운데 중앙 정렬된 굵은 글씨 표제 'International Chemistry Tournament 2026' 있음. 바로 아래에 작은 글씨로 '15-19 August 2026 in Hoengseong, KR' 이라고 적혀 있음
    2. 중앙 섹션. 좌측에는 제목, 대회를 간략하게 설명하는 텍스트, 우측에는 대회의 로고가 들어 있다.
      - 제목: About IChTo 2026
      - 텍스트 내용: The International Chemistry Tournament (IChTo) is a team competition for high school students, with a format based on scientific debates starting from problems with open solutions. Having a novel approach in education, as compared to classical Olympiads, the accent is on both scientific and soft skills. As a result, creativity, teamwork, critical thinking, and public speaking are very important to succeed in this contest.
      - 로고 파일: `logo_2025.png` (임시. 2026 버전 로고가 추가되면 변경될 예정)
    3. 하단 섹션. 'Our Sponsors' 라는 제목 아래에 스폰서들의 로고 사진이 나열되어 있다.
      - 스폰서들의 목록과 그 사진들은 아직 확인되지 않았으므로 임시로 비워 둔다.
- /about
  - 업데이트 예정
- /participation
  - 업데이트 예정
- /program
  - 업데이트 예정
- /register
  - 업데이트 예정
