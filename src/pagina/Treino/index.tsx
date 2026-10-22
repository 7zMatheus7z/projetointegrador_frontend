import '../../stylo_css/stylo.css';

function Treino() {
    // Lista simulada de treinos para preencher os cartões
    const treinos = [
        { id: 1, nome: 'Treino A', foco: 'Peito e Tríceps', duracao: '45 min' },
        { id: 2, nome: 'Treino B', foco: 'Costas e Bíceps', duracao: '50 min' },
        { id: 3, nome: 'Treino C', foco: 'Pernas e Ombro', duracao: '60 min' }
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
                        <h2>{treino.nome}</h2>
                        <p className="treino-foco">Foco: {treino.foco}</p>
                        <p className="treino-duracao">Duração: {treino.duracao}</p>
                        <button className="btn-iniciar">Iniciar</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Treino;



fffffffffffff
