import './App.css';
import {Route, Routes} from "react-router-dom";
import Landing from "./components/Landing";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactPage from "./pages/ContactPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CalendarPage from "./components/Calendar";
import ProfilePage from "./pages/ProfilePage";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
    return (
        <Routes>
            <Route path={"/"} element={<Landing/>}></Route>
            <Route path={"/sign-in"} element={<LoginPage/>}></Route>
            <Route path={"/register"} element={<RegisterPage/>}></Route>
            <Route path={"/homepage"} element={<HomePage/>}></Route>
            <Route path={"/about-us-page"} element={<AboutUsPage/>}></Route>
            <Route path={"/contact-page"} element={<ContactPage/>}></Route>
            <Route path={"/privacy-policy-page"} element={<PrivacyPolicyPage/>}></Route>
            <Route path={"/terms-of-service-page"} element={<TermsOfServicePage/>}></Route>
            <Route path={"/error"} element={<NotFoundPage></NotFoundPage>}></Route>
            <Route path={"/calendar"} element={<CalendarPage></CalendarPage>}></Route>
            <Route path={"/profile"} element={<ProfilePage />} />
            <Route path={"/projects"} element={<ProjectsPage />} />

            <Route path={"*"} element={<NotFoundPage/>}></Route>
        </Routes>
    );
}

export default App;