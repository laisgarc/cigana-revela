# Raissa Vitória — landing page em React

Landing page de Baralho Cigano em React, TypeScript e Vite, com CSS responsivo, fontes locais e HTML pré-renderizado para SEO. Identidade em preto, rubi, marfim e dourado discreto.

## Executar

```sh
npm install
npm run dev
```

## Verificar e gerar produção

```sh
npm test
npm run build
npm run preview
```

`build` verifica TypeScript, gera `dist/` e pré-renderiza o conteúdo. A página é hidratada pelo React no navegador. Não há dependência de fontes ou imagens remotas.

## Editar

| Arquivo | Conteúdo |
| --- | --- |
| `src/content.ts` | Dados públicos, hero, temas, etapas, apresentação e perguntas frequentes |
| `src/App.tsx` | Composição das seções e textos complementares |
| `src/styles.css` | Paleta, tipografia, espaçamento e breakpoints |
| `src/components/CardArtwork.tsx` | Ilustrações vetoriais decorativas originais |
| `src/components/Contact.tsx` | Botões, evento de clique e alternativa de contato |
| `src/lib/contact.js` | Validação do número e montagem do link do WhatsApp |
| `index.html` | Título, descrição, canonical, Open Graph e dados estruturados |
| `public/` | Favicon, robots.txt e sitemap |

## Conectar o WhatsApp

Copie `.env.example` para `.env.local` e preencha `VITE_WHATSAPP_NUMBER` com o número oficial internacional, somente dígitos. Reinicie o servidor de desenvolvimento ou gere novamente o build.

O número oficial informado, **+55 (11) 99674-9499**, já está configurado em `src/content.ts`. Todos os botões abrem uma conversa com mensagem pronta. A variável de ambiente é uma substituição opcional. Se houver uma configuração inválida, os botões abrem um diálogo informando a indisponibilidade e oferecendo o Instagram oficial, sem encaminhar a um telefone fictício.

As variáveis `VITE_*` são públicas no bundle: nunca coloque segredos nelas. Para builds em outro ambiente, configure a mesma variável antes de executar o build.

## Conteúdo pendente

- Confirmar nome de marca, modalidades, preços, duração e regras de atendimento.
- Confirmar o texto de apresentação com Raissa.
- Adicionar fotografia real autorizada, caso desejado; a versão atual usa ilustrações, sem simular um retrato da profissional.
- Depoimentos foram omitidos porque nenhum relato autorizado foi fornecido.
- Não há promessas de resultados, avaliações inventadas ou números de atendimentos.

## Comportamentos

- Menu mobile com `aria-expanded` e fechamento por Escape ou navegação.
- FAQ com elementos nativos `details` e `summary`, utilizável por teclado.
- Contato fixo aparece após a hero sair da tela; no celular, vira barra inferior com espaço reservado no rodapé.
- Diálogo nativo com foco contido, Escape e retorno do foco ao controle que o abriu.
- Animações leves respeitam `prefers-reduced-motion`.
- Link para pular ao conteúdo e foco de teclado visível.
- Cliques válidos disparam `contact:whatsapp` com a posição do botão. Nenhum serviço de analytics está instalado e a página não grava dados em cookies ou localStorage.

## SEO e publicação

Atualize canonical, Open Graph, dados estruturados, sitemap e robots se mudar o domínio. O HTML de produção contém a copy mesmo sem JavaScript. O acesso privado da hospedagem limita a indexação pública até que a proprietária decida alterar a audiência.

A configuração de hospedagem fica em `.openai/hosting.json`. `dist/` e `node_modules/` não são versionados.
