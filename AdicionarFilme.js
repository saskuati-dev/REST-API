
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AdicionarFilme = () => {
    const [titulo, setTitulo] = useState('');
    const [diretor, setDiretor] = useState('');
    const [ano, setAno] = useState('');
    const [nota, setNota] = useState('');
    const [duracao, setDuracao] = useState('');
    const [genero, setGenero] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/filmes', {
                titulo,
                diretor,
                ano: parseInt(ano),
                nota: parseFloat(nota),
                duracao: parseInt(duracao),
                genero
            });
            console.log('Filme adicionado:', response.data);

            setTitulo('');
            setDiretor('');
            setAno('');
            setNota('');
            setDuracao('');
            setGenero('');
            navigate('/'); 
        } catch (error) {
            console.error('Erro ao adicionar filme:', error);
        }
    };

    return (
        <div>
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
                <button type="submit">Adicionar Filme</button>
            </form>
        </div>
    );
};

export default AdicionarFilme;
