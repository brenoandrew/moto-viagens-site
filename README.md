# Moto Viagens - Site em Construção

Site de "em construção" para a plataforma Moto Viagens, uma empresa especializada em viagens de motocicleta pelo Brasil.

## 📱 Demo

[Ver site ao vivo](motoviagens.com.br)

## 🚀 Funcionalidades

- **Background de vídeo responsivo** - Suporte a múltiplos formatos
- **Design responsivo** - Funciona perfeitamente em desktop e mobile
- **Formulário de e-mail** - Captura leads interessados no lançamento
- **Animações suaves** - Experiência de usuário envolvente
- **Informações de contato** - Links para redes sociais e comunicação
- **SEO otimizado** - Meta tags e estrutura semântica
- **Performance otimizada** - Carregamento rápido e eficiente

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com Flexbox e Grid
- JavaScript vanilla (ES6+)
- Font Awesome (ícones)
- Google Fonts (tipografia)

## 📁 Estrutura do Projeto

```
moto-viagens-site/
├── index.html              # Página principal
├── css/
│   └── styles.css          # Estilos CSS
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── assets/
│   ├── videos/             # Vídeos de background
│   │   ├── background-video.mp4
│   │   └── background-video.webm
│   └── images/             # Imagens do site
├── README.md               # Documentação
└── .gitignore             # Arquivos ignorados pelo Git
```

## 🎥 Como adicionar seu vídeo de background

1. Coloque seu arquivo de vídeo na pasta `assets/videos/`
2. Renomeie para `background-video.mp4` ou edite o caminho no `index.html`
3. Para melhor compatibilidade, converta também para `.webm`
4. Tamanho recomendado: máximo 1920x1080, duração de 10-30 segundos

### Formatos suportados:
- MP4 (H.264) - compatibilidade geral
- WebM (VP9) - melhor compressão
- OGV - fallback adicional

## 🚀 Como fazer deploy no GitHub Pages

### 1. Fork ou clone este repositório

```bash
git clone https://github.com/brenoandrew/moto-viagens-site.git
cd moto-viagens-site
```

### 2. Adicione seus arquivos de vídeo

- Coloque seu vídeo na pasta `assets/videos/`
- Atualize os caminhos no `index.html` se necessário

### 3. Faça commit das mudanças

```bash
git add .
git commit -m "Adiciona vídeo de background e personaliza conteúdo"
git push origin main
```

### 4. Ative o GitHub Pages

1. Vá para Settings do seu repositório
2. Clique em "Pages" no menu lateral
3. Em "Source", selecione "Deploy from a branch"
4. Escolha "main" como branch e "/ (root)" como folder
5. Clique em "Save"

### 5. Acesse seu site

Seu site estará disponível em: `https://brenoandrew.github.io/moto-viagens-site`

## ⚙️ Personalização

### Alterando informações da empresa

Edite as seguintes seções no `index.html`:

- **Nome da empresa**: Altere "MOTO VIAGENS" 
- **Slogan**: Modifique "Aventuras Sobre Duas Rodas"
- **Descrição**: Atualize o texto explicativo
- **Contatos**: Substitua email, telefone e redes sociais
- **Funcionalidades**: Edite a lista de recursos futuros

### Customizando cores

No arquivo `css/styles.css`, altere as variáveis de cor:

```css
/* Cor principal (laranja) */
#FF6B00 -> sua_cor_primaria

/* Cor de fundo */
#1a1a1a -> sua_cor_fundo
```

### Modificando formulário de e-mail

No `js/script.js`, você pode integrar com serviços como:

- Mailchimp
- Sendinblue  
- Netlify Forms
- Formspree
- Seu próprio backend

## 📱 Responsividade

O site é totalmente responsivo e funciona em:

- ✅ Desktop (1920px+)
- ✅ Laptop (1366px)
- ✅ Tablet (768px)
- ✅ Mobile (320px+)

## 🔧 Desenvolvimento Local

Para rodar localmente:

```bash
# Clone o repositório
git clone https://github.com/brenoandrew/moto-viagens-site.git

# Entre na pasta
cd moto-viagens-site

# Abra com um servidor local (ex: Live Server no VS Code)
# ou use Python:
python -m http.server 8000

# Acesse http://localhost:8000
```

## 📈 SEO e Performance

### Otimizações incluídas:

- Meta tags para SEO
- Schema.org estruturado
- Imagens otimizadas
- CSS e JS minificados (produção)
- Lazy loading de recursos
- Preload de fonts críticas

### Para melhorar ainda mais:

- Comprima os vídeos (recomenda-se < 5MB)
- Use CDN para assets
- Configure cache headers
- Adicione service worker (PWA)

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

Se você encontrar algum problema ou tiver dúvidas:

1. Abra uma [Issue](https://github.com/seuusuario/moto-viagens-site/issues)
2. Entre em contato: [contato@motoviagens.com.br](mailto:contato@motoviagens.com.br)

---

⭐ Se este projeto te ajudou, não esqueça de dar uma estrela no repositório!

**Desenvolvido com ❤️ para a comunidade motociclística brasileira**