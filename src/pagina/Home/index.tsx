import { useState } from 'react';
import '../../stylo_css/stylo.css';
import Post from '../../componentes/Post';
import type { tpFeed } from '../../types/feed';


// 1. IMPORTAMOS O SERVIÇO AQUI
import { carregarFeed } from '../../services/timeline.service'; 

function Home() {
    const [novoPostTexto, setNovoPostTexto] = useState('');
    const [feeds, setFeeds] = useState<tpFeed[]>([]);
    
    // ESTADOS PARA OS MODAIS
    const [mostrarQuemSomos, setMostrarQuemSomos] = useState(false);
    const [mostrarComoFunciona, setMostrarComoFunciona] = useState(false);
    const [mostrarAjuda, setMostrarAjuda] = useState(false);
    const [mostrarPrivacidade, setMostrarPrivacidade] = useState(false);
    const [mostrarTermos, setMostrarTermos] = useState(false);

    const carregarFeedAsync = async () => {
        const dados = await carregarFeed();
        setFeeds(dados);
    }

    const handlePostar = (e: React.FormEvent) => {
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
        }
          
        setFeeds([novoPostObj, ...feeds]);
        setNovoPostTexto('');
    };

    return(
        <div className="home-container">            
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
                        conteudo={post.body} 
                    />                        
                ))}
            </div>

            {/* MODAL QUEM SOMOS */}
            {mostrarQuemSomos && (
                <div className="modal-overlay" onClick={() => setMostrarQuemSomos(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Quem Somos</h2>
                        <p>
                            O FitFriends é uma plataforma dedicada a conectar pessoas apaixonadas por esportes,
                            atividades físicas e estilo de vida saudável. Nossa missão é facilitar o encontro 
                            de parceiros de treino e promover o bem-estar comunitário.
                        </p>
                        <button type="button" className="btn-fechar" onClick={() => setMostrarQuemSomos(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL COMO FUNCIONA */}
            {mostrarComoFunciona && (
                <div className="modal-overlay" onClick={() => setMostrarComoFunciona(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Como Funciona</h2>
                        <ol style={{ paddingLeft: '20px', margin: '15px 0' }}>
                            <li style={{ marginBottom: '8px' }}><strong>Crie publicações:</strong> Compartilhe suas rotinas, treinos e objetivos na timeline.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Encontre parceiros:</strong> Conecte-se com pessoas da sua região interessadas nas mesmas modalidades esportivas.</li>
                            <li style={{ marginBottom: '8px' }}><strong>Evolua em grupo:</strong> Interaja com a comunidade, troque dicas e agende treinos conjuntos!</li>
                        </ol>
                        <button type="button" className="btn-fechar" onClick={() => setMostrarComoFunciona(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL CENTRAL DE AJUDA */}
            {mostrarAjuda && (
                <div className="modal-overlay" onClick={() => setMostrarAjuda(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Central de Ajuda</h2>
                        <div style={{ margin: '15px 0' }}>
                            <p><strong>Dúvidas Frequentes:</strong></p>
                            <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                                <li style={{ marginBottom: '6px' }}><strong>Como faço uma publicação?</strong> Digite o texto na barra principal do topo e clique em "POSTAR".</li>
                                <li style={{ marginBottom: '6px' }}><strong>Como atualizar meu feed?</strong> Clique no botão "CARREGAR" para buscar os novos dados.</li>
                                <li style={{ marginBottom: '6px' }}><strong>Precisa de suporte técnico?</strong> Entre em contato via suporte@fitfriends.com.</li>
                            </ul>
                        </div>
                        <button type="button" className="btn-fechar" onClick={() => setMostrarAjuda(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL POLÍTICA DE PRIVACIDADE */}
            {mostrarPrivacidade && (
                <div className="modal-overlay" onClick={() => setMostrarPrivacidade(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Política de Privacidade</h2>
                        <p style={{ margin: '10px 0' }}>
                            Sua privacidade é fundamental para nós no FitFriends.
                        </p>
                        <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                            <li style={{ marginBottom: '6px' }}><strong>Uso de dados:</strong> Seus dados pessoais e postagens são utilizados estritamente para a exibição da timeline e conexões dentro do sistema.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Segurança:</strong> Não compartilhamos suas informações com terceiros para fins de marketing.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Controle:</strong> Você pode alterar suas preferências de conta a qualquer momento nas configurações.</li>
                        </ul>
                        <button type="button" className="btn-fechar" onClick={() => setMostrarPrivacidade(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* MODAL TERMOS DE USO */}
            {mostrarTermos && (
                <div className="modal-overlay" onClick={() => setMostrarTermos(false)}>
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <h2>Termos de Uso</h2>
                        <p style={{ margin: '10px 0' }}>
                            Ao utilizar a plataforma FitFriends, você concorda com as seguintes regras de convivência e utilização:
                        </p>
                        <ul style={{ paddingLeft: '20px', margin: '10px 0' }}>
                            <li style={{ marginBottom: '6px' }}><strong>Respeito na comunidade:</strong> É proibido publicar conteúdos ofensivos, preconceituosos ou inapropriados.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Uso consciente:</strong> Mantenha a veracidade nas publicações e interações com os demais usuários.</li>
                            <li style={{ marginBottom: '6px' }}><strong>Responsabilidade:</strong> O FitFriends conecta praticantes de esportes, mas cada usuário é responsável por sua segurança física durante a prática de exercícios.</li>
                        </ul>
                        <button type="button" className="btn-fechar" onClick={() => setMostrarTermos(false)}>
                            Fechar
                        </button>
                    </div>
                </div>
            )}

            {/* RODAPÉ DO SITE */}
            <footer className="footer">
                <div className="footer-content">
                    <div className="footer-section">
                        <h4>FitFriends</h4>
                        <p>Conectando pessoas através do esporte e da saúde.</p>
                    </div>

                    <div className="footer-section">
                        <h4>Institucional</h4>
                        <ul>
                            <li>
                                <button 
                                    type="button" 
                                    className="footer-link-btn"
                                    onClick={() => setMostrarQuemSomos(true)}
                                >
                                    Quem Somos
                                </button>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="footer-link-btn"
                                    onClick={() => setMostrarComoFunciona(true)}
                                >
                                    Como Funciona
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="footer-section">
                        <h4>Suporte & Legal</h4>
                        <ul>
                            <li>
                                <button 
                                    type="button" 
                                    className="footer-link-btn"
                                    onClick={() => setMostrarAjuda(true)}
                                >
                                    Central de Ajuda
                                </button>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="footer-link-btn"
                                    onClick={() => setMostrarPrivacidade(true)}
                                >
                                    Política de Privacidade
                                </button>
                            </li>
                            <li>
                                <button 
                                    type="button" 
                                    className="footer-link-btn"
                                    onClick={() => setMostrarTermos(true)}
                                >
                                    Termos de Uso
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} FitFriends. Todos os direitos reservados.</p>
                </div>
            </footer>
        </div>
    )
}




export default Home;
