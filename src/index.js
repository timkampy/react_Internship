import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import BackToTop from 'react-back-to-top-button';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class CaseStudy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      developer: 'A. Korchevska',
      gitHub: 'https://github.com/timkampy/react_Internship',
      linkToDesign:
        'https://dribbble.com/shots/6141581-The-Financial-Future-is-Female',

      biography: [
        {
          startYear: '1997',
          endYear: '2000',
          activity: 'Middle school'
        },
        {
          startYear: '2000',
          endYear: '2008',
          activity: 'High school'
        },
        {
          startYear: '2008',
          endYear: '2012',
          activity: "Bachelor's degree in Computer science, KNTU"
        },
        {
          startYear: '2012',
          endYear: '2013',
          activity: 'Agriculture internship in Germany'
        },
        {
          startYear: '2013',
          endYear: '2014',
          activity: "Master's degree in Computer science, KNTU"
        },
        {
          startYear: '2014',
          endYear: '2016',
          activity: 'Junior Manual QA'
        },
        {
          startYear: '2016',
          endYear: '2017',
          activity: 'Qa Lead'
        },
        {
          startYear: '2017',
          endYear: '2019',
          activity: 'Middle Manual QA'
        }
      ]
    };
  }

  renderTable(data) {
    return (
      <table>
        <tbody>
          <tr>
            <th>Start</th>
            <th>End</th>
            <th>Activity</th>
          </tr>
          {data.map((row, index) => this.renderRow(row, index))}
        </tbody>
      </table>
    );
  }

  renderRow(row, index) {
    return (
      <tr key={index}>
        <td>{row.startYear}</td>
        <td>{row.endYear}</td>
        <td>{row.activity}</td>
      </tr>
    );
  }

  // Adding new row to the end of a table

  addRow(array) {
    return array.push({
      startYear: '2019',
      endYear: '2100',
      activity: 'Big Boss'
    });
  }

  render() {
    return (
      <section className="container">
        <div className="top_navbar">
          <a href="#lesson1">Lesson 1</a>
          <a href="#lesson2">Lesson 2</a>
          <a href="#lesson3">Lesson 3</a>
          <a href="#lesson4">Lesson 4</a>
          <a href="#lesson5">Lesson 5</a>
          <a href="#lesson6">Lesson 6</a>
          <a href="#" className="nav_right">
            Investor Relations
          </a>
          <a href="#" className="nav_right">
            English ∨
          </a>
          <a href="#" className="nav_right">
            Support
          </a>
        </div>

        <div className="middle_navbar top_navbar">
          <a href="#" id="logo">
            Internship
          </a>
          <a href="#" className="nav_right">
            {' '}
            <i className="fa fa-search nav_right"></i>
          </a>
          <a href="#" className="nav_right">
            Careers
          </a>
          <a href="#" className="nav_right">
            Research & Insights
          </a>
          <a href="#" className="nav_right">
            Capabilities
          </a>
          <a href="#" className="nav_right">
            Who We Are
          </a>
        </div>

        <div id="header" className="header">
          <h2>
            The Financial <br /> Future is
          </h2>
          <h1>Female</h1>
          <p>
            Women are transforming financial <br /> markets and economies across
            the globe. <br />
            Their risk tolerance, confidence, and <br /> willingness to invest
            will impact our world
            <br />
            for years to come.
          </p>
          <a href="#" className="viewMoreLink">
            View Full Report >
          </a>
        </div>

        <div className="row">
          <div className="side">
            <h2>About Me</h2>
            <h3>Anna Korchevska</h3>
            <h5>Photo of me:</h5>
            <div className="imageWrapper"></div>

            <p>Some text about me</p>
            <a href={this.state.gitHub} target="blank" alt="Github link">
              <i className="fab fa-github"></i>
            </a>

            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div className="fakeimg">Image</div>
            <br />
            <div className="fakeimg">Image</div>
            <br />
            <div className="fakeimg">Image</div>
          </div>

          <div className="main">
            {/*Back on Top button*/}
            <BackToTop
              showOnScroll
              showAt={100}
              speed={1500}
              easing="easeInOutQuint"
            >
              <button type="button" id="upButton">
                Up
              </button>
            </BackToTop>
            {/*End of Back on Top button*/}
            <h2 id="lesson1">Lesson 1</h2>
            <p>
              <strong>Тема:</strong> git, node, npm <br />
              <strong>Цель:</strong> изучить базовые функции git, node, npm.
              Подготовить к дальнейшей работе систему. <br />
              <strong>Обсуждаемый материал:</strong> <br />
            </p>
            <ol>
              <li>Что такое система контроля версий и зачем она нужна </li>
              <li>Git</li>
              <li>checkout, add, commit, pull, push</li>
              <li>Основы ветвления и слияния</li>
              <li>что такое nodejs, зачем он нужен и как устанавливать</li>
              <li>Что такое менеджер пакетов, установка npm</li>
            </ol>
            <p>
              <strong>Задание:</strong> установить git, node, npm. Создать
              аккаунт на{' '}
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </a>{' '}
              и публичный репозиторий для проекта. Клонировать из репозитория
              проект, сделать любые изменения в нем сделать коммит и запушить
              изменения.
            </p>
            {/*<div className="fakeimg bigImg">Image</div>*/}
            <h2 id="lesson2">Lesson 2</h2>
            <div>
              <strong>Тема:</strong> основы html css <br />
              <strong>Цель:</strong> определить уровень умения верстки <br />
              <strong>Обсуждаемый материал:</strong> <br />
              <ol>
                <li>
                  Html: теги, структура html страницы, блочные и строчные
                  элементы, списки, таблицы, атрибуты, текст, якоря, ссылки,{' '}
                  <a href="https://validator.w3.org/">w3c</a> валидация
                </li>
                <li>
                  Css: стили, классы, идентификаторы, селекторы, псевдоклассы,
                  псевдоэлементы
                </li>
              </ol>
            </div>
            <p>
              <strong>Задание:</strong> создать простой шаблон страницы для
              дальнейшей работы. Страница должна содержать хедер, футер, блок с
              коротким описанием проекта и элементы из раздела Обсуждаемый
              материал этого урока. На странице должны быть: имя и фамилия
              автора, ссылка на github аккаунт, ссылка на оригинал дизайна.
              Страница должна проходить валидацию на w3c.
            </p>
            <h3> Useful links </h3>
            <h3>HTML</h3>
            <ul>
              <li>
                <a
                  href="https://medium.com/@blondiebytes/how-to-create-interactive-websites-with-javascript-627a6d998fed"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  How to Create Interactive Websites with JavaScript
                </a>
              </li>
              <li>
                <a
                  href="http://htmlbook.ru/samhtml"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Самоучитель HTML4
                </a>
              </li>
              <li>
                <a
                  href="http://htmlbook.ru/samhtml5"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Самоучитель HTML5
                </a>
              </li>
            </ul>
            <h3>CSS</h3>
            <ul>
              <li>
                <a
                  href="http://htmlbook.ru/samcss"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Самоучитель CSS
                </a>
              </li>
              <li>
                <a
                  href="http://www.wisdomweb.ru/CSS3/index.php"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Что такое CSS3?
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=NkmZl1Yy94Q&list=PLY4rE9dstrJzdkXYQXpZA0voVgB_0RJ_q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video course
                </a>
              </li>
            </ul>
            <h3>JavaScript</h3>
            <ul>
              <li>
                <a
                  href="https://learn.javascript.ru/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Современный учебник JavaScript
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/watch?v=n0sPFaLsNeI&list=PLY4rE9dstrJymG1GyPLgOKsJNq9r-p6pX"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Video course
                </a>
              </li>
            </ul>
            <h2 id="lesson3">Lesson 3</h2>
            <strong>Тема:</strong> основы создания проектов на react <br />
            <strong>Цель:</strong> ознакомится с node и npm, получить базовые
            понятия о том что такое react, развернуть первый проект с помощью
            react cli <br />
            <strong>Обсуждаемый материал:</strong> <br />
            <ol>
              <li>Nodejs: основы, установка</li>
              <li>
                Npm: основы, установка, что такое библиотека и зависимость
              </li>
              <li>React: вводная информация, jsx, компоненты</li>
              <ul>
                <li>React cli: установка, запуск проекта, hot reloading</li>
              </ul>
            </ol>
            <p>
              <strong>Задание:</strong>перенести сверстанную страницу в react
              компоненту
            </p>
            <h3>Useful links</h3>
            <h3>React</h3>
            <ul>
              <li>
                <a
                  href="https://habr.com/ru/post/249107/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  ReactJS for stupid people
                </a>
              </li>
              <li>
                <a
                  href="https://habr.com/ru/company/ruvds/blog/343022/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Основы React: всё, что нужно знать для начала работы
                </a>
              </li>
              <li>
                <a
                  href="https://reactjs.org/docs/create-a-new-react-app.html"
                  rel="noopener noreferrer"
                >
                  Create a New React App
                </a>
              </li>
            </ul>
            <h3>Node js</h3>
            <ul>
              <li>
                <a
                  href="https://habr.com/ru/post/420123/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Чем на самом деле является Node.js?
                </a>
              </li>
              <li>
                <a
                  href="https://learn.javascript.ru/screencast/nodejs"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  18 скринкастов из учебника Javascript.ru
                </a>
              </li>
            </ul>
            <h3>Npm</h3>
            <ul>
              <li>
                <a
                  href="https://habr.com/ru/post/243335/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  npm для простых смертных
                </a>
              </li>
            </ul>
            <h2 id="lesson4">Lesson 4</h2>
            <p>
              <strong>Тема:</strong> основы js, переменные, операторы, условия
            </p>
            <p>
              <strong>Цель:</strong>ознакомится с понятием переменной
            </p>
            <p>
              <strong>Обсуждаемый материал:</strong>
            </p>
            <ol>
              <li>Что такое переменная</li>
              <li>Типы переменных</li>
              <li>Проверка типов в react</li>
              <li>Область видимости</li>
              <li>let const</li>
              <li>условия</li>
              <li>операторы(включатя тернарный)</li>
              <li>операторы stead и rest </li>
            </ol>
            <p>
              <strong>Рекомендуемые ссылки:</strong>
            </p>
            <ol>
              <li>
                <a href="https://learn.javascript.ru/variables" target="blank">
                  Variables
                </a>
              </li>
              <li>
                <a
                  href="https://ru.reactjs.org/docs/typechecking-with-proptypes.html"
                  target="blank"
                >
                  Typechecking
                </a>
              </li>
              <li>
                <a
                  href="https://getinstance.info/articles/javascript/variables-scope-in-javascript/"
                  target="blank"
                >
                  Variables scope
                </a>
              </li>
              <li>
                <a href="https://learn.javascript.ru/let-const" target="blank">
                  Let/const
                </a>
              </li>
              <li>
                <a href="https://learn.javascript.ru/ifelse" target="blank">
                  If/else
                </a>
              </li>
              <li>
                <a href="http://jsraccoon.ru/es6-spread-rest" target="blank">
                  Spread/Rest
                </a>
              </li>
            </ol>
            <p>
              <strong>Задание:</strong> Выделить потенциально динамический
              контент на странице (имена, даты, тексты) и перенести его в
              переменные. Переменные должны быть константами в компоненте или в
              state.
            </p>
            <div>
              <h2 id="lesson5">Lesson 5</h2>
              <p>
                <strong>Тема:</strong> основы js, массивы
              </p>
              <p>
                <strong>Цель:</strong> научиться работать с массивами
              </p>
              <p>
                <strong>Обсуждаемый материал:</strong>
              </p>
              <ol>
                <li>Что такое массив</li>
                <li>Push</li>
                <li>Split</li>
                <li>Join</li>
                <li>Удаление элемента из массива</li>
                <li>Splice</li>
                <li>Сортировка</li>
                <li>Reverse, concat</li>
                <li>массив перебирающие методы</li>
                <li>onClick</li>
              </ol>
              <p>
                <strong>Задание:</strong> На странице создать таблицу с
                биографией по годам. Данные записать в массив. Сделать
                сортировку данных по клику (без помощи и с помощью функций
                сортировки). Добавить две кнопки, по клику на первую добавить
                новый элемент массива, и удалить его по клику на вторую.
              </p>
              <p>
                <strong>Links:</strong>
              </p>
              <ul>
                <li>
                  <a href="https://ru.wikipedia.org/wiki/%D0%90%D0%BB%D0%B3%D0%BE%D1%80%D0%B8%D1%82%D0%BC_%D1%81%D0%BE%D1%80%D1%82%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B8">
                    Алгоритм сортировки
                  </a>
                </li>
              </ul>
            </div>
            <h3 className="tableName">Biography</h3>
            {this.renderTable(this.state.biography)}
            <button
              id="addRow"
              type="button"
              onClick={this.addRow(this.state.biography)}
            >
              Add
            </button>
            <div>
              <h2 id="lesson6">Lesson 6</h2>
              <p>
                <strong>Тема:</strong> основы js, объекты
              </p>
              <p>
                <strong>Цель:</strong> научиться работать с объектами
              </p>
              <p>
                <strong>Обсуждаемый материал:</strong>
              </p>
              <ol>
                <li>Что такое объект</li>
                <li>Чем объект отличается от массива</li>
                <li>Что такое this</li>
                <li>Доступ к элементам объекта</li>
                <li>Добавить(удалить) элемент в объект</li>
                <li>Spread оператор</li>
                <li>Иммутабельность ознакомится с понятием</li>
                <li>for..in перебор свойств объекта</li>
                <li>Object.keys</li>
                <li>Object.assign</li>
              </ol>
              <p>
                <strong>Задание:</strong> усложнить таблицу из прошлого урока,
                сделать минимум два уровня вложенности. Добавить и убрать
                элемент из объекта, выбрать элемент объекта по ключу. Переписать
                часть объекта с помощью spread оператора.
              </p>
            </div>
          </div>
        </div>

        <footer className="footer">
          <div className="footer__content">
            <ul className="footer__links">
              <li>
                <a href="#">Our Purpose &amp; Values</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Ventures</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <ul className="footer__secondary-links">
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Corporate Responsibility</a>
              </li>
              <li>
                <a href="#">History</a>
              </li>
              <li>
                <a href="#">Investor Relations</a>
              </li>
              <li>
                <a href="#">Leadership</a>
              </li>
            </ul>
            <div className="footer__bottom-wrapper">
              <ul className="footer__notice">
                <li>
                  <a href={this.state.gitHub}>© 2019 Internship</a>
                </li>
                <li>
                  <a href="#">Terms of Use</a>
                </li>
                <li>
                  <a href="#">Cookie Notice</a>
                </li>
                <li>
                  By template:{' '}
                  <a href={this.state.linkToDesign} target="blank">
                    <i className="fab fa-dribbble" aria-hidden="true"></i>
                  </a>
                </li>
                <li>Developed in July 2019 by {this.state.developer}</li>
              </ul>
              <ul className="footer__social">
                <li>
                  <a href="#" target="blank">
                    <i className="fab fa-instagram" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i className="fab fa-twitter" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i className="fab fa-linkedin" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i className="fab fa-facebook" aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i className="fab fa-youtube " aria-hidden="true"></i>
                  </a>
                </li>
                <li>
                  <a href="#" target="blank">
                    <i className="fa fa-rss" aria-hidden="true"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </section>
    );
  }
}

ReactDOM.render(<CaseStudy />, document.getElementById('root'));
