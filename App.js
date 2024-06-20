import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmesPage from './pages/FilmesPage';
import AdicionarFilmePage from './pages/AdicionarFilmePage';
import EditarFilmePage from './pages/EditarFilmePage';
import ExcluirFilmePage from './pages/ExcluirFilmePage';
import DetalhesFilmePage from './pages/DetalhesFilmePage';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/" element={<FilmesPage />} />
                    <Route path="/adicionar" element={<AdicionarFilmePage />} />
                    <Route path="/editar/:filmeId" element={<EditarFilmePage />} />
                    <Route path="/excluir/:filmeTitulo" element={<ExcluirFilmePage />} />
                    <Route path="/filmes/:id" element={<DetalhesFilmePage />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
