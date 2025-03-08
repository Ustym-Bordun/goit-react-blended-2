import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import Text from '../components/Text/Text';
import Form from '../components/Form/Form';
import TodoList from '../components/TodoList/TodoList';
import EditForm from '../components/EditForm/EditForm';

const Todos = () => {
  const [searchedQuery, setSearchedQuery] = useState('');

  const handleSubmit = inputValue => {
    addNewTodo(inputValue);
    setSearchedQuery('');
  };

  const [todos, setTodos] = useState(() => {
    const savedTodos = JSON.parse(localStorage.getItem('saved todos'));

    return savedTodos !== null
      ? savedTodos
      : [
          { id: '1', text: 'Practice more' },
          { id: '2', text: 'Get all tasks done on time' },
        ];
  });

  useEffect(() => {
    localStorage.setItem('saved todos', JSON.stringify(todos));
  }, [todos]);

  const addNewTodo = textForNewTodo => {
    if (fintTodo(textForNewTodo)) {
      // console.log('fintTodo used');
      return;
    } else {
      // console.log('fintTodo not used');
    }

    const newTodo = { id: nanoid(5), text: textForNewTodo };
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  const removeTodo = deliteTodoId => {
    setTodos(prevTodos => prevTodos.filter(todo => todo.id !== deliteTodoId));
  };

  const [isEditing, setIsEditing] = useState(false);
  const [currentTodo, setCurrentTodo] = useState({});

  const handleEditTodo = todo => {
    setCurrentTodo(todo);
    setIsEditing(true);
  };

  const handleUpdateTodo = updatedTodoText => {
    setCurrentTodo({});
    setIsEditing(false);

    if (fintTodo(updatedTodoText)) {
      // console.log('fintTodo used');
      return;
    } else {
      // console.log('fintTodo not used');
    }

    setTodos(prevTodos => {
      // console.log(prevTodos.find(todo => todo.id === currentTodo.id));

      return prevTodos.map(todo =>
        todo.id === currentTodo.id ? { ...todo, text: updatedTodoText } : todo
      );
    });
  };

  const handleCancelUpdate = () => {
    setCurrentTodo({});
    setIsEditing(false);
  };

  const [editText, setEditText] = useState('');
  useEffect(() => {
    console.log('useEffect - currentTodo.text:', currentTodo.text);

    setEditText(currentTodo.text || '');
    // setEditText(currentTodo.text ? currentTodo.text : '');
  }, [currentTodo]);

  const fintTodo = newText => todos.some(todo => todo.text === newText);

  return (
    <>
      {isEditing ? (
        <EditForm
          updateTodo={handleUpdateTodo}
          cancelUpdate={handleCancelUpdate}
          editText={editText}
          onEditText={setEditText}
        />
      ) : (
        <Form
          value={searchedQuery}
          onSearch={setSearchedQuery}
          onSubmit={handleSubmit}
        />
      )}

      <TodoList
        todos={todos}
        onDelite={removeTodo}
        onEditTodo={handleEditTodo}
      />

      {todos.length === 0 && (
        <Text textAlign="center">There are no any todos ...</Text>
      )}
    </>
  );
};

export default Todos;
