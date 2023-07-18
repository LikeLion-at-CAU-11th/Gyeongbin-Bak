import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Home } from "./pages/Home";
import { Mypage } from "./pages/Mypage";
import { SignUp } from "./pages/SignUp";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
