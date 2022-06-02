import Todo from "./Todo";
import { useTodos } from "./TodoProvider";
import styles from "./TodoList.module.css";

export default function TodoList() {
  const { todos } = useTodos();

  if (!todos.length)
    return (
      <h2 className={styles.crossHeadSticky}>
        今日の予定を付箋で貼りましょう!
      </h2>
    );

  const todosSortPriority = [...todos].sort((a, b) => {
    if (a.rating < b.rating) return 1;
    if (a.rating > b.rating) return -1;
    return 0;
  });

  const todoProgress = todosSortPriority.filter(
    (todo) => todo.progress === true && todo.done === false
  );

  const todoNormal = todosSortPriority.filter(
    (todo) => todo.progress === false && todo.done === false
  );

  const todoDone = todosSortPriority.filter((todo) => todo.done === true);

  return (
    <>
      <h2 className={styles.crossHeadSticky}>作業中の付箋</h2>
      <div className={styles.grid}>
        {todoProgress.map((todo) => (
          <Todo key={todo.taskNumber} {...todo} />
        ))}
      </div>
      <h2 className={styles.crossHeadSticky}>これから行う付箋</h2>
      <div className={styles.grid}>
        {todoNormal.map((todo) => (
          <Todo key={todo.taskNumber} {...todo} />
        ))}
      </div>
      <h2 className={styles.crossHeadSticky}>完了した付箋</h2>
      <div className={styles.grid}>
        {todoDone.map((todo) => (
          <Todo key={todo.taskNumber} {...todo} />
        ))}
      </div>
    </>
  );
}
