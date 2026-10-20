import '../../stylo_css/stylo.css';

function Treino() {
    const treinos = [
        { 
            id: 1, 
            nome: 'Treino A', 
            foco: 'Peito e Ombro', 
            duracao: '45 min',
            frequencia: 'Segunda-feira',
            classeImagem: 'treino-imagem-a',
            imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxrkUpLX4SQ7bhWxp28AFk2gsqVeIr9zCGho2NhX7CWGkXi5VKFTW59HQ&s=10',
            exercicios: ['Supino Reto', 'Inclinado com Halteres', 'Desenvolvimento', 'Elevação Lateral']
        },
        { 
            id: 2, 
            nome: 'Treino B', 
            foco: 'Costas e Bíceps', 
            duracao: '50 min',
            frequencia: 'Terça-feira',
            classeImagem: 'treino-imagem-b',
            imagem: 'https://p2.trrsf.com/image/fget/cf/1200/1200/middle/images.terra.com/2024/07/15/1315346897-istock-1488307332.jpg',
            exercicios: ['Puxada Alta', 'Remada Curvada', 'Rosca Direta', 'Rosca Martelo']
        },
        { 
            id: 3, 
            nome: 'Treino C', 
            foco: 'Pernas Completo', 
            duracao: '60 min',
            frequencia: 'Quinta-feira',
            classeImagem: 'treino-imagem-c',
            imagem: 'https://pratiquefitness.com.br/blog/wp-content/uploads/2023/08/Como-otimizar-seu-treino-de-ombros-e-melhorar-seus-resultados-1.jpg',
            exercicios: ['Agachamento Livre', 'Leg Press 45', 'Cadeira Extensora', 'Mesa Flexora']
        },
        { 
            id: 4, 
            nome: 'Treino D', 
            foco: 'Tríceps (Especialização)', 
            duracao: '40 min',
            frequencia: 'Sexta-feira',
            classeImagem: 'treino-imagem-d',
            imagem: 'https://billboard-com-br.s3.amazonaws.com/wp-content/uploads/2025/03/24100602/V-do-BTS-em-publicacao-nas-redes-sociais-Reproducao_Instagram.jpg',
            exercicios: ['Tríceps Pulley/Corda', 'Tríceps Testa', 'Tríceps Coice/Banco', 'Paralelas / Flexão Fechada']
        },
        { 
            id: 5, 
            nome: 'Treino E', 
            foco: 'Cardio, Core e Abdômen', 
            duracao: '45 min',
            frequencia: 'Sábado',
            classeImagem: 'treino-imagem-e',
            imagem: 'https://images.pexels.com/photos/3076509/pexels-photo-3076509.jpeg?auto=compress&cs=tinysrgb&w=800',
            exercicios: ['Corrida / Esteira (HIIT)', 'Abdominal Supra', 'Abdominal Infra', 'Prancha Isométrica']
        },
        { 
            id: 6, 
            nome: 'Treino F', 
            foco: 'Glúteos, Posterior e Panturrilhas', 
            duracao: '50 min',
            frequencia: 'Domingo',
            classeImagem: 'treino-imagem-f',
            imagem: 'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg?auto=compress&cs=tinysrgb&w=800',
            exercicios: ['Elevação Pélvica', 'Stiff', 'Cadeira Flexora', 'Gêmeos em Pé (Panturrilha)']
        }
    ];

    return (
        <div className="treino-master">
            <div className="treino-header">
                <h1>Meus Treinos</h1>
                <button className="btn-novo-treino">+ Novo Treino</button>
            </div>

            <div className="treino-grid">
                {treinos.map((treino) => (
                    <div className="treino-card" key={treino.id}>
                        <div className="treino-imagem-container">
                            <img 
                                src={treino.imagem || 'https://images.tcdn.com.br/img/img_prod/645555/noticia_14467158306875aace9bfd1.jpg'} 
                                alt={`Imagem do ${treino.nome}`}
                                className={`treino-imagem ${treino.classeImagem}`} 
                            />
                        </div>
                        <h2>{treino.nome}</h2>
                        <p className="treino-foco"><strong>Foco:</strong> {treino.foco}</p>
                        <p className="treino-duracao"><strong>Duração estimada:</strong> {treino.duracao}</p>
                        <p className="treino-frequencia"><strong>Dia:</strong> {treino.frequencia}</p>
                        
                        <div className="treino-exercicios">
                            <strong>Exercícios principais:</strong>
                            <ul>
                                {treino.exercicios.map((exercicio, index) => (
                                    <li key={index}>{exercicio}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Treino;
