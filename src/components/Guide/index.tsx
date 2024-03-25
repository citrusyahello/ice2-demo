import styles from './index.module.css';
import { history } from 'ice';

const Guide = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title} onClick={() => {
        // history?.push('/test-class-component')
        history?.push('/test-fn-component')
      }}>Welcome to icejs!</h2>

      <p className={styles.description} onClick={() => history?.push('/test-class-component')}>This is a awesome project, enjoy it!</p>

      <div className={styles.action}>
        <a
          href="https://ice.work/docs/guide/about"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            marginRight: 20,
          }}
        >
          使用文档
        </a>
        <a
          href="https://github.com/ice-lab/icejs"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  );
};

export default Guide;
