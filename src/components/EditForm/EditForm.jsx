import { RiSaveLine } from 'react-icons/ri';
import { MdOutlineCancel } from 'react-icons/md';

import style from './EditForm.module.css';

const EditForm = ({ updateTodo, cancelUpdate, editText, onEditText }) => {
  return (
    <form
      className={style.form}
      onSubmit={evt => {
        evt.preventDefault();

        // console.log(evt.target.elements.text.value);
        updateTodo(evt.target.elements.text.value);
      }}
    >
      <button className={style.submitButton} type="submit">
        <RiSaveLine color="green" size="16px" />
      </button>

      <button className={style.editButton} type="button" onClick={cancelUpdate}>
        <MdOutlineCancel color="red" size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="text"
        required
        value={editText}
        onChange={evt => onEditText(evt.target.value)}
        autoFocus
      />
    </form>
  );
};

export default EditForm;
