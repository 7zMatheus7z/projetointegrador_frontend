import { useState } from 'react';
import '../../stylo_css/stylo.css';
import Post from '../../componentes/Post';
import type { tpFeed } from '../../types/feed';

// 1. MUDANÇA AQUI: Importamos o 'api' centralizado em vez do timeline.service
import { api } from '../../services/api'; 

function Home() {
    const [novoPostTexto, setNovoPostTexto] = useState('');
    const [feeds, setFeeds] = useState<tpFeed[]>([]);

    // 2. MUDANÇA AQUI: Agora chama api.CarregarPosts()
    const carregarFeedAsync = async () => {
        const dados = await api.CarregarPosts();
        setFeeds(dados);
    }

    // 3. MUDANÇA AQUI: Adicionado 'async' para poder usar o 'await' lá embaixo
    const handlePostar = async (e: any) => {
        e.preventDefault();

        if (novoPostTexto.trim() === '') {
            alert("Aviso: A barra de texto está vazia!");
            return;
        }

        const novoPostObj = {
            userId: 1,
            id: Date.now(), 
            title: 'Novo Post FitFriends',
            body: novoPostTexto 
        };

        // 4. MUDANÇA AQUI: Envia o post para o back-end via api.ts
        try {
            await api.CriarPost(novoPostObj);
        } catch (erro) {
            console.error("Erro ao salvar no servidor, exibindo localmente:", erro);
        }
         
        setFeeds([novoPostObj, ...feeds]);
        setNovoPostTexto('');
    };

    return(
        <div>            
            <div className='home-master'>
                <div className='home-post'>                                        
                    <button type="button" className='btn-postar' onClick={carregarFeedAsync}>CARREGAR</button>
                    
                    <input 
                        type="text" 
                        placeholder='O QUE VOCÊ ESTÁ PENSANDO?' 
                        value={novoPostTexto}
                        onChange={(e) => setNovoPostTexto(e.target.value)}
                    />
                    
                    <button type="button" className='btn-postar' onClick={(e) => handlePostar(e)}>POSTAR</button>
                </div>
            </div>

            <div className='home-detalhes'>
                {feeds.map((post) => (
                    <Post 
                        key={post.id} 
                        autor={post.id > 1000 ? 'Erica Ribeiro' : `Usuário ${post.userId}`} 
                        arroba={post.id > 1000 ? '@erica.sr' : `@user${post.userId}`}
                        tempo="agora"
                        conteudo={post.id > 1000 ? post.body : 'Alguém anima um treino de musculação ou partida de basquete hoje?'} 
                    />                        
                ))}
            </div>
        </div>
    )
}

export default Home;