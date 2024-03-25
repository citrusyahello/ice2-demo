import { useEffect } from 'react';
import styles from './index.module.css';
import numStore from '../../store';

const ChildTest = function () {
  const [ num, numDispatcher ] = numStore.useModel('num');

  useEffect(() => {
    numDispatcher.initNum();
  }, []);

  return (
    <div className={styles.app}>
      <header>
        <p>
          子测试函数组件
        </p>
      </header>
      <main>

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

export default ChildTest;