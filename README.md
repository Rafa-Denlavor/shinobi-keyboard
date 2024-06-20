<img src="public/images/ninja.svg" width="120px" >

# Shinobi Keyboard

Minigame de digitação.

## Lógica do Minigame:

1. Ao iniciar o jogo, uma sequência aleatória de teclas (por exemplo, letras de A a Z) deve ser gerada e exibida ao jogador.
2. O jogador deve pressionar as teclas na ordem correta dentro de um tempo limite.
3. Se o jogador pressionar a tecla correta, a próxima tecla da sequência deve ser destacada.
4. Se o jogador pressionar a tecla errada ou o tempo acabar, o jogo deve terminar e o jogador deve ser notificado.

## Requisitos iniciais:

- A tela principal deve exibir a sequência atual de teclas que o jogador precisa pressionar.
- Um indicador de tempo deve mostrar quanto tempo resta para completar a sequência.
- Feedback visual para indicar se a tecla pressionada foi correta ou não.

## Funcionalidade extras:

- Níveis de dificuldade
- Contagem regressiva antes de iniciar
- Pontuação
- Música e efeitos sonoros em boa parte da gameplay
- Botões para ativar e desativar música e os efeitos sonoros
- Animação simples ao acessar o minigame

## Pontos técnicos:

- **Escolha do servidor de desenvolvimento:** Optei pelo Vite.js ao invés do Next.js, pois é um minigame simples que não precisa de funcionalidades muito complexas que utilizem contextos, provedores, técnicas avançadas de SEO, rotas dinâmicas, serveless, entre outras. 
- **Tecnologia**: Utilizei Typescript para facilitar a leitura do código e o reconhecimento dos tipos das propriedades sem a necessidade de rodar o projeto. Outra alternativa seria a utilização da biblioteca Proptypes, no entanto, seria fácil esquecer de atualizar os tipos (já que não retorna um erro caso falte uma propriedade) e aquele código não seria mais confiável.
- **Framework:** Optei pelo React.js, pois o desafio pedia a tecnologia e até mesmo pela reutilização de componentes, no entanto, poderia ser adaptado para utilizar HTML, CSS e Javascript sem grandes problemas por ser um projeto simples.
- **Nomenclatura de arquivos**: Após criar uma pasta de componente ou view, adotei deixar o nome do arquivo principal como `index`, pois qualquer dev que bata o olho reconhece o significado, porém o arquivo de estilo terá o mesmo nome que a pasta principal, pois dessa forma é possível realizar a busca na IDE e facilmente encontrar a pasta que você quer. Para o hook, após o `use` também adiciono o nome da pasta, algo mais genérico, para que seja possível englobar qualquer lógica referente aquele contexto. Cê o arquivo ficar muito grande e com muitas responsabilidades, é só criar uma pasta `helpers` na pasta principal e adicionar as lógicas necessárias.
- **Enum:** Enums são valiosos quando um dado pode ter muitos valores diferentes e é necessário reutilizar esses valores em outros lugares do projeto.
- **Versões do node e npm**: No `package.json` é possível identificar quais `versões do Node e do npm` são aceitas pra rodar o projeto. Dessa forma, evitamos problemas na instalação de dependências e a informação não é centralizado somente em uma pessoa.
- **Pastas**: Depois de diversas experiências com estrutura de pastas em projetos pequenos, médios e grandes achei algo que me agrade e que faz sentido. 
    - /components: Componentes no geral, independente se for pequeno ou grande.
    - /helpers: Funções reutilizáveis com lógicas isoladas.
    - /styles: Armazena estilos globais ou reutilizáveis.
    - /view: Utilizada para criar o componente pai das páginas. Normalmente é formada por diversos componentes e tem um hook customizado.
    - /page: Para ficar claro quais são as páginas existentes e dentro de cada um apenas chamamos o componente pai (vulgo pasta view).
    - /__tests__: Pasta principal com subpastas para testes unitários e e2e. 
