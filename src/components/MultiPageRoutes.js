import Home from "./home/Home";
import About from "./about/About";
import Projects from "./projects/Projects";
import Hackathons from './hackathons/Hackathons';
import { Route, Routes } from 'react-router-dom';

export default function MultiPageRoutes() {
    return (
        <Routes>
            <Route exact path={'/'} element={<Home />} />
            <Route exact path={'/about'} element={<About />} />
            <Route exact path={'/projects'} element={<Projects />} />
            <Route exact path={'/hackathons'} element={<Hackathons />} />
        </Routes>
    )
}