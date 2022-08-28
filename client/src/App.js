import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import MultiStepForm from "./components/Forms/MultiStepForm";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<MultiStepForm />} />
      </Routes>
    </>
  );
}

export default App;