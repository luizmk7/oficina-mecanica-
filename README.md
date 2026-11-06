# Clara Auto — Modelo de oficina

Site estático responsivo em HTML, CSS e JavaScript, com carrosséis, marcas animadas e microanimações. Não precisa de chave de API, dependências ou compilação.

## Arquivos

- `index.html` contém estrutura, textos, estilos principais e carrosséis.
- `config.js` contém serviços e número do WhatsApp.
- `motion.css` e `motion.js` contêm as animações.
- `vercel.json` configura a publicação estática.

## Editar no Google AI Studio

Use estes arquivos como base do projeto e peça alterações no HTML, CSS e JavaScript existentes. A importação de projetos depende dos recursos disponíveis na sua conta. O ZIP contém o código-fonte editável completo.

## Personalizar

Configure `siteConfig.whatsapp` em `config.js` com DDI e DDD, somente números. Vazio mantém a demonstração de mensagens. Edite nome, endereço, avaliações, marcas, comodidades e perguntas em `index.html`. As fotos são carregadas de URLs externas do Unsplash. Substitua por imagens da oficina, preferencialmente na pasta `assets/`.

Os dados, depoimentos, pagamentos e diferenciais atuais são ilustrativos. Confirme os dados reais antes de divulgar para clientes.

## Visualizar localmente

Abra `index.html` no navegador ou execute `python3 -m http.server 8000` nesta pasta e acesse http://localhost:8000.

## Publicar na Vercel

Importe o repositório GitHub. Selecione o preset Other, diretório raiz do projeto e deixe o comando de build vazio. A pasta de saída é `.`. Os arquivos deste ZIP devem ficar na raiz do repositório. Depois, publique. Alterações enviadas ao branch de produção do GitHub podem gerar novos deployments pela integração da Vercel.
