# Portfólio - Cleydson Freitas

> **Back End Developer** | **DevSecOps & Purple Team** | **Segurança da Informação**

Portfólio pessoal desenvolvido com foco em performance, acessibilidade e estética cyberpunk/hacker. Projeto estático, sem dependências de build, pronto para deploy em qualquer hosting estático.

---

## 🚀 Tech Stack

| Categoria | Tecnologias |
|-----------|-------------|
| **Linguagens** | Java, Python, C# |
| **Backend** | Spring Boot, FastAPI, .NET Core |
| **Segurança** | DevSecOps, Purple Team, Pentest, SAST/DAST, SDLC Seguro |
| **Infraestrutura** | Docker, Kubernetes, Terraform, AWS, Linux/Kali |
| **CI/CD** | GitHub Actions, GitLab CI, Jenkins |
| **Ferramentas** | Burp Suite, OWASP ZAP, Nmap, Metasploit, Wireshark |

---

## 🎯 Projetos em Destaque

| Projeto | Descrição | Tech Stack |
|---------|-----------|------------|
| **Desafio 30** | 30 projetos práticos (fácil/médio/difícil) em Java, Python, C# focados em lógica e secure coding | Java, Python, C#, Secure SDLC |
| **Automação de Varredura** | Pipeline CI/CD com SAST/DAST (OWASP ZAP, Trivy, Semgrep) para apps containerizadas | Python, Docker, GitHub Actions |
| **Laboratório de Redes Seguro** | Ambiente isolado Kali Linux para simulação de ataques e validação de regras de detecção | Kali Linux, Suricata, Zeek, Wireshark |

---

## 🎓 Formação & Certificações

- **Segurança da Informação** — FATEC Araraquara (4º semestre)
- **DevSecOps Specialization** — Programa Hackers do Bem
- **Analista de Produção** — Experiência prévia em operações

---

## 🛠️ Como Executar Localmente

```bash
# Clone o repositório
git clone https://github.com/cleydsonsfreitas/portfolio.git
cd portfolio

# Abra diretamente no navegador (sem build necessário)
# Windows:
start index.html

# Linux/Mac:
open index.html  # ou xdg-open index.html
```

> **Nota:** Por ser um projeto estático puro (HTML/CSS/JS vanilla), não requer Node.js, npm, Docker ou qualquer processo de build. Basta abrir o `index.html` no navegador.

---

## 📁 Estrutura do Projeto

```
portfolio/
├── index.html          # HTML principal
├── css/
│   └── style.css       # Estilos completos (CSS Variables, Grid, Flexbox)
├── js/
│   └── script.js       # Lógica: typing effects, smooth scroll
├── assets/
│   ├── arquivo cubo.gif        # Cubo mágico animado (header)
│   └── arquivo pendrive.jpeg   # Ícone pendrive (botão fixo)
├── .gitignore
└── README.md
```

---

## 🎨 Design System

| Token | Valor | Uso |
|-------|-------|-----|
| `--bg` | `#000000` | Background principal |
| `--bg-elevated` | `#0a0a0a` | Cards, seções alternadas |
| `--bg-deep` | `#050505` | Footer |
| `--fg` | `#e0e0e0` | Texto principal |
| `--fg-muted` | `#888888` | Texto secundário |
| `--accent` | `#00cc66` | Destaques, links, bordas (verde neon) |
| `--accent-dim` | `#009944` | Hover states |
| `--border` | `#1a1a1a` | Divisores, bordas sutis |

**Tipografia:**
- **Títulos/Code:** `JetBrains Mono` (monoespaçada)
- **Corpo:** `Inter` (sans-serif)

---

## ♿ Acessibilidade

- ✅ HTML semântico (`header`, `nav`, `main`, `section`, `footer`)
- ✅ ARIA labels e roles (`role="banner"`, `aria-label`, `aria-live`)
- ✅ Contraste WCAG AA (verde `#00cc66` sobre preto `#000000`)
- ✅ Focus visible em todos elementos interativos
- ✅ `prefers-reduced-motion` respeitado
- ✅ Navegação por teclado completa
- ✅ Textos alternativos em imagens

---

## 🚀 Deploy

### Netlify (Recomendado)
```bash
# Arraste a pasta do projeto para https://app.netlify.com/drop
# Ou conecte o repositório GitHub para deploy contínuo
```

### Vercel
```bash
npx vercel --prod
```

### GitHub Pages
1. Settings → Pages → Source: "Deploy from a branch"
2. Branch: `main` / `(root)`
3. Save → URL disponível em `https://cleydsonsfreitas.github.io/portfolio`

### Cloudflare Pages
```bash
# Conecte o repositório no dashboard Cloudflare Pages
# Build command: (vazio) | Output directory: (vazio)
```

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para detalhes.

---

## 📬 Contato

- **GitHub:** [@cleydsonsfreitas](https://github.com/cleydsonsfreitas)
- **LinkedIn:** [cleydsonfreitas](https://www.linkedin.com/in/cleydsonfreitas/)
- **Email:** [cleydsonsoaresdefreitas@gmail.com](mailto:cleydsonsoaresdefreitas@gmail.com)

---

<p align="center"><strong>© 2026 • Design by Cleydson Freitas</strong></p>