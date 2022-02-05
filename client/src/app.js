import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HOME from './components/home'
import RECRUIT from './components/recruit'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<HOME />} />
        <Route path="/recruit" exact element={<RECRUIT />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
