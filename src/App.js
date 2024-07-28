import React from "react";
import Todos from "./Components/Todos";
import AddTodo from "./Components/AddTodos";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #f0f0f0;
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #333;
`;

const App = () => {
  return (
    <Container>
      <Title>Learn Redux Tool Kit:</Title>
      <AddTodo />
      <Todos />
    </Container>
  );
};

export default App;
