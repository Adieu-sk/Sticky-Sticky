import { useState } from "react";
import Head from "next/head";
import Layout from "../components/Layout";
import styles from "../styles/ending.module.css";

export default function Ending() {
  const [ending, setEnding] = useState(true);

  const submit = (e) => {
    e.preventDefault();
    allClear();
    setEnding(!ending);
  };

  return (
    <>
      <Layout>
        <Head>
          <title>データ消去のお願い</title>
        </Head>
        {ending ? (
          <div className={styles.text}>
            <p>ボタンを押して保存していた付箋データを消去してください</p>
            <form onSubmit={submit}>
              <button className={styles.padding}>消去</button>
            </form>
          </div>
        ) : (
          <div className={styles.text}>
            <p>ご利用ありがとうございました!</p>
            <p>このままタブまたはブラウザを閉じてください</p>
          </div>
        )}
      </Layout>
    </>
  );
}

const allClear = () => {
  localStorage.removeItem("todo");
};
