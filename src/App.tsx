import React, {useEffect} from 'react';
import './App.css';
import {useTelegram} from "./hooks/useTelegram";
import Header from "./components/Header";
import {Route, Routes} from "react-router-dom"
import ProductList from "./components/ProductList";
import Form from './components/Form';

function App() {

    const {tg, onToogleButton} = useTelegram()

    useEffect(() => {
        tg.ready();
    }, [])

  return (
        <div className="App">
            <Header/>
            <Routes>
                <Route index element={<ProductList/>}/>
                <Route path={'form'} element={<Form/>}/>
            </Routes>
        </div>
  );
}

export default App;
