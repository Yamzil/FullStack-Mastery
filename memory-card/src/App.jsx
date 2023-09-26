import {BrowserRouter, Routes, Route} from 'react-router-dom';
import LoadingPage from './Loadingpage';
import GameCard from './cardgame';
import './index.css';


const App = () => {

    return (  
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LoadingPage />} />
            <Route path="game" element={<GameCard />} />
        </Routes>
        </BrowserRouter>
    );
}
 
export default App;