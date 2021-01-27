import styles from 'App.module.css';
import { useSelector } from 'react-redux';

function App() {
  const store = useSelector(store => store)
  console.log(store);
  return (
    <div className={styles.wrapper}>
    sdfsdfdsf
    </div>
  );
}

export default App;
