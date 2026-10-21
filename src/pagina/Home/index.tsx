import { useState } from 'react';
import '../../stylo_css/stylo.css';
import Post from '../../componentes/Post';
import type { tpFeed } from '../../types/feed';

// 1. Importamos o 'api' centralizado
import { api } from '../../services/api'; 

function Home() {
    const [novoPostTexto, setNovoPostTexto] = useState('');
    const [feeds, setFeeds] = useState<tpFeed[]>([]);

    // 2. Chama api.CarregarPosts()
    const carregarFeedAsync = async () => {
        const dados = await api.CarregarPosts();
        setFeeds(dados);
    }

    // 3. Cria e envia o novo post
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
            body: novoPostTexto,
            autor: 'Erica Ribeiro',
            arroba: '@erica.sr',
            conteudo: novoPostTexto
        };

        // 4. Envia o post para o back-end via api.ts
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
                {feeds.map((post: any) => (
                    <Post 
                        key={post.id} 
                        // Se vier 'autor' do NestJS (Mirian, Felipe, Matheus), usa ele! Senão, aplica a regra anterior:
                        autor={post.autor ? post.autor : (post.id > 1000 ? 'Erica Ribeiro' : `Usuário ${post.userId}`)} 
                        
                        // Se vier 'arroba', usa ele. Se tiver 'autor' do NestJS, cria @mirian, @felipe, etc.:
                        arroba={post.arroba ? post.arroba : (post.autor ? `@${post.autor.toLowerCase()}` : (post.id > 1000 ? '@erica.sr' : `@user${post.userId}`))}
                        
                        tempo="agora"
                        
                        // Se vier 'conteudo' do NestJS, mostra a frase da Mirian/Felipe/Matheus! Senão, usa a regra anterior:
                        conteudo={post.conteudo ? post.conteudo : (post.id > 1000 ? post.body : 'Alguém anima um treino de musculação ou partida de basquete hoje?')} 
                    />                        
                ))}
            </div>
        </div>
    )
}

export default Home;