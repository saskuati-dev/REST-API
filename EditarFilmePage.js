import React from 'react';
import { useParams } from 'react-router-dom';
import EditarFilme from '../components/EditarFilme';

const EditarFilmePage = () => {
    const { filmeId } = useParams();

    return (
        <div>
            <EditarFilme filmeId={filmeId} />
        </div>
    );
};

export default EditarFilmePage;
