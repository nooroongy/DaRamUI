import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout'
import Mainmenu from './components/mainPage/MainMenu'
import ButtonPage from './Routes/ButtonPage';
import InputPage from './Routes/InputPage';
import SelectPage from './Routes/SelectPage';
import TogglePage from './Routes/SelectPage';

function App() {
  return (
    <BrowserRouter>
      <Layout
        fullscreen={true}
        left={<Mainmenu></Mainmenu>}
        right={<>right</>}
        top={<>top</>}
        bottom={<>bottom</>}
        center={<Routes>
          <Route path='/input' element={<InputPage/>}></Route>
          <Route path='/toggle' element={<TogglePage/>}></Route>
          <Route path='/select' element={<SelectPage/>}></Route>
          <Route path='/button' element={<ButtonPage/>}></Route>
        </Routes>}
      />
      
    </BrowserRouter>
  );
}

export default App;