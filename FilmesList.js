
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const FilmesList = () => {
    const [filmes, setFilmes] = useState([]);

    useEffect(() => {
        const fetchFilmes = async () => {
            try {
                const response = await axios.get('http://localhost:5000/filmes');
                setFilmes(response.data);
            } catch (error) {
                console.error('Erro ao buscar filmes:', error);
            }
        };

        fetchFilmes();
    }, []);

    return (
        <div>
            <h1>Lista de Filmes</h1>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginBottom: '10px' }}>
                <Link to="/adicionar">
                    <button>Adicionar Filme</button>
                </Link>
            </div>
            <ul>
                {filmes.map(filme => (
                    <li key={filme.id}>
                        <strong>{filme.titulo}</strong> ({filme.ano}) - {filme.genero}
                        <p>Diretor: {filme.diretor}</p>
                        <p>Nota: {filme.nota}</p>
                        <p>Duração: {filme.duracao} minutos</p>
                        <div>
                            <Link to={`/editar/${filme.id}`}>
                                <button>Editar</button>
                            </Link>
                            <Link to={`/excluir/${filme.titulo}`}>
                                <button>Excluir</button>
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FilmesList;
