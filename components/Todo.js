import Done from "./Done";
import Progress from "./Progress";
import StarRating from "./StarRating";
import { FaTrash } from "react-icons/fa";
import { IoColorPaletteOutline } from "react-icons/io5";
import { useInput } from "./hooks";
import { useTodos } from "./TodoProvider";
import styles from "./Todo.module.css";

export default function Todo({
  taskNumber,
  taskContents,
  rating,
  color,
  progress,
  done,
}) {
  const [colorProps, resetColor] = useInput("");

  const { rateTodo, colorTodo, progressTodo, doneTodo, removeTodo } =
    useTodos();

  const changeColor = {
    color: color,
    borderLeftColor: color,
  };

  const submit = (e) => {
    e.preventDefault();
    colorTodo(taskNumber, colorProps.value);
    resetColor();
  };

  return (
    <section className={styles.baseSticky} style={changeColor}>
      <h3 className={`${styles.sticky} ${styles.subHead}`} style={changeColor}>
        {taskContents}
      </h3>
      <div className={styles.flex}>
        <div
          className={`${styles.sticky} ${styles.subHead} `}
          style={changeColor}
        >
          <StarRating
            selectedStars={rating}
            onRate={(rating) => rateTodo(taskNumber, rating)}
          />
        </div>
        <div className={`${styles.flex} ${styles.subHead}`}>
          <div
            className={`${styles.sticky} ${styles.marginRight}`}
            style={changeColor}
          >
            <Progress
              selected={progress}
              onSelect={() => progressTodo(taskNumber)}
            />
          </div>
          <div className={styles.sticky} style={changeColor}>
            <Done selected={done} onSelect={() => doneTodo(taskNumber)} />
          </div>
        </div>
      </div>
      <div className={`${styles.flex} ${styles.marginTop}`}>
        <form onSubmit={submit} className={styles.sticky} style={changeColor}>
          <input
            {...colorProps}
            type="color"
            placeholder="付箋の色を選択"
            required
            className={styles.marginRight}
          />
          <button>
            <IoColorPaletteOutline />
          </button>
        </form>
        <div className={styles.sticky} style={changeColor}>
          <button onClick={() => removeTodo(taskNumber)}>
            <FaTrash />
          </button>
        </div>
      </div>
    </section>
  );
}
