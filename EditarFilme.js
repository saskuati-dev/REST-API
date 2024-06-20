import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

const EditarFilme = () => {
    const { filmeId } = useParams();
    const navigate = useNavigate();
    const [filme, setFilme] = useState(null);
    const [titulo, setTitulo] = useState('');
    const [diretor, setDiretor] = useState('');
    const [ano, setAno] = useState('');
    const [nota, setNota] = useState('');
    const [duracao, setDuracao] = useState('');
    const [genero, setGenero] = useState('');

    useEffect(() => {
        const fetchFilme = async () => {
            try {
                const response = await axios.get(`http://localhost:5000/filmes/${filmeId}`);
                setFilme(response.data);
                setTitulo(response.data.titulo);
                setDiretor(response.data.diretor);
                setAno(response.data.ano.toString());
                setNota(response.data.nota.toString());
                setDuracao(response.data.duracao.toString());
                setGenero(response.data.genero);
            } catch (error) {
                console.error('Erro ao buscar filme:', error);
            }
        };

        fetchFilme();
    }, [filmeId]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.put(`http://localhost:5000/filmes/${filmeId}`, {
                titulo,
                diretor,
                ano: parseInt(ano),
                nota: parseFloat(nota),
                duracao: parseInt(duracao),
                genero
            });
            console.log('Filme atualizado:', response.data);
            navigate('/'); 
        } catch (error) {
            console.error('Erro ao atualizar filme:', error);
        }
    };

    if (!filme) {
        return <div>Carregando...</div>;
    }

    return (
        <div>
            <h2>Editar Filme: {filme.titulo}</h2>
            <form onSubmit={handleSubmit}>
                <label>Título:
                    <input type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)} required />
                </label>
                <label>Diretor:
                    <input type="text" value={diretor} onChange={(e) => setDiretor(e.target.value)} />
                </label>
                <label>Ano:
                    <input type="text" value={ano} onChange={(e) => setAno(e.target.value)} />
                </label>
                <label>Nota:
                    <input type="text" value={nota} onChange={(e) => setNota(e.target.value)} />
                </label>
                <label>Duração (minutos):
                    <input type="text" value={duracao} onChange={(e) => setDuracao(e.target.value)} />
                </label>
                <label>Gênero:
                    <input type="text" value={genero} onChange={(e) => setGenero(e.target.value)} />
                </label>
                <button type="submit">Atualizar Filme</button>
            </form>
        </div>
    );
};

export default EditarFilme;
