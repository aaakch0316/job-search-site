import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HOME from './components/home/home'
import RECRUIT from './components/recruit/recruit'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/recruit">Recruit</Link>
      </nav>
      <Routes>
        <Route path="/" exact element={<HOME />} />
        <Route path="/recruit" exact element={<RECRUIT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
