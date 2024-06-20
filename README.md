Descrição da API REST para Gerenciamento de Filmes
Recursos Disponíveis

A API oferece funcionalidades básicas para gerenciar filmes, incluindo adição, listagem, edição, exclusão e detalhamento de filmes.
Endpoints e Métodos HTTP

    Listagem de Filmes
        GET /filmes: Retorna todos os filmes cadastrados.
    Detalhes de um Filme
        GET /filmes/{id}: Retorna os detalhes de um filme específico, identificado pelo {id}.
    Adicionar um Filme
        POST /filmes: Adiciona um novo filme.
    Editar um Filme
        PUT /filmes/{id}: Atualiza as informações de um filme específico, identificado pelo {id}.
    Excluir um Filme
        DELETE /filmes/{id}: Remove um filme específico, identificado pelo {id}.

Parâmetros

    GET /filmes
        Nenhum parâmetro necessário.

    GET /filmes/{id}
        {id}: Identificador único do filme (número inteiro).

    POST /filmes
        Corpo da requisição deve conter os dados do filme (JSON):

        json

    {
        "titulo": "Nome do Filme",
        "diretor": "Diretor do Filme",
        "ano": 2024,
        "nota": 8.5,
        "duracao": 120,
        "genero": "Ação"
    }

PUT /filmes/{id}

    {id}: Identificador único do filme (número inteiro).
    Corpo da requisição deve conter os dados atualizados do filme (JSON), com pelo menos um dos campos a serem atualizados:

    json

        {
            "titulo": "Novo Título do Filme",
            "diretor": "Novo Diretor do Filme",
            "ano": 2025,
            "nota": 7.8,
            "duracao": 110,
            "genero": "Comédia"
        }

    DELETE /filmes/{id}
        {id}: Identificador único do filme a ser excluído (número inteiro).

Exemplos de Respostas

    GET /filmes
        Sucesso: Retorna uma lista de objetos JSON, cada um representando um filme:

        json

    [
        {
            "id": 1,
            "titulo": "O Poderoso Chefão",
            "diretor": "Francis Ford Coppola",
            "ano": 1972,
            "nota": 9.2,
            "duracao": 175,
            "genero": "Crime"
        },
        {
            "id": 2,
            "titulo": "Interestelar",
            "diretor": "Christopher Nolan",
            "ano": 2014,
            "nota": 8.6,
            "duracao": 169,
            "genero": "Ficção Científica"
        }
    ]

GET /filmes/1

    Sucesso: Retorna os detalhes do filme com id igual a 1:

    json

    {
        "id": 1,
        "titulo": "O Poderoso Chefão",
        "diretor": "Francis Ford Coppola",
        "ano": 1972,
        "nota": 9.2,
        "duracao": 175,
        "genero": "Crime"
    }

    Erro: Retorna código de status 404 (Not Found) se o filme não existir.

POST /filmes

    Sucesso: Retorna o objeto JSON do filme adicionado, incluindo o id atribuído pelo servidor:

    json

    {
        "id": 3,
        "titulo": "Cidade de Deus",
        "diretor": "Fernando Meirelles",
        "ano": 2002,
        "nota": 8.6,
        "duracao": 130,
        "genero": "Drama"
    }

PUT /filmes/3

    Sucesso: Retorna o objeto JSON do filme atualizado:

    json

    {
        "id": 3,
        "titulo": "Cidade de Deus",
        "diretor": "Fernando Meirelles",
        "ano": 2002,
        "nota": 8.9,
        "duracao": 135,
        "genero": "Drama"
    }

DELETE /filmes/3

    Sucesso: Retorna código de status 204 (No Content) indicando que o filme foi excluído com sucesso.
    Erro: Retorna código de status 404 (Not Found) se o filme não existir.
