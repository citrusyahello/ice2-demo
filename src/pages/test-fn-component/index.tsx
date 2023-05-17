import { useEffect } from 'react';
import styles from './index.module.css';
// import { useCount } from './store/zustand';
import numStore from '@/store';

const Home = function () {
  // const { count, initCount, setCount } = useCount();
  const [ num, numDispatcher ] = numStore.useModel('num');

  useEffect(() => {
    // initCount();
    numDispatcher.initNum();
  }, []);

  return (
    <div className={styles.app}>
      <header>
        <p>
          测试函数组件
        </p>
      </header>
      <main>
        {/* <p>zustand实现</p>
        <button className={styles.button} type="button" onClick={setCount}>
          👍🏻 {count}
        </button> */}

        <p style={{marginTop: 20}}>ice实现</p>
        <button className={styles.button} type="button" onClick={numDispatcher.setNum}>
          👍🏻 {num}
        </button>

        <p>
          <a
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn React
          </a>
          {' | '}
          <a
            href="https://v3.ice.work/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            Learn ice.js
          </a>
        </p>
      </main>
    </div>
  );
}

export default Home;