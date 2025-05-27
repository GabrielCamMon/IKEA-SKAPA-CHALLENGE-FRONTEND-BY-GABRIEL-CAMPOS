import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import Demo from "../pages/DemoLoginPage";

function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/demo/:type" element={<Demo />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default AppRouter;
