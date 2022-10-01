import type { NextPage } from "next";
import Head from "next/head";
import styled from "styled-components";


const StyledTitle =  styled.h1``
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <StyledTitle>Hola</StyledTitle>
      </main>
    </>
  );
};

export default Home;
