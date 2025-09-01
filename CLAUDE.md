# 기본적인 정보

이 웹사이트는 IChTo (International Chemistry Tournament) 대회에 관한 정보를 담은 웹사이트이다.

# 사용하는 기술 스택

- React Router (v7 Framework mode)
- Vercel (for deployment)

# 페이지 구성

- Header: 데스크탑 페이지에서는 각각의 요소들이 가로로 리스팅됨. 모바일 페이지에서는 로고 버튼과 샌드위치 버튼으로 존재. 좌측 요소와 우측 요소는 각각 `border-radius:40px` 이 적용된 흰색 배경 안에 있어 마치 버튼들이 오버레이 된 것과 같은 모습을 보여줌.
 - 좌측: 로고 (`cropped-Olimpiada-de-chimie-logo-orizontal-1-1-192x192.png`). 클릭 시 / 로 리다이렉트
 - 우측 or 샌드위치 버튼: About, Participation, Program 과 'Register Now' 라고 적혀 있는 강조된 버튼. 각각 클릭 시 /about, /participation, /program, /register 로 리다이렉트됨
- Main
- Footer: 좌측에 'Where to find us' 라는 텍스트 아래에 있는 소셜미디어 링크 로고들, 우측에 대회 로고 (`ICT-color-1.png`) 배치
  - 소셜미디어 목록:
    - Facebook https://www.facebook.com/share/18xJ5sHSpj/?mibextid=wwXIfr
    - Instagram https://www.instagram.com/chemtourn/

## 페이지 목록

페이지 구성 중 'Main' 에 들어가는 내용

- /
  - Landing Page
  - 3 섹션으로 나눠져 있음 (Scroll Snap 적용)
    1. 상단 섹션. 배경으로 `landing.jpg` 사용하나 살짝 블러 처리되어 있음. 좌측 정렬된 굵은 글씨 표제 'International\nChemistry\nTournament 2026' 있음. 바로 아래에 작은 글씨로 '15-19 August 2026\nin Hoengseong, KR' 이라고 적혀 있음
    2. 중앙 섹션. 좌측에는 제목, 대회를 간략하게 설명하는 텍스트, 우측에는 대회의 로고가 들어 있다.
      - 제목: IChTo 2026
      - 텍스트 내용: is a team competition for high school students, with a format based on scientific debates starting from problems with open solutions. Having a novel approach in education, as compared to classical Olympiads, the accent is on both scientific and soft skills. As a result, creativity, teamwork, critical thinking, and public speaking are very important to succeed in this contest.
      - 로고 파일: `ICT-color-1.png` (임시. 2026 버전 로고가 추가되면 변경될 예정)
      - 텍스트 바로 아래에 /about으로 이동하는 'View details' (밑줄, 오른쪽 화살표) 링크가 있다.
    3. 하단 섹션. 'Our Sponsors' 라는 제목 아래에 스폰서들의 로고 사진이 나열되어 있다.
      - 스폰서들의 목록과 그 사진들은 아직 확인되지 않았으므로 임시로 비워 둔다.
- /about
  - 화면 중앙에 About IChTo 2026 표시, 배경은 블러 처리된 `about.jpg`이고 스크롤 하면 `bg-gray-200`회색 바탕의 내용으로 넘어감 (`about.jpg`의 하단을 흐릿하게 하여 회색 바탕으로 자연스럽게 이어지게 함.) 회색 바탕의 내용에는 다음 요소들이 순차적으로 나열됨. 각 요소들은 둥근 모서리를 가진 흰색 사각형들 위에 적혀 있음.
    - 텍스트 - 'The International Chemistry Tournament (IChTo) is a team competition for high school students, with a format based on scientific debates starting from problems with open solutions. Having a novel approach in education, as compared to classical Olympiads, the accent is on both scientific and soft skills. As a result, creativity, teamwork, critical thinking, and public speaking are very important to succeed in this contest.'
    - https://youtu.be/QK9CkL4Fkg0 유튜브 영상. 영상 하단에는 'IChTo 2023 Final Stage' 라는 설명 있음
    - 두 개의 영상 - 각각 좌, 우에 위치. 각 영상의 하단에는 영상에 대한 설명 텍스트가 있음.
      - https://youtu.be/aPw9sccZR7c 유튜브 영상. 설명은 'Flawed Debate'
      - https://youtu.be/UqXfKddLaP4 유튜브 영상. 설명은 'Model Debate'
    - Frequently asked questions (각 질의는 Accordion 형태로)
      - Q: What is the Chemistry Tournament?
        - A: The Chemistry Tournament is a team and quite creative competition
      - Q: How is it different from the Olympiad?
        - A: The first and perhaps main difference is the type of the tasks. All Tournament tasks are “open-type” and don’t have certain solutions in contrast to Olympiad tasks. Sometimes a task author doesn’t know the right solution and whether there is any solution.
          Secondly, the Tournament is a team event (teams of 4 to 6 people take part in it). So not only personal skills are important, but a capacity for teamwork and communication skills. Also it’s very important to build a right strategy but that’s the topic for another discussion.
