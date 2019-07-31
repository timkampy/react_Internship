import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

class CaseStudy extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            developer: 'Anna Korchevska',
            gitHub: 'https://github.com/timkampy/react_Internship',
            linkToDesign: 'https://dribbble.com/shots/6141581-The-Financial-Future-is-Female'
        }
    }


render() {
    return (

        <section className="container">

        <div className="top_navbar">
            <a href="#lesson1">Lesson 1</a>
            <a href="#lesson2">Lesson 2</a>
            <a href="#lesson3">Lesson 3</a>
            <a href="#" className="nav_right">Investor Relations</a>
            <a href="#" className="nav_right">English ∨</a>
            <a href="#" className="nav_right">Support</a>
        </div>

        <div className="middle_navbar top_navbar">
            <a href="#" id="logo">Internship</a>
            <a href="#" className="nav_right"> <i className="fa fa-search nav_right"></i></a>
            <a href="#" className="nav_right">Careers</a>
            <a href="#" className="nav_right">Research & Insights</a>
            <a href="#" className="nav_right">Capabilities</a>
            <a href="#" className="nav_right">Who We Are</a>

        </div>

        <div id="header" className="header">
            <h2>The Financial <br/> Future is</h2>
            <h1>Female</h1>
            <p>
                Women are transforming financial <br/> markets and economies across the globe. <br/>Their risk tolerance, confidence, and <br/> willingness to invest will impact our world<br/>for years to come.
            </p>
            <a href='#' className="viewMoreLink">View Full Report ></a>
        </div>

        <div className="row">
            <div className="side">
                <h2>About Me</h2>
                <h3>Anna Korchevska</h3>
                <h5>Photo of me:</h5>
                <div className="imageWrapper"></div>

                <p>Some text about me</p>
                <a href={this.state.gitHub}><i className="fab fa-github"></i></a>

                <h3>More Text</h3>
                <p>Lorem ipsum dolor sit ame.</p>
                <div className="fakeimg" >Image</div><br/>
                <div className="fakeimg" >Image</div><br/>
                <div className="fakeimg" >Image</div>
            </div>
        </div>

            <div className="main">

                <h2 id="lesson1">Lesson 1</h2>
                <p>
                    <strong>Тема:</strong> git, node, npm <br/>
                    <strong>Цель:</strong> изучить базовые функции git, node, npm. Подготовить к дальнейшей работе систему. <br/>
                    <strong>Обсуждаемый материал:</strong> <br/>
                </p>
                <ol>
                    <li>Что такое система контроля версий и зачем она нужна </li>
                    <li>Git</li>
                    <li>checkout, add, commit, pull, push</li>
                    <li>Основы ветвления и слияния</li>
                    <li>что такое nodejs, зачем он нужен и как устанавливать</li>
                    <li>Что такое менеджер пакетов, установка npm</li>
                </ol>
                <p><strong>Задание:</strong> установить git, node, npm. Создать аккаунт на <a href="https://github.com/" target="_blank" rel="noopener noreferrer">github</a> и публичный репозиторий для проекта. Клонировать из репозитория проект, сделать любые изменения в нем сделать коммит и запушить изменения.
                </p>
                <div className="fakeimg bigImg">Image</div>

                <h2 id="lesson2">Lesson 2</h2>
                <div>
                    <strong>Тема:</strong> основы html css <br/>
                    <strong>Цель:</strong> определить уровень умения верстки <br/>
                    <strong>Обсуждаемый материал:</strong> <br/>
                    <ol>
                        <li>Html: теги, структура html страницы, блочные и строчные элементы, списки, таблицы, атрибуты, текст, якоря, ссылки, <a href="https://validator.w3.org/">w3c</a> валидация</li>
                        <li>Css: стили, классы, идентификаторы, селекторы, псевдоклассы, псевдоэлементы</li>
                    </ol>
                </div>
                    <p><strong>Задание:</strong> создать простой шаблон страницы для дальнейшей работы. Страница должна содержать хедер, футер, блок с коротким описанием проекта и элементы из раздела Обсуждаемый материал этого урока. На странице должны быть: имя и фамилия автора, ссылка на github аккаунт, ссылка на оригинал дизайна. Страница должна проходить валидацию на w3c.
                    </p>

                    <h3> Useful links </h3>

                    <h3>HTML</h3>
                    <ul>
                        <li><a href="https://medium.com/@blondiebytes/how-to-create-interactive-websites-with-javascript-627a6d998fed" target="_blank" rel="noopener noreferrer">How to Create Interactive Websites with JavaScript</a></li>
                        <li><a href="http://htmlbook.ru/samhtml" target="_blank" rel="noopener noreferrer">Самоучитель HTML4</a></li>
                        <li><a href="http://htmlbook.ru/samhtml5" target="_blank" rel="noopener noreferrer">Самоучитель HTML5</a></li>
                    </ul>

                    <h3>CSS</h3>
                    <ul>
                        <li><a href="http://htmlbook.ru/samcss" target="_blank" rel="noopener noreferrer">Самоучитель CSS</a></li>
                        <li><a href="http://www.wisdomweb.ru/CSS3/index.php" target="_blank" rel="noopener noreferrer">Что такое CSS3?</a></li>
                        <li><a href="https://www.youtube.com/watch?v=NkmZl1Yy94Q&list=PLY4rE9dstrJzdkXYQXpZA0voVgB_0RJ_q" target="_blank" rel="noopener noreferrer">Video course</a></li>
                    </ul>

                    <h3>JavaScript</h3>
                    <ul>
                        <li><a href="https://learn.javascript.ru/" target="_blank" rel="noopener noreferrer">Современный учебник JavaScript</a></li>
                        <li><a href="https://www.youtube.com/watch?v=n0sPFaLsNeI&list=PLY4rE9dstrJymG1GyPLgOKsJNq9r-p6pX" target="_blank" rel="noopener noreferrer">Video course</a></li>
                    </ul>

                    <h2 id="lesson3">Lesson 3</h2>
                    <strong>Тема:</strong> основы создания проектов на react <br/>
                    <strong>Цель:</strong> ознакомится с node и npm, получить базовые понятия о том что такое react, развернуть первый проект с помощью react cli <br/>
                    <strong>Обсуждаемый материал:</strong> <br/>
                    <ol>
                        <li>Nodejs: основы, установка</li>
                        <li>Npm: основы, установка, что такое библиотека и зависимость</li>
                        <li>React: вводная информация, jsx, компоненты</li>
                        <ul><li>React cli: установка, запуск проекта, hot reloading</li></ul>
                    </ol>
                    <p><strong>Задание:</strong>перенести сверстанную страницу в react компоненту</p>

                    <h3>Useful links</h3>

                    <h3>React</h3>
                    <ul>
                        <li><a href="https://habr.com/ru/post/249107/" target="_blank" rel="noopener noreferrer">ReactJS for stupid people</a></li>
                        <li><a href="https://habr.com/ru/company/ruvds/blog/343022/" target="_blank" rel="noopener noreferrer">Основы React: всё, что нужно знать для начала работы</a></li>
                        <li><a href="https://reactjs.org/docs/create-a-new-react-app.html" rel="noopener noreferrer">Create a New React App</a></li>
                    </ul>

                    <h3>Node js</h3>
                    <ul>
                        <li><a href="https://habr.com/ru/post/420123/" target="_blank" rel="noopener noreferrer">Чем на самом деле является Node.js?</a></li>
                        <li><a href="https://learn.javascript.ru/screencast/nodejs" target="_blank" rel="noopener noreferrer">18 скринкастов из учебника Javascript.ru</a></li>
                    </ul>
                    <h3>Npm</h3>
                    <ul>
                        <li><a href="https://habr.com/ru/post/243335/" target="_blank" rel="noopener noreferrer">npm для простых смертных</a></li>
                    </ul>
            </div>

            <footer className="footer">
                <div className="footer__content">
                    <ul className="footer__links">
                        <li><a href="#">Our Purpose &amp; Values</a></li>
                        <li><a href="#">Press</a></li>
                        <li><a href="#">Ventures</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                    <ul className="footer__secondary-links">
                        <li><a href="#">Careers</a></li>
                        <li><a href="#">Corporate Responsibility</a></li>
                        <li><a href="#">History</a></li>
                        <li><a href="#">Investor Relations</a></li>
                        <li><a href="#">Leadership</a></li>
                    </ul>
                <div className="footer__bottom-wrapper">
                    <ul className="footer__social">
                        <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin-square" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-youtube " aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
                    </ul>
                    <ul className="footer__notice">
                        <li>© 2019 Internship</li>
                        <li><a href="#">Terms of Use</a></li>
                        <li><a href="#">Cookie Notice</a></li>
                        <li><p>By template: <a href={this.state.linkToDesign}><i className="fab fa-dribbble" aria-hidden="true"></i></a></p></li>
                        <li><p>Developed in July 2019 by {this.state.developer}</p></li>
                    </ul>
                </div>
                </div>
            </footer>
        </section>
    )}
        }

ReactDOM.render(<CaseStudy/>, document.getElementById('root'));