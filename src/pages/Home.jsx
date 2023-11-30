import styled from "styled-components";
import Cart from "../components/Cart";

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const Home = () => {
  return (
    <Container>
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
      <Cart />
    </Container>
  );
};

export default Home;
