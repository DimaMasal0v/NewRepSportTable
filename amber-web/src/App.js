import React from 'react';
import './App.css';
import serviceIcon from './svg/ServiceIcon.svg';
import serviceIcon1 from './svg/ServiceIcon(1).svg';
import serviceIcon2 from './svg/ServiceIcon(2).svg';
import Logo from '../src/svg/trace.svg';
import Germ from '../src/svg/german-design-award.svg';
import Design from '../src/svg/a-design-award.svg';
import IfDesign from '../src/svg/if-design-award.svg';
import GoodDesign from '../src/svg/good-design-award.svg';
import Image from '../src/svg/Image.svg';
import ImageOne from '../src/svg/Image (1).svg';

const App = () => {
  return (
    <body>
    {/* <!-- Header --> */}
      <header class="header text-white">
        <div class="container-grid">
            <div class="menu__container">
              <img alt="IMAGE144" src={Logo} class="" />
              <div class="menu__mobile-btn" id="menuBtn">
                <div class="menu__burger"></div>
              </div>
              <div class="menu__overlay">
                <div class="menu__close-btn sm:text-8xl text-4xl" id="closeBtn">&times;</div>
                <div class="menu__content sm:text-8xl text-4xl">
                  <div class="menu__item">Главная</div>
                  <div class="menu__item">Результаты</div>
                  <div class="menu__item"><a href="./table.html">Таблица</a></div>
                  <div class="menu__item">О нас</div>
                </div>
              </div>
            </div>
          </div>
      </header>
      {/* Header Text */}
      <section class="subtitle relative">
          <div class="menu">
            <h1 class="menu__title font-bold uppercase text-center mb-1" id="table__title">
            Результаты соревнований
            </h1>
            <span class="menu__date" id="date-competition">
            17 Февраля 2023г.
            </span><br />
          </div>
      </section>
      {/* Awards-Section */}
      <section class='awards-section bg-gray-400 sm:h-32 h-72 w-full'>
        <div class='container-grid'>
          <div>
            <h3 class="select-text" id="awards-title">
              Награды
            </h3>
          </div>
          <div class="subtitle__block flex justify-center absolute left-36 sm:mt-6 xl:flex-no-wrap flex-col xl:grid grid-flow-col">
            <div class="subtitle__block-content">
              <img class="mr-3" src={Germ} alt=""/>
              <span class="sm:text-sm text-xs font-normal text-white mt-3">German Design Award<br />2021</span>
            </div>
            <div class="subtitle__block-content sm:mr-8 sm:ml-0 -ml-20 flex justify-start" id="award-container-2">
              <img class="mr-3" src={Design} alt="" id="award-img-2"/>
              <span class="sm:text-sm text-xs font-normal text-white mt-5" id="award-text-2">Gold A’ Design Award<br />2021</span>
            </div>
            <div class="subtitle__block-content sm:mr-8 sm:ml-0 -ml-20 flex justify-start" id="award-container-3">
              <img class="mr-3" src={IfDesign} alt="" id="award-img-3"/>
              <span class="sm:text-sm text-xs font-normal text-white mt-5" id="award-text-3">IF Design Award<br />2020</span>
            </div>
            <div class="subtitle__block-content sm:mr-8 sm:ml-0 -ml-20 flex justify-start" id="award-container-4">
              <img class="mr-3" src={GoodDesign} alt="" id="award-img-4"/>
              <span class="sm:text-sm text-xs font-normal text-white mt-5" id="award-text-4">Good Design Award<br />2019</span>
            </div>
          </div>
        </div>
      </section>
      {/* About US */}
      <section class="about relative sm:mb-0 mb-10">
          <div
            class="about-position sm:grid-cols-2 sm:grid-rows-none grid-cols-none grid-rows-1 sm:px-2 px-1">
            <div class="" id="about-us">
              <h5
                class="about-us-title uppercase text-yellow-500 sm:text-sm font-bold xl:text-2xl"
                id="about-us-title"
              > About Us</h5>
              <h6
                class="about-us-subtitle sm:text-6xl italic sm:normal font-normal text-3xl"
                id="about-us-subtitle"
              >We help to bring your dream home to reality</h6>
              <span class="" id="about-us-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. <br /> Optio ipsam atque cupiditate temporibus corporis vitae, laborum laboriosam laudantium iure eius nisi, doloremque labore necessitatibus asperiores ducimus deserunt numquam repellat ex.</span>
            </div>
            <div class="about-us__img flex justify-between sm:mr-32">
              <img
              class="sm:mb-10 sm:w-64 sm:h-96 w-32 h-60"
              src={Image}
              alt=""
            />
            <img
              class="sm:ma-5 ml-4 mt-15 sm:w-64 sm:h-96 w-32 h-60"
              src={ImageOne}
              alt=""
            />
            </div>
          </div>
        </section>
        {/* Number */}
        <section class='number'>
        <div class="container-grid">
            <span class="number__title xl:text-6xl sm:text-xs sm:flex hidden" id="clientsPercentage">100%</span>
            <span class="number__subtitle text-sm pt-2 sm:flex hidden" id="clientsText">SATISFITATION CLIENTS</span>
            <span class="number__title xl:text-6xl sm:text-xs sm:flex hidden" id="employeesNumber">250</span>
            <span class="number__subtitle text-sm pt-2 sm:flex hidden" id="employeesText">EMPLOYEES ON WORLDWIDE</span>
            <span class="number__title xl:text-6xl sm:text-xs sm:flex hidden" id="projectsCompleted">3469</span>
            <span class="number__subtitle text-sm pt-2 sm:flex hidden" id="projectsText">PROJECTS COMPLETED ON 60 COUNTRIES</span>
          </div>
        </section>
        {/* Block */}
        <section class='BlockItem'>
            <div class="container-grid">
              <div class="flex flex-row">
                <div class="BlockItem-block flex-shrink-0 w-2 border-black border-1 mx-4">
                  <img class="BlockItem__img pl-5 pt-5" src={serviceIcon} alt="" />
                  <h2 class="BlockItem__title mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
                    Architectural & Interior design
                  </h2>
                  <p class="BlockItem__subtitle text-lg font-normal ml-6 mr-6">
                    Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc,
                    molestie volutpat ipsum, ultricies.
                  </p>
                </div>
                <div class="BlockItem-block flex-shrink-0 w-64 border-black border-1 mx-4">
                  <img class="BlockItem__img pl-5 pt-5" src={serviceIcon1} alt="" />
                  <h2 class="BlockItem__title mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
                    Building Renovation
                  </h2>
                  <p class="BlockItem__subtitle text-lg font-normal ml-6 mr-6">
                    Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc,
                    molestie volutpat ipsum, ultricies.
                  </p>
                </div>
                <div class="BlockItem-block flex-shrink-0 w-64 border-black border-1 mx-4">
                  <img class="BlockItem__img pl-5 pt-5" src={serviceIcon2} alt="" />
                  <h2 class="BlockItem__title mt-10 ml-6 mr-6 sm:text-4xl text-2xl sm:font-normal font-medium">
                    Construciton Management
                  </h2>
                  <p class="BlockItem__subtitle text-lg font-normal ml-6 mr-6">
                    Non diam pretium tristique augue placerat dolor. Accumsan nibh nunc,
                    molestie volutpat ipsum, ultricies.
                  </p>
                </div>
              </div>
            </div>
        </section>
    </body>

  );
};

export default App;
