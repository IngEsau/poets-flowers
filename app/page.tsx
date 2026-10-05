import Hero from "@/components/sections/Hero";
import Meaning from "@/components/sections/Meaning";
import Collection from "@/components/sections/Collection";
import Gesture from "@/components/sections/Gesture";
import Quote from "@/components/sections/Quote";
import ContactCTA from "@/components/sections/ContactCTA";
import Footer from "@/components/layout/Footer";
import StoryMotion from "@/components/motion/StoryMotion";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.page} id="home">
      <Hero />
      <Meaning />
      <Collection />
      <Gesture />
      <Quote />
      <ContactCTA />
      <Footer />
      <StoryMotion />
    </main>
  );
}
