import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo } from "../features/todo/todoSlice";
import styled from "styled-components";

const TodoContainer = styled.div`
  margin: 20px;
  padding: 20px;
  border: 2px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  width: 95%;
`;

const TodoList = styled.ul`
  list-style: none;
  padding: 0;
`;

const TodoItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;

const TodoText = styled.span`
  font-size: 16px;
`;

const RemoveButton = styled.button`
  background-color: #ff4d4d;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 5px 10px;
  cursor: pointer;

  &:hover {
    background-color: #ff1a1a;
  }
`;

const Todos = () => {
  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  return (
    <TodoContainer>
      <h1>Todo's</h1>
      <TodoList>
        {todos.length > 0 ? (
          todos.map((elm) => (
            <TodoItem key={elm.id}>
              <TodoText>{elm.text}</TodoText>
              <RemoveButton onClick={() => dispatch(removeTodo(elm.id))}>
                X
              </RemoveButton>
            </TodoItem>
          ))
        ) : (
          <li>No todos</li>
        )}
      </TodoList>
    </TodoContainer>
  );
};

export default Todos;
