# Tarun Bhatia — Privacy Engineer & Data Governance Architect

**LawXTech · lawxtech.in**

> End-to-end Zero-Trust privacy governance architecture across Microsoft Purview, Azure, and Entra ID — demonstrating statutory compliance under India DPDP Act 2023, Australian Privacy Act 1988, and PCI-DSS.

---

## 🏗️ The Nexora Consulting Case Study

**Nexora Consulting** is a simulated cross-border enterprise (India + Australia) used to demonstrate real enterprise privacy engineering skills across 6 architecture acts:

| Act | Topic | Screenshots |
|-----|-------|-------------|
| 01 | Identity Foundation & Zero-Standing-Privilege (Entra ID + PIM) | 01–05 |
| 02 | Cloud Data Residency & Hierarchical Azure RBAC + KQL Audit | 06–10, 30 |
| 03 | Automated Data Discovery & PII Classification (Purview) | 11–15 |
| 04 | Cryptographic Labels, Custom NDIS Regex & Live DLP Blocking | 16–22 |
| 05 | Copilot & Generative AI Governance | 23–24 |
| 06 | Statutory DSAR Fulfillment & Third-Party Redaction | 25–29 |

> ⚠️ All organizations, users, and data are **fictional** — created solely for demonstrating privacy engineering skills.

---

## 📁 Repository Structure

```
nexora-portfolio/
├── index.html                  # Main portfolio (single-page)
├── style.css                   # Styling (dark Azure theme)
├── script.js                   # Interactivity (lightbox, accordion, animations)
├── setup-screenshots.ps1       # One-click screenshot copy script
├── assets/
│   └── screenshots/            # All 30 evidence screenshots go here
│       ├── 01-entra-employee-directory.png.png
│       ├── 02-entra-security-groups-part1.png.png
│       ├── ...
│       └── 30-azure-rbac-kql-audit.png
└── README.md
```

---

## 🚀 Setup & Deployment

### Step 1 — Copy Screenshots

Run the setup script to copy screenshots from your Desktop:
```powershell
cd C:\Users\acer\nexora-portfolio
.\setup-screenshots.ps1
```

Or manually copy all files from `C:\Users\acer\Desktop\Nexora-Portfolio-Screenshots\` into `assets/screenshots/`.

### Step 2 — Add GitHub Links

Edit `index.html` and update:
- `href="https://github.com"` → your actual GitHub repo URL
- `href="https://linkedin.com"` → your LinkedIn profile URL

### Step 3 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio commit — Nexora Consulting Case Study"
git branch -M main
git remote add origin https://github.com/tbinitial-cyber/nexora-portfolio.git
git push -u origin main
```

### Step 4 — Deploy on Cloudflare Pages

1. Go to [Cloudflare Pages](https://pages.cloudflare.com)
2. Click **Create a project** → **Connect to Git**
3. Select your GitHub repo (`nexora-portfolio`)
4. Build settings:
   - **Build command:** *(leave empty — no build needed)*
   - **Build output directory:** `/` (root)
5. Click **Save and Deploy**
6. Your site will be live at `https://nexora-portfolio.pages.dev`

### Step 5 — Add Custom Domain (lawxtech.in)

1. In Cloudflare Pages → your project → **Custom domains**
2. Click **Set up a custom domain** → enter `lawxtech.in`
3. Follow DNS instructions (add CNAME record pointing to `nexora-portfolio.pages.dev`)
4. Wait ~5 minutes → `lawxtech.in` is live! ✅

---

## 🛠️ Tech Stack

- **Frontend:** Pure HTML5 + CSS3 + Vanilla JavaScript (no frameworks, no build step)
- **Fonts:** Inter + JetBrains Mono (Google Fonts)
- **Deployment:** GitHub → Cloudflare Pages → lawxtech.in
- **Features:** Accordion case study, full lightbox gallery, KQL code block, RBAC table, responsive design

---

## 📋 Regulatory Frameworks Covered

| Framework | Jurisdiction | Sections Demonstrated |
|-----------|-------------|----------------------|
| India DPDP Act 2023 | 🇮🇳 India | Sections 6, 8(5), 11 |
| Australian Privacy Act 1988 | 🇦🇺 Australia | APP 6, APP 11, APP 12 |
| PCI-DSS | Global | Credit Card data protection |

---

## 🔗 Links

- **Live Site:** [lawxtech.in](https://lawxtech.in)
- **Architect:** Tarun Bhatia — LawXTech

---

*© 2026 Tarun Bhatia · LawXTech · lawxtech.in*
