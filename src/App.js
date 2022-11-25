import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RootLayout from './components/RootLayout';
import Home from './routes/Home';
import Book from './routes/Book';
import { useState } from 'react';


function App() {
  const [rdv, setRdv] = useState({
    rdv : [
    ]
  });

  return (
    <BrowserRouter>
      <RootLayout>
        <Routes>
            <Route path="/" element={<Home rdv={rdv} />} />
            <Route path="/book" element={<Book setRdv={setRdv} />} />
        </Routes>
      </RootLayout>
    </BrowserRouter>
  );
}

export default App;
