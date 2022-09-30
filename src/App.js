import "./App.scss";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./compoments/Footer/Footer";
import NarBar from "./compoments/NavBar/NarBar";
import ExerciseDetailsf from "./pages/ExerciseDetails/ExerciseDetails";
function App() {
  return (
    <div className="app" >
      <NarBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exersice/:id" element={<ExerciseDetailsf />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
