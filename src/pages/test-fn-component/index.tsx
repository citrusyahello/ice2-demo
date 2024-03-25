import { useEffect } from 'react';
import styles from './index.module.css';
import { useCount } from './store/zustand';
import numStore from './store';
import ChildTest from './components/ChildTest/ChildTest';

const Home = function () {
  const { count, initCount, setCount } = useCount();
  const [ num, numDispatcher ] = numStore.useModel('num');

  useEffect(() => {
    initCount();
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
        <p>zustand实现</p>
        <button className={styles.button} type="button" onClick={setCount}>
          👍🏻 {count}
        </button>

        <p style={{marginTop: 20}}>ice实现</p>
        <button className={styles.button} type="button" onClick={numDispatcher.setNum}>
          👍🏻 {num}
        </button>

        <ChildTest/>
      </main>
    </div>
  );
}

export default Home;