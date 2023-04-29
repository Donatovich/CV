import './styles/App.module.scss'
import Aside from "./components/aside/Aside.jsx";
import Header from "./components/header/Header";
import AboutSection from "./components/aboutSection/AboutSection";
import ExperienceSection from "./components/experienceSection/ExperienceSection.jsx";
import EdSection from "./components/edSection/EdSection.jsx";
import PortfolioSection from "./components/portfolioSection/PortfolioSection.jsx";
import ContactSection from "./components/contactSection/ContactSection.jsx";
import Footer from "./components/footer/Footer.jsx";
import styles from './styles/App.module.scss';
import Layout from "./ui/layout/Layout.jsx";
import Container from "./ui/container/Container.jsx";
function App() {

  return (
      <Layout>
         <Header/>
          <div className={styles.asideMain__box}>
              <Aside/>
              <Container>
                  <AboutSection/>
                  <ExperienceSection/>
                  <EdSection/>
                  <PortfolioSection/>
                  <ContactSection/>
              </Container>
          </div>
          <Footer/>
      </Layout>
  )
}

export default App
