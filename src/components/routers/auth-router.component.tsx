import Login from "pages/login/login.component";
import { Routes, Route } from "react-router-dom";

const AuthRouter = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AuthRouter;
