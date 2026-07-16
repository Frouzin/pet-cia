# Pet&Cia 🐾

Site institucional e **vitrine de produtos** para o petshop **Pet&Cia** — ração,
higiene, brinquedos e acessórios para pets. Desenvolvido em **Angular 22** como
protótipo para apresentação ao cliente.

> **Fase atual:** site institucional + vitrine (sem venda online).
> Estruturado para evoluir para e-commerce no futuro.

## ✨ Páginas

- **Início** — banner, categorias em destaque, diferenciais, produtos e depoimentos
- **Sobre a loja** — história, valores e equipe
- **Catálogo** — vitrine de produtos com filtro por categoria (sem carrinho)
- **Contato & Localização** — endereço, horários, mapa e formulário

## 🛠️ Tecnologias

- Angular 22 — standalone components, signals e novo control flow (`@if` / `@for`)
- SCSS com design tokens (paleta azul-petróleo + coral)
- Layout 100% responsivo (celular, tablet e desktop)
- Integração com WhatsApp

## 🚀 Como rodar

O código do app está na pasta [`pet-cia/`](pet-cia/):

```bash
cd pet-cia
npm install
npm start        # http://localhost:4200
```

Mais detalhes (e uma observação sobre pastas com `&` no nome no Windows) em
[`pet-cia/README.md`](pet-cia/README.md).

## 📄 Escopo do projeto

O documento de escopo para apresentação ao cliente está em [`ESCOPO.md`](ESCOPO.md).

## 📁 Estrutura

```
.
├── ESCOPO.md            # documento de escopo (apresentação ao cliente)
├── README.md            # este arquivo
└── pet-cia/             # aplicação Angular
    └── src/app/
        ├── data/        # conteúdo de demonstração (trocar pelos dados reais)
        ├── layout/      # cabeçalho e rodapé
        ├── pages/       # início, sobre, catálogo, contato
        └── shared/      # componentes reutilizáveis (card de produto)
```

---

🤖 Protótipo — todo o conteúdo e as imagens são ilustrativos.
