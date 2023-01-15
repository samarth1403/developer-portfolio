import Acomplishments from '../Components/Acomplishments/Acomplishments';
import BgAnimation from '../Components/BackgroundAnimation/BackgroundAnimation';
import Hero from '../Components/Hero/Hero';
import Projects from '../Components/Projects/Projects';
import Technologies from '../Components/Technologies/Technologies';
import Timeline from '../Components/TimeLine/TimeLine';
import { Layout } from '../layout/Layout';
import { Section } from '../styles/GlobalComponents';
import dynamic from "next/dynamic";


const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />
        <BgAnimation />
      </Section>
      <Projects />
      <Technologies />
      <Timeline />
      <Acomplishments />
    </Layout>
  );
};

export default dynamic (() => Promise.resolve(Home), {ssr: false})

