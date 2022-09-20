import "./App.css";
import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Home from "./pages/Home";
import Footer from "./compoments/Footer";
import Navbar from "./compoments/Navbar";
import ExerciseDetailsf from "./pages/ExerciseDetails";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/exersice/:id" element={<ExerciseDetailsf />} />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
