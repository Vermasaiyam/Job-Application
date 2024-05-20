
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Layout from './Pages/Layout';
import SignUp from './Pages/SignUp';
import Login from "./Pages/Login";
import Information from "./Pages/Information";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { auth } from "./Firebase/Config";
import { onAuthStateChanged } from "firebase/auth";
import { setActiveUser } from "./Redux/User/UserReducer";

import Resetpassword from "./Pages/Resetpassword";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        console.log(uid);
        dispatch(setActiveUser({
          email: user.email,
          userName: user.displayName,
          userId: user.uid,
        }))
      } else {
        console.log("logged out");
      }
    });
  }, [dispatch]);

  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Layout />}>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/auth/SignUp' element={<SignUp />} />
            <Route exact path='/auth/Login' element={<Login />} />
            <Route exact path='/auth/Reset' element={<Resetpassword />} />
            <Route exact path='/information' element={<Information />} />
            {/* <Route path='resumeTemplates' element={<ResumeTemplates />} />
            <Route path='create' element={<Create />} />
            <Route path='create/template1' element={<Template1 />} />
            <Route path='create/template2' element={<Template2 />} /> */}
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
