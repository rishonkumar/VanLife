import ReactDOM from 'react-dom/client'
import Home from './pages/Home.jsx'
import './index.css'
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import About from "./pages/About.jsx";


// eslint-disable-next-line react-refresh/only-export-components
function App() {
    return (
        <BrowserRouter>
            <header>
                <Link to="/">#VANLIFE</Link>
                <nav>
                    <Link to="/about">About</Link>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/about" element={<About />}/>
            </Routes>
        </BrowserRouter>
    )

}

ReactDOM
    .createRoot(document.getElementById('root'))
    .render(<App />);
