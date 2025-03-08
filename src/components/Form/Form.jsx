import { FiSearch } from 'react-icons/fi';

import style from './Form.module.css';

const Form = ({ value, onSearch, onSubmit }) => {
  return (
    <form
      className={style.form}
      onSubmit={evt => {
        evt.preventDefault();

        if (!value) {
          console.log(`Searched query can't be empty`);
          return;
        }

        onSubmit(evt.target.search.value);
      }}
    >
      <button className={style.button} type="submit">
        <FiSearch size="16px" />
      </button>

      <input
        className={style.input}
        placeholder="What do you want to write?"
        name="search"
        autoFocus
        value={value}
        onChange={evt => {
          // console.log(evt.target.value);
          onSearch(evt.target.value);
        }}
      />
    </form>
  );
};

export default Form;
