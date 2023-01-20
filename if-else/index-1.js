const naverLogin = (id) => {
  return "네이버";
};
const kakaoLogin = (id) => {
  return "카카오";
};
const facebookrLogin = (id) => {
  return "페이스북";
};
const googleLogin = (id) => {
  return "구글";
};

const socialLogin = (where, id) => {
  let domain;
  // if else - 4번을 접근해야 함
  if (where === "naver") {
    domain = naverLogin(id);
  } else if (where === "kakao") {
    domain = kakaoLogin(id);
  } else if (where === "facebook") {
    domain = facebookrLogin(id);
  } else if (where === "google") {
    domain = googleLogin(id);
  }

  // switch - 가독성은 좋아졌지만 break; 가 생김
  switch (where) {
    case "naver":
      domain = naverLogin(id);
      break;
    case "kakao":
      domain = kakaoLogin(id);
      break;
    case "facebook":
      domain = facebookLogin(id);
      break;
    case "google":
      domain = googleLogin(id);
      break;
  }
  return `${domain} ${id}`;
};

// switch문 사용, 함수로 분리
const executeLogin = (where, id) => {
  switch (where) {
    case "naver":
      return naverLogin(id);
    case "kakao":
      return kakaoLogin(id);
    case "facebook":
      return facebookLogin(id);
    case "google":
      return googleLogin(id);
  }
};

const socialLogin = (where, id) => {
  const domain = executeLogin(where, id);
  return `${domain} ${id}`;
};

// 객체로 변경 (if else 보다 성능이 좋음, 무조건 딱 한번만 접근)
const socialLoginMap = {
  kakao: kakaoLogin,
  naver: naverLogin,
  facebook: facebookLogin,
  google: googleLogin,
};

const socialLogin = (where, id) => {
  const domain = socialLoginMap[where](id);
  return `${domain} ${id}`;
};

console.log(socialLogin("naver", "aeheelee"));
console.log(socialLogin("google", "aeheelee"));
