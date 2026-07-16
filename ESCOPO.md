# Pet&Cia — Escopo do Site (Proposta / Modelo)

> Documento para apresentação ao dono da loja. Acompanha o **protótipo navegável**
> feito em Angular. Todo o conteúdo (textos, produtos, telefone, endereço) é
> **ilustrativo** e deve ser substituído pelas informações reais da loja.

---

## 1. Objetivo do site (fase atual)

Criar a **presença digital** da Pet&Cia: um site institucional e uma **vitrine
de produtos** que transmita confiança, mostre o que a loja oferece e traga o
cliente para o WhatsApp / loja física.

Nesta primeira fase **não há venda online** (sem carrinho, cadastro ou
pagamento). O site é preparado para receber essa evolução no futuro.

---

## 2. Páginas e conteúdo

| Página | O que tem |
|---|---|
| **Início** | Banner de abertura, números da loja, categorias em destaque, diferenciais, produtos em destaque, depoimentos e chamada para o WhatsApp. |
| **Sobre a loja** | História da Pet&Cia, valores, números e apresentação da equipe. Cria confiança. |
| **Catálogo (vitrine)** | Produtos organizados por categoria, com filtro. Cada item leva a uma consulta rápida pelo WhatsApp. **Sem preço de venda fechado / sem carrinho.** |
| **Contato & Localização** | Endereço, WhatsApp, e-mail, horários, mapa e formulário de mensagem. |

**Presente em todas as páginas:** cabeçalho fixo com menu, botão flutuante de
WhatsApp e rodapé com contatos.

---

## 3. Identidade visual

- **Cores:** azul-petróleo (confiança) + coral (energia/acolhimento), fundo claro.
- **Estilo:** moderno, leve e amigável — cara de "clínica/pet de bairro" cuidadosa.
- **Responsivo:** funciona bem em **celular, tablet e computador**.
- **Ícones/ilustrações:** hoje usamos elementos ilustrativos; serão trocados por
  **fotos reais da loja e dos produtos** na versão final.

---

## 4. O que já está pronto no protótipo

- [x] 4 páginas navegáveis e responsivas
- [x] Catálogo com filtro por categoria
- [x] Integração com WhatsApp (botão flutuante + botões de "consultar")
- [x] Formulário de contato (demonstrativo)
- [x] Link "como chegar" abrindo o Google Maps

---

## 5. O que a loja precisa fornecer para a versão final

1. **Logo** da Pet&Cia (se houver) e cores oficiais.
2. **Fotos** da loja, da equipe e dos principais produtos.
3. Textos reais: história da loja, diferenciais.
4. Dados de contato reais: endereço, telefones, e-mail, horários e redes sociais.
5. Lista de **categorias e produtos** que devem aparecer na vitrine.

---

## 6. Evolução futura (fase e-commerce)

Pensado para crescer sem refação. Possíveis próximos passos, quando o dono quiser:

- Carrinho de compras e checkout
- Pagamento online (Pix, cartão)
- Cálculo de frete / entrega no bairro
- Painel administrativo para cadastrar produtos e preços
- Login de clientes e histórico de pedidos
- Clube de fidelidade / assinatura de ração

---

## 7. Observações técnicas (resumo)

- Feito em **Angular** (mesma base que suportará a loja virtual no futuro).
- Estrutura organizada por páginas e componentes reutilizáveis.
- Os dados de demonstração ficam centralizados em um único arquivo
  (`src/app/data/site-data.ts`), fáceis de trocar pelos reais.
