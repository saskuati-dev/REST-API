import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetalhesFilmePage = () => {
    const { id } = useParams(); 
    const [filme, setFilme] = useState(null); 
    useEffect(() => {
        const fetchFilme = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/filmes/${id}`);
                setFilme(response.data); 
            } catch (error) {
                console.error('Erro ao buscar filme:', error);
            }
        };

        fetchFilme(); 
    }, [id]); 

    if (!filme) {
        return <div></div>;
    }

    
    return (
        <div>
            <h2>Detalhes do Filme: {filme.titulo}</h2>
            <p><strong>ID:</strong> {filme.id}</p>
            <p><strong>Título:</strong> {filme.titulo}</p>
            <p><strong>Diretor:</strong> {filme.diretor}</p>
            <p><strong>Ano:</strong> {filme.ano}</p>
            <p><strong>Nota:</strong> {filme.nota}</p>
            <p><strong>Duração:</strong> {filme.duracao} minutos</p>
            <p><strong>Gênero:</strong> {filme.genero}</p>
        </div>
    );
};

export default DetalhesFilmePage;
