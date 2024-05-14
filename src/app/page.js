import Hero from "@/components/hero/Hero";
import styles from "./page.module.css";
import './globals.css'
import Main from "@/components/main/Main";
export default function Home() {
  return (
      <div className="container">
        <main className={styles.main}>
        <Hero />
        <Main />
    </main>
      </div>
  );
}
