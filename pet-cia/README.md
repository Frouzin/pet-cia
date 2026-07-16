# Pet&Cia — Site (protótipo em Angular)

Site institucional + vitrine de produtos da **Pet&Cia**. Feito em Angular 22.
Veja o escopo completo em [`../ESCOPO.md`](../ESCOPO.md).

## ⚠️ Importante: o `&` na pasta `Pet&Cia`

No Windows, o caractere `&` no caminho da pasta (`F:\Codigos\Pet&Cia`) **quebra os
scripts do npm** (`npm start`, `npm run build`), porque o `cmd.exe` interpreta o
`&` como separador de comandos.

**Recomendação:** renomear a pasta para algo sem `&`, por exemplo `PetCia`,
`Pet-Cia` ou `Pet-e-Cia`. Depois disso, tudo funciona normalmente:

```bash
npm start          # sobe o servidor em http://localhost:4200
npm run build      # gera a versão de produção
npm test           # roda os testes
```

### Enquanto a pasta tiver `&` (contorno)

Rode o Angular CLI direto pelo Node, de dentro da pasta `pet-cia`:

```bash
node node_modules/@angular/cli/bin/ng.js serve --port 4200
node node_modules/@angular/cli/bin/ng.js build
```

## Estrutura

```
src/
  index.html                 # título, meta tags e fontes
  styles.scss                # design tokens (cores, tipografia) + estilos globais
  app/
    app.ts / app.html        # shell: cabeçalho + rotas + rodapé + botão WhatsApp
    app.routes.ts            # rotas das 4 páginas
    data/site-data.ts        # ▶ CONTEÚDO de demonstração (troque pelos dados reais)
    layout/                  # header, footer
    shared/product-card/     # card de produto reutilizável
    pages/                   # home, sobre, catalogo, contato
```

## Onde trocar o conteúdo

Quase tudo (produtos, categorias, depoimentos, endereço, WhatsApp, horários)
está centralizado em **`src/app/data/site-data.ts`**. Basta editar esse arquivo
para o site refletir os dados reais da loja.
