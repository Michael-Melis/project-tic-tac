import { useState } from 'react';
import LandingPage from './pages/landingPage';
import { Route, Routes } from 'react-router-dom';
import Singleplayer from './pages/singleplayer';
import Multyplayer from './pages/multyplayer';
import Layout from './components/Layout';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <Layout toggle={toggle} isOpen={isOpen}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/singleplayer" element={<Singleplayer />} />
          <Route path="/multyplayer" element={<Multyplayer />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
