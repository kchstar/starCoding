# React 컴포넌트와 props 개념 이해하기

# 목차
1. 컴포넌트
   개념
   생김새
2. Props
   개념
3. 실습
4. 참고 문헌
    지난 시간에는 [React JSX와 엘리먼트란 무엇일까?][]에서 JSX와 엘리먼트를 알아보았습니다. 이번 시간에는 컴포넌트(Components)와 props를 알아보겠습니다. 컴포넌트란 무엇일까요?


컴포넌트
개념
React 의미와 장점에서 살펴보았듯 컴포넌트는 "웹 페이지를 만드는 퍼즐 조각" 입니다. 개발자는 컴포넌트 조각을 설계하고 만든 컴포넌트를 조합해서 사용자 인터페이스(user interface, UI)를 구축합니다. UI 조각인 컴포넌트를 모으면 전체 퍼즐 그림인 웹 페이지를 만들 수 있습니다.
리액트에서 컴포넌트는 DOM 구조를 만드는 주형틀입니다. 이 주형틀에 데이터라는 재료를 넣으면 React JSX와 엘리먼트란 무엇일까?가 들어집니다. 자바스크립트의 함수가 특정값을 반환하는 것처럼 컴포넌트는 자바스크립트의 함수처럼 작동해서 리액트 엘리먼트를 반환합니다. 어떤 데이터 집합을 사용하든 같은 컴포넌트를 사용하면 모두 동일한 DOM 구조가 반환됩니다. 같은 컴포넌트를 사용하면 동일한 DOM 구조를 지닌 인스턴스(instance)를 원하는 개수 만큼 만들 수 있습니다.

따라서 리액트의 컴포넌트를 설계할 때는 추상화를 잘 하는 것이 중요합니다. 해당 컴포넌트가 반환하는 리액트 엘리먼트가 다른 곳에 쓰일 것을 고려하면서 컴포넌트를 만드는 것이죠. 추상화를 잘 할수록 같은 컴포넌트를 더 많은 곳에서 사용할 수 있습니다. 유사한 컴포넌트를 다시 만드는 수고를 하지 않고서 말이죠. 그럼 컴포넌트는 어떻게 생겼을까요?

생김새
컴포넌트는 다음과 같이 생겼습니다.

JSX
>const Vegetables = () => {
  return (
    <div>
      <h1>채소 종류</h1>
      <ul>
        <li>당근</li>
        <li>감자</li>
        <li>호박</li>
        <li>고구마</li>
        <li>토마토</li>
      </ul>
    </div>
  )
}
이 컴포넌트는 HTML 태그로 기술된 리액트 엘리먼트를 반환합니다. 컴포넌트는 아래와 같이 사용자 정의 컴포넌트로 작성한 엘리먼트를 반환할 수도 있습니다.

JSX
>const Animals = () => {
  return (
    <>
      <Dog />
      <Cat />
    </>
  )
}
"Animals"라는 컴포넌트는 "Dog"와 "Cat"이라는 하위 컴포넌트로 이루어져 있습니다. "Dog"와 "Cat" 등의 하위 컴포넌트는 다른 컴포넌트에서 다시 사용할 수 있고요. 리액트에서는 컴포넌트 안에 컴포넌트를 중첩하는 구조를 사용하는 것이 가능합니다.

그럼 컴포넌트에서는 데이터를 어떻게 전달할까요? 만약 위 Animals이라는 컴포넌트 수준에서 데이터를 제어하면서 "Dog" 또는 "Cat"이라는 컴포넌트 안에 있는 컴포넌트로 데이터를 전달하고 싶다면요? 이때 사용하는 도구가 바로 props입니다.


Props
개념
props는 상위 컴포넌트에서 하위 컴포넌트로 데이터를 전달해주는 객체입니다[1]. 리액트는 사용자 정의 컴포넌트로 작성한 엘리먼트의 JSX 속성과 자식을 해당 컴포넌트에 단일 객체로 전달합니다. React JSX와 엘리먼트란 무엇일까?에서 살펴보았듯 props.children이 이 역할을 수행하죠. 사령탑인 상위 컴포넌트에서 어떤 데이터를 보낼 것인지를 정하면 이 데이터를 props를 통해 객체 형태로 하위 컴포넌트로 보냅니다.

위에서 만든 Vegetables 컴포넌트를 props를 이용해 작성하면 다음과 같습니다.

JSX
>const data = [
{ id: 1, name: '당근' },
{ id: 2, name: '감자' },
{ id: 3, name: '호박' },
{ id: 4, name: '고구마' },
{ id: 5, name: '토마토' }
]

