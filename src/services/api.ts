// src/services/api.ts
// Configuração base de integração com o back-end

const BASE_URL = "https://jsonplaceholder.typicode.com"; // Mude para "http://localhost:3000" quando o NestJS estiver rodando

export const api = {
    // ================= USUÁRIOS =================
    CarregarUsuarios: async () => {
        let response = await fetch(`${BASE_URL}/users`);
        let json = await response.json();
        return json;
    },

    CadastrarUsuario: async (dadosUsuario: any) => {
        let response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosUsuario),
        });
        let json = await response.json();
        return json;
    },

    RealizarLogin: async (dadosLogin: any) => {
        let response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosLogin),
        });
        let json = await response.json();
        return json;
    },

    // ================= PARCEIROS =================
    CarregarParceiros: async () => {
        let response = await fetch(`${BASE_URL}/users`);
        let json = await response.json();
        return json;
    },

    CadastrarParceiro: async (dadosParceiro: any) => {
        let response = await fetch(`${BASE_URL}/users`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosParceiro),
        });
        let json = await response.json();
        return json;
    },

    // ================= TREINOS =================
    CarregarTreinos: async () => {
        let response = await fetch(`${BASE_URL}/posts`);
        let json = await response.json();
        return json;
    },

    CadastrarTreino: async (dadosTreino: any) => {
        let response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosTreino),
        });
        let json = await response.json();
        return json;
    },

    // ================= TIMELINE (POSTS) =================
    CarregarPosts: async () => {
        let response = await fetch(`${BASE_URL}/posts`);
        let json = await response.json();
        return json;
    },

    CriarPost: async (dadosPost: any) => {
        let response = await fetch(`${BASE_URL}/posts`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(dadosPost),
        });
        let json = await response.json();
        return json;
    },
};