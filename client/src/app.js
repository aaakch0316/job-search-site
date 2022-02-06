import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HOME from './components/home/home'
import NavBar from './components/nav_bar/nav_bar';
import RECRUIT from './components/recruit/recruit'
import SearchHeader from './components/search_header/search_header'
function App() {
  return (
    <BrowserRouter>
      <SearchHeader />
      <NavBar Link={Link} />
      <Routes>
        <Route path="/" exact element={<HOME />} />
        <Route path="/recruit" exact element={<RECRUIT />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;