>const Vegetables = ({ data }) => {
  return (
    <div>
      <h1>채소 종류</h1>
      <ul>
        {data.map(vegetable => {
          const { id, name } = data
          return <li key={id}>{name}</li>
        })}
      </ul>
    </div>
  )
}
여기서는 data라는 변수로 props의 데이터를 받았습니다. props는 객체이므로 구조 분해(destrucuring) 방식을 이용해 데이터를 받는 변수를 중괄호({})로 감싸주었습니다. Animals 컴포넌트도 props를 이용해 작성하면 다음과 같습니다.

JSX
>const Animals = () => {
  return (
    <>
      <Dog name="호두" type="골든 리트리버" age="5" />
      <Cat name="두부" type="코리안 숏헤어" age="3" />
    </>
  )
}
props를 사용하면 데이터를 상위 컴포넌트 수준에서 제어하면서 하위 컴포넌트로 전달하고 코드를 간결하게 작성할 수 있습니다. 그럼 지금부터는 컴포넌트와 props으로 실습해보겠습니다.


실습
화면에 다음과 같이 도서 목록을 출력하려고 합니다.


출력된 도서 리스트
출력된 도서 리스트 
- Snug Archive
각 도서의 데이터는 도서명, 저자명, 그리고 도서 설명 부분으로 이루어져 있습니다. 도서 리스트에는 여러 권의 책이 있습니다. 우리는 도서 데이터가 담긴 1권의 책을 찍어내는 틀을 그 틀로 여러 도서를 한 번에 만들 수 있습니다. 여기서 틀은 컴포넌트이고 각 도서 데이터를 변수로 만들어 추상화한 도구는 props입니다. 도서 1권을 만드는 컴포넌트는 다음과 같습니다.

JSX
>const Book = ({ title, author, description }) => {

  return (
    <article className="book">
      <h1>{title}</h1>
      <span>{author}</span>
      <p>{description}</p>
    </article>
  )
}

export default Book
여기서 title, author, description가 이 props.children을 받은 변수입니다. 이 컴포넌트는 아래와 같이 "props"를 이용해 표현할 수도 있습니다.

JSX
>const Book = (props) => {
  const { title, author, description } = props

  return (
    <article className="book">
      <h1>{title}</h1>
      <span>{author}</span>
      <p>{description}</p>
    </article>
  )
}

export default Book
도서 데이터는 아래와 같이 "books"라는 이름의 .js 파일에 있습니다.

JSX
>export const books = [
  {
    id: 1,
    title: 'Clean Code',
    author: '로버트 C. 마틴',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolor natus sit atque corrupti pariatur quaerat? Laudantium reprehenderit dolor tempore.',
  },
  {
    id: 2,
    title: '실용주의 프로그래머 20주년 기념판',
    author: '데이비드 토머스, 앤드류 헌트',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolor natus sit atque corrupti pariatur quaerat? Laudantium reprehenderit dolor tempore.',
  },
  {
    id: 3,
    title: '밑바닥부터 만드는 컴퓨팅 시스템',
    author: '노암 니산, 시몬 쇼켄',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium dolor natus sit atque corrupti pariatur quaerat? Laudantium reprehenderit dolor tempore.',
  },
]
그럼 우리는 도서 1권에 대한 정보를 만드는 "Book" 컴포넌트와 각 도서의 데이터가 담긴 "books.js"를 이용해 도서 리스트를 만들겠습니다. 아래와 같이 "Booklist"라는 이름의 상위 컴포넌트에서 map 함수를 이용해 "Book" 컴포넌트를 반복하면 도서 리스트를 만들 수 있습니다.

JSX
import Book from './Book'
import { books } from './books'

const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        return <Book key={book.id} {...book} /> // {...books} 는 books={books}와 동일
      })}
    </section>
  )
}

export default BookList
여기에 아래 CSS 코드를 더하면 우리가 원하는 결과물이 완성됩니다.

CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background: lightgray;
  font-family: Arial, Helvetica, sans-serif;
}

.booklist {
  width: 90vw;
  max-width: 1170px;
  margin: 5rem auto;
  display: grid;
  gap: 2rem;
}

.book {
  background: #fff;
  margin: 0 auto;
  padding: 1rem 2rem;
  border-radius: 0.75rem;
  line-height: 1.5;
}
지금까지 React의 컴포넌트와 props의 개념을 알아보았습니다. 다음 시간에는 useState와 useEffect의 사용법을 알아보겠습니다. 모두 수고 많으셨습니다.