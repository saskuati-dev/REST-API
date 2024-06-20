import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ExcluirFilme from '../components/ExcluirFilme';
import axios from 'axios';

const ExcluirFilmePage = () => {
    const { filmeTitulo } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState(null);

    useEffect(() => {
        const fetchFilme = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/filmes`);
                const filmeEncontrado = response.data.find(f => f.titulo === filmeTitulo);
                if (filmeEncontrado) {
                    setFilme(filmeEncontrado);
                } else {
                    navigate('/'); 
                }
            } catch (error) {
                console.error('Erro ao buscar filme:', error);
                navigate('/'); 
            }
        };

        fetchFilme();
    }, [filmeTitulo, navigate]);

    const handleExcluir = async (titulo) => {
        try {
            
            await axios.delete(`http://localhost:5000/filmes/titulo/${titulo}`);
            console.log(`Filme com título "${titulo}" foi excluído com sucesso`);

            
            navigate('/');
        } catch (error) {
            console.error('Erro ao excluir filme:', error);
        }
    };

    if (!filme) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>Excluir Filme: {filme.titulo}</h2>
            <ExcluirFilme filmeTitulo={filmeTitulo} onExcluir={handleExcluir} />
        </div>
    );
};

export default ExcluirFilmePage;
