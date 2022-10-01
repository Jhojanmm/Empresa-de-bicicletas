import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './Bikes'
import Info from './InfoBikes'

function Address() {
  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>}></Route>
          <Route path='/infoBikes/:id' element={<Info></Info>}></Route>

        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default Address;