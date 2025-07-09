import Home from './Pages/Home.jsx';
import {Routes,Route} from 'react-router-dom';
import Favourites from './Pages/Favourites.jsx';
import NavBar from './Components/NavBar.jsx';
import { MovieProvider } from './contexts/MovieContext.jsx';
import './CSS/App.css';
function App() {
     return (
      <MovieProvider>
        <NavBar/>
        <main className='main-content'>
         <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/favourites" element={<Favourites/>}/>
          </Routes>
        </main>
      </MovieProvider>
   );
   }
export default App;
