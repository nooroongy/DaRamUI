import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Mainmenu from './components/mainPage/MainMenu'
import ButtonPage from './Routes/ButtonPage';
import InputPage from './Routes/InputPage';
import SelectPage from './Routes/SelectPage';
import TogglePage from './Routes/TogglePage';
import './css/common.css'
import CardPage from './Routes/CardPages';

function App() {
  const daramui = true;
  return (
    <BrowserRouter>
      <Layout
        fullscreen={true}
        left={<Mainmenu></Mainmenu>}
        right={<>right</>}
        top={<>top</>}
        bottom={<>bottom</>}
        center={<Routes>
          <Route path={(daramui ? 'daramui' : '') + '/input'} element={<InputPage/>}></Route>
          <Route path={(daramui ? 'daramui' : '') + '/toggle'} element={<TogglePage/>}></Route>
          <Route path={(daramui ? 'daramui' : '') + '/select'} element={<SelectPage/>}></Route>
          <Route path={(daramui ? 'daramui' : '') + '/button'} element={<ButtonPage/>}></Route>
          <Route path={(daramui ? 'daramui' : '') + '/card'} element={<CardPage/>}></Route>
        </Routes>}
      />
      
    </BrowserRouter>
  );
}

export default App;