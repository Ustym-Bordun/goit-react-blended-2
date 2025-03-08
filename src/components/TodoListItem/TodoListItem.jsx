import { RiDeleteBinLine, RiEdit2Line } from 'react-icons/ri';
import Text from '../Text/Text';

import style from './TodoListItem.module.css';

const TodoListItem = ({ todo: { text, id }, idx, onDelite, onEditTodo }) => {
  // console.log(idx);
  return (
    <div className={style.box}>
      <Text textAlign="center" marginBottom="20">
        TODO #{idx + 1}
      </Text>
      <Text>{text}</Text>

      <button
        className={style.deleteButton}
        type="button"
        onClick={() => {
          onDelite(id);
        }}
      >
        <RiDeleteBinLine size={24} />
      </button>

      <button
        className={style.editButton}
        type="button"
        onClick={() => {
          onEditTodo({ text, id });
        }}
      >
        <RiEdit2Line size={24} />
      </button>
    </div>
  );
};

export default TodoListItem;
