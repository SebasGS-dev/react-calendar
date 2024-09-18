import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import EditEventPage from "../components/EditEventPage"
import MainApp from "../components/MainApp"


const Navigation = () => {
    
    return (
        <Router>
            <Routes>
                <Route
                    path="/"
                    element={<MainApp/>}
                />

                {/* Ruta para la página de edición */}
                <Route
                    path="/edit/:id"
                    element={<EditEventPage/>}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
        
    )
}

export default Navigation