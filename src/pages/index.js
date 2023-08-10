import Image from "next/image";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Head from "next/head";

const popps = Poppins({
  subsets: ["devanagari"],
  weight: ["200", "400", "600"],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Speakers</title>
      </Head>
      <main className={`${popps.className}`}>
        <div>
          <Header />
        </div>
        <h1>This is the Homepage</h1>
      </main>
    </>
  );
}
