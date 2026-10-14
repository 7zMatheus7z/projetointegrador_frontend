import type { tpFeed } from '../types/feed'; // Ajuste o caminho '../' se a pasta types estiver noutro local

// Esta função vai ao servidor buscar os dados e devolve a lista pronta
export const carregarFeed = async (): Promise<tpFeed[]> => {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const json = await response.json();
        
        // Retorna apenas os primeiros 10 posts para não sobrecarregar o ecrã
        return Array.isArray(json) ? json.slice(0, 10) : [json];
    } catch (erro) {
        console.error("Erro ao procurar os dados da API:", erro);
        return []; // Se der erro, devolve uma lista vazia para não "crachar" a página
    }
};