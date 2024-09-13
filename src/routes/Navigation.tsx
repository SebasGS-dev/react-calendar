import { Navigate, Route, BrowserRouter as Router, Routes } from "react-router-dom"
import MainApp from "../components/mainApp"
// import EditEventPage from "../components/EditEventPage"
import EditEventPageCopy from "../components/EditEventPageCopy"


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
                    element={<EditEventPageCopy/>}
                />

                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
        
    )
}

export default Navigation