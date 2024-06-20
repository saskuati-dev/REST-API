import React from 'react';

const ExcluirFilme = ({ filmeTitulo, onExcluir }) => {

    const handleExcluir = async () => {
        await onExcluir(filmeTitulo);
    };

    return (
        <div>
            <button onClick={handleExcluir}>Excluir Filme</button>
        </div>
    );
};

export default ExcluirFilme;
