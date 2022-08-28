import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;