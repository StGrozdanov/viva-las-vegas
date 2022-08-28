import { Route, Routes } from "react-router-dom";
import Navigation from "./components/Navigation/Navigation";
import Landing from "./components/Landing/Landing";
import MultiStepForm from "./components/Forms/MultiStepForm";
import SignInForm from "./components/Forms/SignInForm";
import RegistrationSuccessForm from "./components/Forms/RegistrationSuccessForm";
import Members from "./components/Members/Members";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/register' element={<MultiStepForm />} />
        <Route path='/login' element={<SignInForm />} />
        <Route path='/registration-success' element={<RegistrationSuccessForm />} />
        <Route path='/members' element={<Members />} />
      </Routes>
    </>
  );
}

export default App;