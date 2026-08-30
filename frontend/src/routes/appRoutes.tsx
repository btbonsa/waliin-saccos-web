import { Routes, Route } from 'react-router-dom'
import Home from '../pages/home'
import Contact from '../pages/contact'
import Services from '../pages/service'
import Login from '../pages/login'
import NotFound from '../pages/notFound'
import About from '../pages/about'
import MainLayout from '../components/layout/mainLayout'

function appRoutes() {
    return (
        <Routes>
            <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/services" element={<Services />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            </Route>
        </Routes>
    )
}
export default appRoutes;