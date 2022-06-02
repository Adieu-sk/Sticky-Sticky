import { useInput } from "./hooks";
import { useTodos } from "./TodoProvider";
import { MdOutlineStickyNote2 } from "react-icons/md";
import styles from "./AddTodoForm.module.css";

export default function AddTodoForm() {
  const [inputProps, resetInput] = useInput("");
  const { addTodo } = useTodos();

  const submit = (e) => {
    e.preventDefault();
    addTodo(inputProps.value);
    resetInput();
  };

  return (
    <>
      <form onSubmit={submit} className={styles.addTodoForm}>
        <input
          {...inputProps}
          type="text"
          placeholder="予定を付箋に書いてください"
          required
          className={`${styles.input} ${styles.padding}`}
        />
        <button className={styles.padding}>
          <MdOutlineStickyNote2 />
        </button>
      </form>
    </>
  );
}
