import { useState } from 'react'

import './styles/App.module.scss'
import Aside from "./components/aside/Aside.jsx";
import Header from "./components/header/Header";
import AboutSection from "./components/aboutSection/AboutSection";
import ExpirienceSection from "./components/expirienceSection/ExpirienceSection.jsx";
import EdSection from "./components/edSection/EdSection.jsx";
import PortfolioSection from "./components/portfolioSection/PortfolioSection.jsx";
import ContactSection from "./components/contactSection/ContactSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import styles from './styles/App.module.scss';
function App() {

  return (
      <div>
         <Header/>
          <div className={styles.asideMain__box}>
              <Aside/>
              <main className={styles.sections}>
                  <AboutSection/>
                  <ExpirienceSection/>
                  <EdSection/>
                  <PortfolioSection/>
                  <ContactSection/>
              </main>
          </div>
          <Footer/>
      </div>
  )
}

export default App