- /participation
  - 업데이트 예정
  - 예상: Rules
  - 예상: 다음 소제목과 텍스트
    - 소제목 - 'Who can participate in IChTo?'
    - 텍스트 - 'A team consists of 4-6 high school students representing the same country. They do not have to be enrolled in the same high school. Each country can register up to 2 teams, besides the host country, which can register up to 3 teams'
  - 예상: Frequently asked questions
    - Q: What role can a participant perform?
      - A: There are four main roles one can perform:
        **A Reporter**: introduces and defends the task solution
        **An Opponent**: gives a brief description of the solution, points out the shortcomings of the report, discusses it with the reporter and makes a conclusion about how good the task was solved.
        **A Reviewer**: evaluates the performance of the reporter and the opponent, points out main shortcomings of the report and the opposition.
        **An Observer**: can ask questions to anyone. This role exists only in four or five team sections.
    - Q: What do the teams do before the Tournament?
      - A: Each team solves the tasks and makes a presentation for every task (except the tasks from which team is going to refuse) to introduce and defend solutions.
    - What happens in the Tournament?
      - A: Here is a scheme that should help you to understand how the Round goes.
        `scheme-1024x909.png`
- /program
  - 화면 중앙에 'Programs' 라고 적혀 있음. 배경은 블러 처리된 `mountain.jpg`이고 스크롤 하면 `bg-gray-200`회색 바탕의 내용으로 넘어감 (`mountain.jpg`의 하단을 흐릿하게 하여 회색 바탕으로 자연스럽게 이어지게 함.) 회색 바탕의 내용 위에
    1. 'Schedule' 이라는 소제목 아래 일정표 작성. 날짜-일정 여러 쌍이 각각 둥근 모서리의 흰색 사각형들에 작성되어 있음. 사각형들은 `bg-gray-400`의 선으로 위에서 아래로 이어져 있음.
      - 8/15: Opening Ceremony, Quiz, School Tour, Team Introduction and Round 1
      - 8/16: Round 2 and Water Park Breaks
      - 8/17: Round 3 and 4
      - 8/18: Final Round, Closing Ceremony and Cultural Exchange
      - 8/19: A Tour of Seoul
    2. 'Accomodation' 이라는 소제목 아래 숙박시설 소개. 이름과 내용을 적절한 크기와 형태로 하나의 큰 둥근 모서리의 흰 사각형 안에 정리
      - 이름: 웰리힐리파크 Welli Hilli Park
      - 내용: 로고 (`accomodation_logo.svg`), 외부사진 (`accomodation_outdoor.jpg`), 내부사진 (`accomodation_indoor.jpg`), 지도 (구글 맵 연동)
    3. 'About the Venue' 라는 내용 아래에 시설 소개. 이름과 내용을 적절한 크기와 형태로 하나의 큰 둥근 모서리의 흰 사각형 안에 정리
      - 이름: 민족사관고등학교\nKorean Minjok Leadership Academy
      - 내용: 로고 (`kmla_logo.png`), 사진 (`kmla_photo.jpg`), 지도 (구글 맵 연동)
- /register
  - 업데이트 예정
