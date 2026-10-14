import '../../stylo_css/stylo.css'; // Mantenha a importação do CSS

// 1. Avisamos o TypeScript quais variáveis este componente vai receber
interface PostProps {
    autor: string;
    arroba: string;
    tempo: string;
    conteudo: string;
}

// 2. Recebemos as variáveis aqui dentro dos parênteses
function Post({ autor, arroba, tempo, conteudo }: PostProps) {
    return(
        <div className="post-container">
            <div className="post-header">
                <div className="post-avatar">
                    {/* Pega a primeira letra do nome para o ícone */}
                    {autor ? autor.charAt(0).toUpperCase() : 'U'}
                </div>

                <div className="post-user">
                    {/* 3. Trocamos os textos fixos pelas variáveis com {} */}
                    <strong>{autor}</strong>
                    <span>{arroba} · {tempo}</span>
                </div>
            </div>

            <div className="post-content">
                {/* 4. O texto do post agora é a variável 'conteudo' */}
                <p>
                    {conteudo}
                </p>
            </div>

            <div className="post-actions">
                <button>♡ Curtir</button>   
            </div>
        </div>
    )
}

export default Post;