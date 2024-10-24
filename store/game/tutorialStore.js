const data = {
  name: "처음 시작할때 하는 방탈출 추리게임",
  prompt:
    "주인공은 방에서 탈출하기 위해 방 안의 아이템들을 활용하여 여러 가지 문제와 수수께끼를 해결해야 합니다. 모든 이야기는 자유롭게 작성할 수 있습니다.",
  characters: ["주인공", "힌트", "나레이션"],
  scenes: [
    {
      id: 0,
      character: { name: "나레이션", index: 2 },
      text: ["어두운 방에서 정신을 차려본다..."],
      type: "text",
      location: "center",
      colorStyle: "black",
    },
    {
      id: 1,
      character: { name: "힌트", index: 1 },
      text: [
        "눈을 떠보니 낯선 어두운 방에 갇혀 있습니다.",
        "기억은 희미하고, 어떻게 여기까지 오게 되었는지 알 수 없습니다.",
        "방 안은 어둡고 조용하며, 주변에는 다양한 물건들이 어렴풋이 보입니다.",
        "주인공은 이 방에서 탈출하기 위해 방 안의 아이템들을 활용하여 여러 가지 문제와 수수께끼를 해결해야 합니다. 시간은 흐르고 있고, 주인공은 서둘러야 합니다.",
        "모든 이야기는 자유롭게 작성할 수 있습니다.",
      ],
      type: "text",
      location: "left",
      colorStyle: "black",
    },
  ],
  items: [
    {
      id: 1,
      name: "손전등",
      status: "배터리 없는 상태",
      description:
        "손전등은 방 안의 어두운 곳을 밝힐 수 있습니다. 배터리를 찾아야 사용 가능",
      location: "거실 테이블 위에 손전등(배터리 없음)이 놓여 있습니다.",
      useRequired: { key: 2, name: "배터리" },
    },
    {
      id: 2,
      name: "배터리가 장착된 손전등",
      status: "배터리가 장착된 상태",
      description: "손전등을 사용할 수 있습니다.",
      location: "주인공이 소지하고 있습니다.",
      useRequired: {},
    },
    {
      id: 3,
      name: "낡은 사진",
      status: "뒷면에 글씨가 적혀 있음",
      description:
        "사진 뒷면에 글씨가 적혀 있습니다. 글씨를 읽어보면 힌트를 얻을 수 있습니다.",
      location: "방 바닥, 혹은 주위를 둘러보면 찾을 수 있습니다.",
      useRequired: { id: 1, name: "배터리가 장착된 손전등" },
    },
  ],
  keys: [
    {
      id: 2,
      name: "배터리",
      description: "손전등을 사용하기 위해 필요한 아이템입니다.",
      location: "방 안 어딘가에 숨겨져 있습니다. (랜덤 생성)",
    },
  ],
  problem: [
    {
      id: 0,
      type: "text",
      problem: "손전등 배터리 찾기",
      answer: "방을 더 잘 살펴보기 위해 배터리를 찾아 손전등을 작동시킨다",
    },
    {
      id: 1,
      type: "text",
      problem: "낡은 사진의 단서",
      answer: "사진 뒷면의 글씨를 해독하여 다음 단서를 찾는다",
    },
    {
      id: 2,
      type: "text",
      problem: "열쇠 조각 모으기",
      answer: "방 곳곳에 숨겨진 열쇠 조각 3개를 찾아 하나의 열쇠로 조립한다",
    },
    {
      id: 3,
      type: "text",
      problem: "책상 서랍 열기",
      answer: "조립한 열쇠로 자물쇠로 잠긴 책상 서랍을 연다",
    },
    {
      id: 4,
      type: "text",
      problem: "벽시계의 시간 맞추기",
      answer: "책상 서랍에서 얻은 단서로 벽시계의 시간을 맞춘다",
    },
    {
      id: 5,
      type: "text",
      problem: "음악 상자의 멜로디 재생",
      answer: "벽시계가 움직이면 음악 상자가 작동하여 멜로디를 연주한다",
    },
    {
      id: 6,
      type: "text",
      problem: "지도 해석하기",
      answer: "음악 상자의 멜로디에 숨겨진 힌트로 벽에 걸린 지도의 비밀을 푼다",
    },
    {
      id: 7,
      type: "text",
      problem: "금고의 암호 풀기",
      answer: "지도를 해석하여 얻은 암호로 금고를 연다",
    },
    {
      id: 8,
      type: "text",
      problem: "유리병 속의 쪽지 얻기",
      answer: "금고 안에서 유리병과 그 안의 쪽지를 발견한다",
    },
    {
      id: 9,
      type: "text",
      problem: "탈출구 찾기",
      answer: "쪽지의 지시에 따라 숨겨진 탈출구를 찾아 방을 탈출한다",
    },
  ],
};

export { data, metadata };
