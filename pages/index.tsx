import Typical from "react-typical";
import styled from "styled-components";
import { urlFor } from "../src/util/utils";

const Root = styled.div`
  text-align: center;
`;

const AppHeader = styled.div`
  background-color: #000000;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(20px + 1vmin);
  color: white;
`;

const AppLogo = styled.img.attrs({
  alt: "logo",
  src: urlFor("/instadeeds.png"),
})`
  height: 5vmin;
  pointer-events: none;

  @media (prefers-reduced-motion: no-preference) {
    height: 15vmin;
    border-radius: 50%;
    margin-bottom: 30px;
    border: 1vh solid rgb(77, 109, 62);
    /* animation: App-logo-spin 10s infinite linear; */
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

const ActionsMattersText = () => <h2>Actions matters</h2>;

const AnimatedTyping = () => (
  <p>
    {" "}
    Stand up for{" "}
    <Typical
      loop={Infinity}
      wrapper="b"
      steps={[
        "peace",
        4000,
        "equity",
        2000,
        "education 📖",
        2000,
        "water ",
        1500,
        "food",
        1500,
        "health",
        1500,
        "instadeeds 🤍",
        4000,
        "💚",
        60000,
      ]}
    />
  </p>
);

const Contents = () => (
  <Root>
    <AppHeader>
      <ActionsMattersText />
      <AppLogo />
      <AnimatedTyping />
    </AppHeader>
  </Root>
);

const Home = () => (
  <main>
    <Contents />
  </main>
);

export default Home;
