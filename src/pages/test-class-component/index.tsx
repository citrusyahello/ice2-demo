import React from 'react';
import styles from './index.module.css';
import { useCount, COUNT } from '../test-fn-component/store/zustand';
import numStore from './store';

class Home extends React.PureComponent<any, any> {

  state: {
    count: number
  };
  countSubscribe: any;

  constructor(props: any) {
    super(props);
    this.state = {
      count: useCount.getState().count
    };
    this.countSubscribe = null;
  }

  componentDidMount(): void {
    this.countSubscribe = useCount.subscribe(this._updateCount);
    
    const [state, numDispatcher] = this.props.num;
    numDispatcher.initNum();
  }

  componentWillUnmount(): void {
    this.countSubscribe && this.countSubscribe();
  }

  _updateCount = (state: COUNT, preState: COUNT) => {
    this.setState({
      count: state.count
    });
  };

  _add = () => {
    const { count } = this.state;
    useCount.setState({ count: count + 1 });
  };
  
  render () {
    const { count } = this.state;
    const [num, numDispatcher] = this.props.num;
    return (
      <div className={styles.app}>
        <header>
          <p>
            测试类组件
          </p>
        </header>
        <main>
          <p>zustand实现</p>
          <button className={styles.button} type="button" onClick={this._add}>
            👍🏻 {count}
          </button>

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
    )
  }
}

export default numStore.withModel('num')(Home);
