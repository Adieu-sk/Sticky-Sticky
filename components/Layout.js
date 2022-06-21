import Head from "next/head";
import styles from "./Layout.module.css";
import Link from "next/link";

export const title = "付箋×付箋";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="./apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="./favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="./favicon-16x16.png"
        />
        <link rel="manifest" href="./site.webmanifest" />
        <meta
          name="description"
          content="付箋に付箋を重ねて貼る!Todoアプリです!!"
        />
      </Head>

      <header>
        {home ? (
          <>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.endingLink}>
              <Link href="/ending">
                <a>継続的なご利用を終了する場合は…</a>
              </Link>
            </h2>
          </>
        ) : (
          <>
            <h1 className={styles.title}>データ消去のお願い</h1>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <h2 className={styles.backToHome}>
          <Link href="/">
            <a>← 付箋×付箋 に戻る</a>
          </Link>
        </h2>
      )}
    </div>
  );
}
