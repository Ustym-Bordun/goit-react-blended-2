import Grid from '../Grid/Grid';
import GridItem from '../GridItem/GridItem';
import TodoListItem from '../TodoListItem/TodoListItem';

const TodoList = ({ todos, onDelite, onEditTodo }) => {
  return (
    <Grid>
      {todos.map((todo, idx) => {
        return (
          <GridItem key={todo.id}>
            <TodoListItem
              todo={todo}
              idx={idx}
              onDelite={onDelite}
              onEditTodo={onEditTodo}
            />
          </GridItem>
        );
      })}
    </Grid>
  );
};

export default TodoList;
