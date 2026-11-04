# Mark-It

Mark-It é um organizador pessoal inspirado no método **Bullet Journal**. A aplicação reúne tarefas do dia e notas rápidas em uma interface visual de diário, com armazenamento local e recursos para exportar e importar os dados.

## Funcionalidades

### Diário

- Exibe a data atual e permite registrar tarefas e notas.
- Organiza os itens em abas: todos, pendentes, adiados, finalizados, cancelados e notas.
- Permite alterar o status de uma tarefa, editar seu conteúdo ou excluí-la com confirmação.
- Mostra contadores por categoria e oferece busca textual nos itens do diário.
- Ao chegar a um novo dia, tarefas adiadas são transferidas para a data atual e voltam ao estado normal.
- No formulário de criação, `Enter` salva o item e `Shift + Enter` insere uma quebra de linha.

### Notas

- Apresenta notas como post-its, com opções de cor, edição, exclusão e visualização ampliada.
- Permite filtrar por cor e período (hoje, última semana ou último mês), ordenar por mais recentes ou mais antigas e escolher o tamanho pequeno ou médio.
- Inclui legendas personalizáveis para as cores dos post-its.
- Mantém localmente as preferências de tamanho, cores selecionadas e legendas.

### Aparência e navegação

- Alterna entre tema claro e escuro e guarda a preferência no navegador.
- Separa a aplicação nas seções Diário, Notas, Sobre e Gerenciamento de Dados.
- Inclui regras de layout responsivo para diferentes larguras de tela.

### Gerenciamento de dados

- Exporta as tarefas e notas para um arquivo JSON.
- Importa dados a partir de um arquivo `.json` ou de texto colado.
- Oferece os modos **Adicionar** (incorpora os dados, substituindo registros com o mesmo identificador) e **Substituir** (troca todos os registros existentes após confirmação).

## Tecnologias

- **HTML5** para a estrutura e os formulários.
- **CSS3** para estilos, temas, componentes e adaptações responsivas.
- **JavaScript Vanilla** com módulos ES nativos para a lógica da interface, manipulação do DOM e organização do código.
- **Web Storage API**: `localStorage` persiste tarefas, notas e preferências no navegador; `sessionStorage` guarda a seção selecionada durante a sessão.
- **Firebase JavaScript SDK 12.10.0** carregado por CDN, usando Firebase App e Firebase Analytics. O Firebase não foi continuado para armazenar as tarefas, atualmente não há essa função.
- APIs nativas do navegador, como `FileReader`, `Blob` e URLs de objeto, dão suporte à importação e exportação JSON.
- Fontes e alguns ícones/imagens são carregados de serviços externos, como Google Fonts e CDNs.

O projeto não utiliza framework JavaScript, backend, banco de dados remoto, autenticação, bundler ou gerenciador de dependências. Os dados ficam no armazenamento do navegador e não são sincronizados automaticamente entre dispositivos.

## Como executar

Não há etapa de instalação ou compilação. Como a aplicação utiliza módulos JavaScript, execute-a por um servidor HTTP local em vez de abrir o `index.html` diretamente como arquivo, ou acessar a referência para o GitHub Pages, que está funcionando normalmente.

### Python no Windows

Na pasta do projeto, execute:

```powershell
py -m http.server 8000
```

Depois, abra [http://localhost:8000](http://localhost:8000) no navegador. Também é possível usar a extensão **Live Server** do Visual Studio Code.

É necessária conexão com a internet para carregar o SDK do Firebase, as fontes e os recursos visuais hospedados externamente.

## Estrutura do projeto

```text
.
├── index.html
└── src/
    ├── assets/
    │   ├── backgrounds/     # Fundos dos temas
    │   ├── css/             # Estilos globais e das seções
    │   └── images/          # Logotipos e imagens locais
    ├── components/
    │   ├── modal/           # Modal de criação, edição e confirmação
    │   └── navbar/          # Navegação entre seções
    ├── pages/
    │   ├── dashboard/       # Diário, tarefas, status e notas
    │   └── home/            # Inicialização da aplicação
    ├── services/            # Importação e exportação de dados
    └── utils/               # Datas, persistência auxiliar, temas e abas
```

## Dados e limitações atuais

- Os registros são guardados no `localStorage` do navegador, sob a chave `tarefas`; os adiamentos também usam `Adiados`. Limpar os dados do navegador pode apagar os registros.
- Não existe conta de usuário, sincronização em nuvem ou recuperação automática. Use a exportação JSON para criar backups e transferir dados manualmente.
- A importação espera um array JSON e remove IDs duplicados no próprio arquivo, mas ainda pode se beneficiar de validação mais rigorosa da estrutura de cada registro.
- Algumas operações mantêm cópias dos dados em memória além do `localStorage`. Centralizar o estado e atualizá-lo em um único fluxo ajudaria a manter criação, mudança de status e exportação consistentes.
- Não há configuração de instalação, scripts de build ou testes automatizados no repositório neste momento.

## Possíveis melhorias e adições futuras

1. **Confiabilidade dos dados:** centralizar o acesso e a atualização do estado, validar o formato dos arquivos importados e adicionar tratamento de erros e testes para criação, adiamento, importação e exportação.
2. **Experiência móvel e acessibilidade:** aprimorar a navegação em telas pequenas, oferecer suporte completo a teclado e leitores de tela e revisar foco, contraste e rótulos dos controles.
3. **Organização e produtividade:** permitir reordenar tarefas por arrastar e soltar, criar projetos e filtros adicionais e oferecer uma visão de calendário.
4. **Acompanhamento:** apresentar estatísticas de conclusão e adiamento das tarefas e adicionar recursos para hábitos e metas.
5. **Personalização:** ampliar as configurações de aparência, preferências e organização das notas.
6. **Sincronização opcional:** avaliar contas e armazenamento em nuvem para acesso entre dispositivos, com estratégia de privacidade, conflitos e recuperação de dados.

Essas sugestões são possibilidades de evolução, não funcionalidades atualmente disponíveis. Recursos de sincronização ou contas exigiriam uma camada de backend e mudanças na forma de persistência.
