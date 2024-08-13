import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import HomeScreen from "../screens/HomeScreen";
import routeConstants from '../navigation/RouteConstants.json';
import Navbar from "../components/Navbar";

/* Function to load components based on routing */
export default function RouteConfig() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path={routeConstants.basePath} element={<Navigate to={routeConstants.homeScreenPath} />} />
        <Route path={routeConstants.homeScreenPath} element={<HomeScreen />} />
        <Route path="*" element={<Navigate to={routeConstants.homeScreenPath} />} />
      </Routes>
    </Router>
  );
}
