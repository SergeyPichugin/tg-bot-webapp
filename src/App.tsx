import React, {useEffect} from 'react';
import './App.css';
// @ts-ignore
const tg = window.Telegram.WebApp;
function App() {

    useEffect(() => {
        tg.ready();
    }, [])

    const onClone = () => {
        tg.close();
    }

  return (
    <div className="App">
      App work1
        <button onClick={onClone}>Закрыть</button>
    </div>
  );
}

export default App;
