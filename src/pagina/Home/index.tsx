import { useState } from 'react';
import '../../stylo_css/stylo.css';
import Post from '../../componentes/Post';
import type { tpFeed } from '../../types/feed';

// 1. IMPORTAMOS O SERVIÇO AQUI (Verifique se a sua pasta se chama 'services' ou 'servicos')
import { carregarFeed } from '../../services/timeline.service'; 

function Home() {
    const [novoPostTexto, setNovoPostTexto] = useState('');
    const [feeds, setFeeds] = useState<tpFeed[]>([]);

    // 2. FUNÇÃO LIMPA: Agora só chama o serviço e guarda os dados!
    const carregarFeedAsync = async () => {
        const dados = await carregarFeed();
        setFeeds(dados);
    }

    const handlePostar = (e:any) => {
        e.preventDefault();
        if (novoPostTexto.trim() === '') {
            alert("Aviso: A barra de texto está vazia!");
            return;
        }

        // 3. CORRIGIDO: Usa Date.now() para o ID não repetir e 'novoPostTexto' para o texto real
        const novoPostObj = {
            userId: 1,
            id: Date.now(), 
            title: 'Novo Post FitFriends',
            body: novoPostTexto 
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
                    // 4. CORRIGIDO: O Post agora recebe as propriedades para desenhar os dados na tela!
                    <Post 
                        key={post.id} 
                        autor={post.id > 1000 ? 'Erica Ribeiro' : `Usuário ${post.userId}`} 
                        arroba={post.id > 1000 ? '@erica.sr' : `@user${post.userId}`}
                        tempo="agora"
                        conteudo={post.body} 
                    />                        
                ))}
            </div>
        </div>
    )
}

export default Home;