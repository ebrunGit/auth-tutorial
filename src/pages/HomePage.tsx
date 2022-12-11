import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const HomePage = () => {
  return <Container>Welcome to my website</Container>;
};

export default HomePage;
