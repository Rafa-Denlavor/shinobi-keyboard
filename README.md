<img src="public/images/ninja.svg" width="120px" >

# Ninja Keyboard

Minigame de digitação para desafio técnico e exploração de boas práticas de desenvolvimento.

## Lógica do Minigame:

1. Ao iniciar o jogo, uma sequência aleatória de teclas (por exemplo, letras de A a Z) deve ser gerada e exibida ao jogador.
2. O jogador deve pressionar as teclas na ordem correta dentro de um tempo limite.
3. Se o jogador pressionar a tecla correta, a próxima tecla da sequência deve ser destacada.
4. Se o jogador pressionar a tecla errada ou o tempo acabar, o jogo deve terminar e o jogador deve ser notificado.

## Requisitos:

- A tela principal deve exibir a sequência atual de teclas que o jogador precisa pressionar.
- Um indicador de tempo deve mostrar quanto tempo resta para completar a sequência.
- Feedback visual para indicar se a tecla pressionada foi correta ou não.

## Pontos técnicos:

- **Escolha do servidor de desenvolvimento:** Optei pelo Vite.js ao invés do Next.js, pois é um minigame simples que não precisa de funcionalidades muito complexas que utilizem contextos, provedores, técnicas avançadas de SEO, rotas dinâmicas, serveless, entre outras. 
- **Tecnologia**: Utilizei Typescript para facilitar a leitura do código e o reconhecimento dos tipos das propriedades sem a necessidade de rodar o projeto. Outra alternativa seria a utilização da biblioteca Proptypes, no entanto, seria fácil esquecer de atualizar os tipos (já que não retorna um erro caso falte uma propriedade) e aquele código não seria mais confiável.
- **Framework:** Optei pelo React.js, pois o desafio pedia a tecnologia e até mesmo pela reutilização de componentes, no entanto, poderia ser adaptado para utilizar HTML, CSS e Javascript sem grandes problemas por ser um projeto simples.
- **Utilização de enum:** Enums são valiosos quando um dado pode ter muitos valores diferentes e é necessário reutilizar esses valores em outros lugares do projeto.
- **Versões do node e npm**: No package.json é possível identificar quais versões do Node e do npm são aceitas pra rodar o projeto. Dessa forma, evitamos problemas na instalação de dependências e a informação não é centralizado somente em uma pessoa.
