import { useState } from 'react'

import './App.scss'
import Aside from "./components/aside/Aside.jsx";
import Header from "./components/header/Header";
import AboutSection from "./components/aboutSection/AboutSection";
function App() {

  return (
      <div className="article">
         <Header/>
          <div className="aside-main__box">
              <Aside/>
              <main className="main">
                  <AboutSection/>
                  <section className="about-section">
                      <h3 className="about-section__name title_text">About me</h3>
                      <div className="about-section__text_box">
                          <p className="simple_text hello_text">
                              Hello! I'm Egor Ostrovskiy. This is my first CV. I'm a junior front end developer.
                              I have no practical skills in real work, but my experience include ...
                              I studied and worked as an engineer in the construction industry.
                          </p>
                      </div>
                      <div className="about-section__inform">
                          <div className="about-section__box">
                              <h4 className="about-box__name">Personal information</h4>
                              <table className="about-box__table">
                                  <tr>
                                      <td className="left_cell">FULL NAME</td>
                                      <td className="right_cell">Egor Ostrovskiy</td>
                                  </tr>
                                  <tr>
                                      <td className="left_cell">D.O.B.</td>
                                      <td className="right_cell">
                                          <time>08 march 1994</time>
                                      </td>
                                  </tr>
                                  <tr>
                                      <td className="left_cell">ADDRESS</td>
                                      <td className="right_cell">220047, Belarus, Minsk, Ilimskaya 17, 74</td>
                                  </tr>
                                  <tr>
                                      <td className="left_cell">E-MAIL</td>
                                      <td className="right_cell">astrouski1994@gmail.com</td>
                                  </tr>
                                  <tr>
                                      <td className="left_cell">PHONE</td>
                                      <td className="right_cell">+375-44-597-89-08</td>
                                  </tr>
                              </table>
                          </div>
                          <div className="about-section__list">
                              <h4 className="about-box__name">Languages</h4>
                              <div className="about-list__box">
                                  <ul className="about-list">
                                      <li>English (B1/B2)</li>
                                      <li>Russian (native)</li>
                                      <li>Belorussian (native)</li>
                                  </ul>
                              </div>
                          </div>
                      </div>

                  </section>
                  <section className="experience-section">
                      <h3 className="experience-section__name title_text">Work experience</h3>
                      <div className="experience-section__box">
                          <h4 className="experience-section__timeframe">2013-2018</h4>
                          <p className="abbr-style"><abbr title="Public Joint Stock Company 'Minskpromstroy'">JSC
                              'MPS'</abbr></p>
                          <p className="simple_text">
                              I worked in a general contractor construction company as a foreman,
                              after foreman I held the position of a leading engineer.
                          </p>
                      </div>
                      <div className="experience-section__box">
                          <h4 className="experience-section__timeframe">2018-2024</h4>
                          <p><abbr className="abbr-style"
                                   title="Foreign Limited Liability Company 'PERI-formwork and scaffolding'">FLLC
                              'PERI'</abbr></p>
                          <p className="simple_text">
                              I worked in a foreign family company "PERI"
                              as a warehouse employee and warehouse manager (construction sector).
                          </p>
                      </div>
                      <div className="experience-section__box">
                          <h4 className="experience-section__timeframe">2023-2024</h4>
                          <p className="simple_text">I studied html/css/nodeJS and prepared a portfolio</p>
                      </div>
                  </section>
                  <section className="ed-section">
                      <h3 className="ed-section__name title_text">Education</h3>
                      <div>
                          <h4 className="ed-section__timeframe">2009-2013</h4>
                          <p className="simple_text">Сonstruction technician of industrial and civil engineering
                              (full-time education)</p>
                          <p><abbr className="abbr-style"
                                   title="Educational Institution 'Minsk City College of Architecture and Civil Engineering'">EI'MGASK'</abbr>
                          </p>
                      </div>
                      <div>
                          <h4 className="ed-section__timeframe">2013-2019</h4>
                          <p className="simple_text">Сivil engineer of highways and airfields (extramural education)</p>
                          <p><abbr className="abbr-style" title="Belarusian National Technical University'">BNTU</abbr>
                          </p>
                      </div>
                      <div>
                          <h4 className="ed-section__timeframe">2023-</h4>
                          <p className="simple_text">Frontend developer</p>
                          <p className="simple_text">Training with a mentor</p>
                      </div>
                  </section>
                  <section className="portfolio-section">
                      <h3 className="portfolio-section__name title_text">Portfolio</h3>
                      <div className="portfolio-section__pic-box">
                          <div className="portfolio-section__pic">
                          </div>
                          <div className="portfolio-section__pic">
                          </div>
                          <div className="portfolio-section__pic">
                          </div>
                          <div className="portfolio-section__pic">
                          </div>
                      </div>
                  </section>
                  <section className="contact-section">
                      <h3 className="contact-section__name title_text">Contact me</h3>
                      <div className="contact-section__form">
                          <h4 className="contact-section__header">Please, don't hesitate to contact me</h4>
                          <form>
                              <div className="contact-form__box">
                                  <label className="contact-form__input"> Your Name (required)
                                      <input type="text" placeholder="Enter Your Name"/>
                                  </label>
                              </div>
                              <div className="contact-form__box">
                                  <label className="contact-form__input"> Your Email (required)
                                      <input type="email" placeholder="Enter Your Email"/>
                                  </label>
                              </div>
                              <div className="contact-form__box">
                                  <label className="contact-form__input"> Subject
                                      <input id="subject" type="text"/>
                                  </label>
                              </div>
                              <div className="contact-form__box">
                                  <label className="contact-form__textarea"> Your message
                                      <textarea></textarea>
                                  </label>
                              </div>
                              <div className="contact-form__box">
                                  <button onClick="validateForm()" id="contactButton">
                                      SEND
                                  </button>
                              </div>
                          </form>
                      </div>
                  </section>
              </main>
          </div>
          <footer className="footer">
              <p className="footer-text">All rights reserved 2023</p>
          </footer>
      </div>
  )
}

export default App
