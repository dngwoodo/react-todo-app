#### 알게 되는 것

- [x] 간단한 React + Typescript 사용법
- [x] 간단한 Webpack 사용법
- [x] Redux 사용법
- [x] Redux Toolkit 사용법
- [ ] 간단한 Jest 사용법

#### Resource
[리덕스 잘 쓰고 계시나요?](https://ridicorp.com/story/how-to-use-redux-in-ridi/)

#### 알게 된 것
<strong>React re-rendering 조건</strong>
1. state가 변경되었을 때
1. props가 변경되었을 때
1. 부모 컴포넌트가 리랜더링 되었을 때

하지만 VDOM을 사용하기 때문에 jsx에서 실제 바뀌는 부분만 실제 DOM에 적용된다. VDOM은 메모리상에 올라가 있으므로 매우 빠르게 처리된다.

<strong>useCallback</strong>
```jsx
// 1. () => {} 이것을 memorization 한다.
// 2. 부모 -> 자식 컴포넌트로 함수를 props로 보낼 때
//    자식 컴포넌트가 React.memo로 최적화되어있더라도 함수는 무조건 자기자신만 같으므로 
//    useCallback으로 캐싱을 해주지 않으면 무조건 리랜더링 된다.
// 3. 두번째 인자 deps가 바뀌게 되면 그떄 새로운 함수를 만들어서 반환한다. 
//    두번째 인자가 빈배열이면 함수안에 값들이(e.g. state) 처음 만들어졌을 때의 값들로 캐싱되서 사용된다.
useCallback(() => {}, [])
```

<strong>useMemo</strong>
```jsx
// 1. 값만 memorization 한다.
useMemo(() => 값, [])
```

<strong>React.memo</strong><br />
1. 사용해야 하는 때는 같은 props로 랜더링이 자주 일어나는 컴포넌트
1. 사용하지 말아야 할 때는 props가 자주 바뀌는 컴포넌트

```jsx
// 1. 랜더링 결과를 memorization 한다.
// 2. 리랜더링이 일어날 경우 props가 같다면 memoriaztion된 값을 사용한다.
// 3. props 값 중 함수를 조심하자. useCallback이 안되어있으면 무조건 리랜더링이 일어난다.
const Movie = React.memo(({title, description}) => {
  return (
    <>
      <span>{title}</span>
      <span>{description}</span>
    </>
  )
})

export default Movie;
```
```jsx
// 4. React.memo는 shallow(얕은) 비교를 하기 때문에 두번째 인자를 사용한다.
//    얕은 복사는 바깥은 별도의 메모리에 만들어지지만 안에 객체들은 원래의 메모리 주소를 사용한다.
//    깊은 복사는 완전히 새로운 객체를 만든다.
//    즉 얕은 비교는 바깥 객체의 메모리 주소만 비교한다.
// 5. React의 값 비교 방법
//    object = reference 값 비교
//    변수, 문자열 = 값 비교
const areEqual = (prevProps, nextProps) => {
  return (
    prevProps.title === nextProps.title &&
    prevProps.description === nextProps.description
  )
}

const Movie = React.memo(({title, description}) => {
  return (
    <>
      <span>{title}</span>
      <span>{description}</span>
    </>
  )
}, areEqual)

export default Movie;
```