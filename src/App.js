
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import News from './pages/News';
import Profile from './pages/Profile';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Header from './components/Header';
import Apaperplanes from './news/Apaperplanes';
import Footer from './components/Footer';
import Aicecreamonacoldday from './news/Aicreamonacoldday';
import Astrangerwednesday from './news/Astrangerwednesday';
import Adrivethrupests from './news/Adrivethrupests';
import Ay2k from './news/Ay2k';

function App() {
  return (
    <div className="">
      <HashRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/news" element={<News />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/paperplanes" element={<Apaperplanes />} />
        <Route path="/icecreamonacoldday" element={<Aicecreamonacoldday />} />
        <Route path="/strangerwednesday" element={<Astrangerwednesday />} />
        <Route path="/drivethrupests" element={<Adrivethrupests />} />
        <Route path="/y2k" element={<Ay2k />} />
      </Routes>
      <Footer />
      </HashRouter>

    </div>
  );
}

export default App;
