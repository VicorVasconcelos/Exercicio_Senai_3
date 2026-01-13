# 🎮 LOJA DE JOGOS - GAME STORE

> **MISSÃO:** Gerenciar catálogo de jogos épicos usando Angular + API REST
> **DESENVOLVEDOR:** Victor Vasconcelos
> **ACADEMIA:** SENAI - Desenvolvedor Full Stack
> **NÍVEL:** Full Stack Warrior 🗡️

---

## 🕹️ SOBRE A QUEST

Projeto desenvolvido como parte da trilha de **Desenvolvedor Full Stack** no **SENAI**, focado em dominar as técnicas de integração entre frontend Angular e APIs REST. Esta aplicação é uma loja completa de jogos com operações CRUD (Create, Read, Update, Delete) consumindo uma API fake via JSON-Server.

**Boss Final Derrotado:** ✅ Integração completa de Angular com API REST!

---

## ⚔️ TECNOLOGIAS DO ARSENAL

| Arma                        | Level      | Descrição                         |
| --------------------------- | ---------- | ----------------------------------- |
| 🅰️**Angular 21**    | ⭐⭐⭐⭐⭐ | Framework principal para o frontend |
| 🎨**Bootstrap 5**     | ⭐⭐⭐⭐⭐ | Design responsivo e moderno         |
| 🔥**Bootstrap Icons** | ⭐⭐⭐⭐   | Ícones para UI épica              |
| 🗄️**JSON-Server**   | ⭐⭐⭐⭐   | API REST fake para desenvolvimento  |
| 📡**HttpClient**      | ⭐⭐⭐⭐⭐ | Comunicação com API               |
| 🎯**TypeScript**      | ⭐⭐⭐⭐⭐ | Superpoderes do JavaScript          |

---

## 🚀 COMANDOS DE JOGO (Como Rodar)

### ⚡ Preparação do Campo de Batalha

**Node.js Local:**

```bash
npm.cmd
```

### 🎯 START GAME - Iniciar Servidores

**Level 1: Ativar API (JSON-Server)**

```bash
npm run api
```

📍 API disponível em: `http://localhost:3000/produtos`

**Level 2: Iniciar Aplicação Angular**

```bash
npm start
```

🌐 Jogo disponível em: `http://localhost:4200`

---

## 🎮 CONTROLES (Funcionalidades)

### 🏆 Sistema de Rotas

| Rota                      | Comando               | Poder Especial                    |
| ------------------------- | --------------------- | --------------------------------- |
| `/painel-principal`     | 🎯**GET**       | Lista todos os jogos do catálogo |
| `/cadastro-produto`     | ✨**POST**      | Adiciona novo jogo                |
| `/cadastro-produto/:id` | 🔧**GET + PUT** | Edita jogo existente              |
| 🗑️ Botão Excluir       | 💥**DELETE**    | Remove jogo do inventário        |

### 🛡️ Skills Implementadas

- ✅ **Listar Produtos** - GET de todos os jogos
- ✅ **Cadastrar Produto** - POST de novo jogo
- ✅ **Editar Produto** - PUT com atualização
- ✅ **Excluir Produto** - DELETE confirmado
- ✅ **Preview de Imagem** - Visualização em tempo real
- ✅ **Validação de Formulário** - Proteção contra bugs
- ✅ **Design Responsivo** - Joga em qualquer dispositivo

---

## 📦 INVENTÁRIO (Estrutura do Projeto)

```
loja-jogos/
├── 🎮 src/app/
│   ├── componentes/
│   │   ├── 🎯 painel-principal/      # Catálogo principal
│   │   ├── ➕ cadastro-produto/      # Formulário de cadastro
│   │   ├── 📋 menu/                  # Barra de navegação
│   │   └── 👣 rodape/                # Footer com contatos
│   ├── servicos/
│   │   └── 🔌 produto.service.ts    # API Communication Layer
│   └── 📝 app-routing-module.ts     # Sistema de rotas
├── 🖼️ public/imagens/              # Assets de imagens
├── 🗄️ db.json                      # Banco de dados fake
└── 📚 README.md                    # Este arquivo épico
```

---

## 🎯 ACHIEVEMENT UNLOCKED

### ✨ Service ProdutoService - The API Master

Localização: `src/app/servicos/produto.service.ts`

**Habilidades Especiais:**

```typescript
⚡ obterProdutos()           // GET - Lista todos
🔍 obterProdutoPorId(id)     // GET - Busca específico
✨ adicionarProduto(produto)  // POST - Cria novo
🔧 atualizarProduto(id, obj)  // PUT - Atualiza
💥 deletarProduto(id)         // DELETE - Remove
```

---

## 🎨 CUSTOMIZAÇÃO (Temas Visuais)

- 🌑 **Menu Dark Mode** - Navbar escura com logo
- 🎴 **Cards Animados** - Efeitos hover nos jogos
- 📱 **Layout Responsivo** - Grid adaptável
- ✨ **Ícones Bootstrap** - Interface moderna
- 🎭 **Preview Dinâmico** - Imagens em tempo real

---

## 👤 DESENVOLVEDOR - PLAYER INFO

**🎮 Nick:** Victor Vasconcelos
**📞 WhatsApp:** (61) 98438-5187
**🏫 Academia:** SENAI - Desenvolvedor Full Stack
**🎯 Status:** Em busca do próximo desafio!

---

## 📜 CONQUISTAS DO PROJETO

- [X] ✅ API REST integrada com sucesso
- [X] ✅ CRUD completo funcionando
- [X] ✅ Interface moderna e responsiva
- [X] ✅ Validações e tratamento de erros
- [X] ✅ Preview de imagens implementado
- [X] ✅ Navegação fluida entre rotas
- [X] ✅ Design temático de games

---

## 🏆 PRÓXIMAS FASES (Possíveis Upgrades)

- 🔐 Sistema de autenticação de usuários
- 🛒 Carrinho de compras funcional
- 💳 Integração com gateway de pagamento
- 🔍 Sistema de busca e filtros avançados
- ⭐ Sistema de avaliações e reviews
- 📊 Dashboard administrativo

---

## 🎮 GAME OVER?

**Não! É só o começo!** 🚀

Este projeto é parte da minha jornada como **Desenvolvedor Full Stack** e representa o domínio das técnicas fundamentais de integração frontend-backend.

**Continue jogando, continue codando!** 💻✨

---

<div align="center">

**Desenvolvido com ❤️ e muito ☕ por Victor Vasconcelos**
*SENAI - Desenvolvedor Full Stack 2026*

🎮 **PRESS START TO CONTINUE** 🎮

</div>
