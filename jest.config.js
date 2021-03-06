// npx ts-jest config:init 하면 생성 된다.
// ts-jest는 Jest를 사용하여 Typescript로 작성된 프로젝트를 테스트 할 수 있도록 하는 Jest용 소스 맵 지원 기능이 있는 Typescript 전처리기이다.
// https://github.com/kulshekhar/ts-jest
module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
};
