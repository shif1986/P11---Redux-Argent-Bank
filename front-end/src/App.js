import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import User from "./pages/User/User";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './assets/css/main.css';
import configureStore from "./redux/store";
import { Provider } from "react-redux";


const store = configureStore();

function App() {
    return (
        <Provider store={store}>
        <Router>
            <Header/>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/user' element={<User/>}/>
                </Routes>
            </main>
            <Footer/>
        </Router>
        </Provider>
    );
}

export default App;
