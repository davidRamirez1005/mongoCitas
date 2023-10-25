import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider, AuthRoute } from '../../auth/infraestructure/Context'
import Index from '../../auth/app/Index';
import Medico from '../../pages/medico/app/Medico'
import Home from '../../pages/home/Home'


function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Login" element={<Index />} />
              <Route
              path="/Medico"
              element={
                <AuthRoute>
                  <Medico />
                </AuthRoute>
              }
            />
            </Routes>
          </AuthProvider>
      </BrowserRouter>
    </>
  );
}

export default App;