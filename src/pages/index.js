import Acomplishments from '../components/Acomplishments/Acomplishments';
import BgAnimation from '../components/BackgrooundAnimation/BackgroundAnimation';
import Hero from '../components/Hero/Hero';
import Projects from '../components/Projects/Projects';
import Technologies from '../components/Technologies/Technologies';
import Timeline from '../components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import GitHubCalendar from '../components/GitHubCalendar/GitHubCalendar';

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Timeline />
      <Projects />
      <Technologies />
      {/* <GitHubCalendar username="jaiphookan20" year={new Date().getFullYear()} />x */}
      {/* <GitHubCalendar/> */}
      {/* <Acomplishments /> */}
    </Layout>
  );
};

export default Home;
