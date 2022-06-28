# :: 원티드 프리온보딩 프론트엔드 코스 사전과제 \_ qhahd78

## Quick Overview

```
npm install

npm start
```

```
yarn

yarn start
```

# :: 최종 개발 결과

## Login

![image](https://user-images.githubusercontent.com/64029753/176170050-a578f8a3-f6ea-405b-8cc9-73770f6822d3.png)

- 저장된 id : `abc@naver.com`
- 저장된 pw : `Qwertyuiop123@`
- 저장된 id/pw 입력 시 localStorage 에 저장 및 main 페이지로 이동
- localStorage 삭제 시 Login 화면으로 이동
- 형식에 맞지 않거나, 형식에 맞더라도 저장된 id/pw 가 아닐 경우, input 의 색상을 빨간색으로 변경 및 로그인 버튼 disabled 처리.

## Main

![image](https://user-images.githubusercontent.com/64029753/176170326-d711dae5-3ac0-431e-9b79-31aea1f8d4ab.png)

![image](https://user-images.githubusercontent.com/64029753/176173478-3d9a624d-236e-4ffc-8dbd-166f48cb38a7.png)

- GNB : 640px 미만일 경우 search bar 사라지면서 space-between 처리, position: sticky 를 적용하여 항상 상단에 고정되도록 하였음, 로그아웃 버튼 클릭시 localStorage 에 있는 id/pw 삭제
- feed : margin: 0 autoo 로 너비에 상관 없이 항상 가운데로 피드들이 위치
- image 가 로딩되지 않았을 경우 로딩 아이콘 출력, 로딩이 다 되면 이미지 출력
- 댓글 입력 후 엔터키 혹은 버튼 클릭시 피드에 댓글이 달림

# :: 고려한 점

## `atoms > molecules > layouts > pages` 로 컴포넌트를 분리

- atoms : button, input 과 같이 재사용성이 높은 가장 작은 단위 컴포넌트
- molecules : Feed, GNB 와 같이 재사용성이 높은 중간 단위 컴포넌트
- layouts : 페이지 바로 아래 단위 컴포넌트로 함수 정의, data 불러오기 등 기능적인 부분을 수행하는 컴포넌트
- pages : 최종 page 컴포넌트

# :: 개발하지 못한 기능

- 각각의 Feed 에 댓글이 달리지 않고 모든 피드에 댓글이 달린다. 이를 해결하기 위하여
  main layout 에서 이벤트가 발생하고 있는 input 의 id 와 feed 의 id 를 비교하여 같으면
  input 에 value 가 변하도록 개발했다. <br>
  그러나 onChange 에서 동시에 2개의 함수를 적용, 충돌이 일어나면서
  value 값이 원하는 순서(onChange로 event 발생 => id 비교 후 value 적용)로 적용 되지 않아 개발 마무리 하지 못했다.

# :: 진행도

## Assignment 1 - `Login`

- ✅ 로그인 컴포넌트를 개발합니다. (최소화 - `input` 2개, `button` 1개)
- ✅ 약간의 랜더링 최적화를 고려해주세요. (Hint: Ref 사용)
- ✅ 로그인 시(ID, PW 입력 후 버튼 클릭)
  - Local Storage 에 로그인 정보 저장 (다시 접속했을 경우에 정보가 유지 되어야 합니다.)
  - 메인 페이지로 이동합니다.(로그인이 완료되면)
  - 반응형 CSS 적용은 하지 않으셔도 좋습니다. 해당 페이지는 반응형 CSS를 평가하지 않습니다.

## Assignment2 - `GNB`

- ✅ 로그인 후 이동하는 메인페이지의 GNB를 구현해주세요.
- ✅ 구현 시 스크롤에 관계 없이 화면 상단에 고정되는 `sticky` GNB 를 구현해주세요.
- ✅ 모바일 사이즈의 경우 가운데 Input 창이 사라져야 하고 양옆으로(space-between) 정렬 되어야 합니다.
- ✅ 가장 오른쪽 아이콘을 Logout으로 변경해주세요.
- 그 외 기능은 평가하지 않습니다.
  - ✅ (가운데 검색바는 `input` 요소로만 만들어주세요. 기능은 X)
  - ✅ (아이콘은 자유롭게 사용하셔도 괜찮습니다. 아이콘 라이브러리 설치 O)

## Assignment3 - `Validation`

- ✅ 이메일과 비밀번호의 유효성을 확인합니다.
  - 이메일 조건 - `@` , `.` 포함
  - 비밀번호 조건 - 대문자, 숫자, 특수문자 포함 8자리 이상
  - 로그인 시 이메일과 비밀번호가 등록되어 있는 것과 일치 여부 확인
- ✅ Validation 상태를 CSS로 표현해주세요.
  - ✅ Email Input
    Validation Check를 통해 Email 형식이 아닌 경우 표시를해주세요. (ex. boder가 red색상으로 변경)
  - ✅ Password Input
    Validation Check를 통해 Password 형식이 아닌 경우 표시를 해주세요. (ex. boder가 red색상으로 변경.)
  - ✅ Login Button
    Validation Check가 모두 통과된 경우에만 Button 색상을 진하게 변경해주세요. (통과 되지 못한 경우와 구별이 가능해야 합니다.)
- ✅ 유효성 검사 시 아래 두 가지를 적용해서 구현해주세요.
  - 정규표현식 사용
  - Validation 함수 분리

## Assignment4 - `Routing`

- ✅ 로그인,로그아웃 시 라우팅 로직을 통해 페이지가 이동 되도록 구현해주세요. (Local Storage)
- ✅ 로그인이 완료되면 라우터에서 Main Page로 이동되어야 합니다. (history push 사용 X)
- ✅ 로그아웃되면 (Local Storage가 삭제되면) Login Page로 이동되어야 합니다.(history push 사용 X)

## Assignment5 - `Feeds`

- ✅ 피드 컴포넌트를 개발합니다.
- ✅ 레이아웃을 인스타그램과 동일하게 구현해주시면 됩니다. (픽셀 단위까지 맞추실 필요는 없으나 보기에 자연스럽도록 개발해주세요.)
- ✅ 각 Feed의 정보는 public/data 디렉토리에 json형식으로 구성하여 fetch, axios 등을 이용하여 data를 요청해야 합니다.
- ✅ Feed는 최소 3개이상 랜더링 되도록 구현해주세요.
- ❌각각의 Feed에 댓글을 추가할 수 있도록 개발해주세요. (Enter key & 클릭으로 게시 가능하도록)
- ✅ Feed는 화면 중앙에 위치 해야하며 모바일 대응이 가능해야 합니다.
- ✅ 게시 후 Input은 초기화 되어야 합니다.
- ✅ Feed의 이미지는 자유롭게 사용하시되 각각 사이즈가 각각 달라야 합니다. (ex. 정사각형, 세로가 긴 것, 가로가 긴 것 등)
- ✅ Feed Image는 자유롭게 사용하셔도 되지만 필요하시면 아래의 url을 사용하세요.(사이즈를 변경하셔도 됩니다. 같은 사이즈 X)
  "[https://source.unsplash.com/random/600x500](https://source.unsplash.com/random/600x500)"
  "[https://source.unsplash.com/random/900x500](https://source.unsplash.com/random/900x500)"
  "[https://source.unsplash.com/random/700x1080](https://source.unsplash.com/random/700x1080)"
- ✅ Feeds의 Image가 로딩된 후 컴포넌트가 로딩 되도록 Loading을 구현해 주세요 (로딩바는 없어도 괜찮습니다. Hint: image.onload)
  - (아이콘은 자유롭게 사용하셔도 괜찮습니다. icon 라이브러리 설치 O)
  - 메인 Page 전체에 반응형 CSS가 적용 되어있는지 평가합니다. (Media Query 사용)
