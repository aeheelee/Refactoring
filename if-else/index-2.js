/*
- 3월 ~ 5월: 봄
- 6월 ~ 8월: 여름
- 9월 ~ 11월: 가을
- 12월 ~ 2월: 겨울
*/

const getSeason = (month) => {
  // if
  if (month >= 3 && month <= 5) return "봄";
  if (month >= 6 && month <= 8) return "여름";
  if (month >= 9 && month <= 11) return "가을";
  if (month === 12 || month <= 2) return "겨울";

  // switch
  switch (month) {
    case 3:
    case 4:
    case 5:
      return "봄";
    //이하생력
    case 12:
    case 1:
    case 2:
      return "겨울";
  }
};

// switch, 연산자 사용
const SeasonMap = {
  0: "봄",
  1: "여름",
  2: "가을",
  3: "겨울",
};

const getSeason = () => {
  const shiftedMonth = Math.floor(((month + 9) % 12) / 3);
  return SeasonMap[shiftedMonth];
};

// 배열로 변경
const Seasons = ["봄", "여름", "가을", "겨울"];
const getSeason = (month) => {
  const shiftedMonth = Math.floor(((month + 9) % 12) / 3);
  return Seasons[shiftedMonth];
};

// 연산자 함수 처리
const Seasons = ["봄", "여름", "가을", "겨울"];
const getSeasonIndex = (month) => Math.floor(((month + 9) % 12) / 3);
const getSeason = (month) => Seasons[getSeasonIndex(month)];

console.log(getSeason(2)); //겨울
console.log(getSeason(5)); //봄
console.log(getSeason(7)); //여름
console.log(getSeason(10)); //가을
console.log(getSeason(12)); //겨울
