// main.jsx
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';
import "./index.css";
import LogIn from "./pages/LogIn";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import MyClasses from "./pages/MyClasses";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signin" element={<LogIn />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/my-classes" element={<MyClasses />} />
      </Routes>
    </Router>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
