# Portfolio Warda Guesmi

Portfolio personnel développé avec React + Vite, déployable sur GitHub Pages.

## 🚀 Installation locale

```bash
npm install
npm run dev
```

## 📦 Déploiement sur GitHub Pages

### 1. Créer un repo GitHub
- Va sur github.com → New repository
- Nomme-le `portfolio` (ou `warda-portfolio`)
- Laisse-le public

### 2. Configurer vite.config.js
Assure-toi que `base` correspond à ton repo :
```js
base: '/portfolio/',  // ou '/nom-du-repo/'
```

### 3. Configurer package.json
```json
"homepage": "https://TON-USERNAME.github.io/portfolio"
```
Remplace `TON-USERNAME` par ton nom GitHub.

### 4. Initialiser et pousser le code
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/TON-USERNAME/portfolio.git
git push -u origin main
```

### 5. Déployer
```bash
npm run deploy
```
Cette commande build le projet et publie sur la branche `gh-pages`.

### 6. Activer GitHub Pages
- Va dans ton repo GitHub → Settings → Pages
- Source : branche `gh-pages`, dossier `/root`
- Sauvegarde

### ✅ Ton portfolio sera accessible à :
`https://TON-USERNAME.github.io/portfolio`

## 🛠 Structure du projet

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── Education.jsx
│   ├── Projects.jsx
│   ├── Skills.jsx
│   ├── Certifications.jsx
│   └── Contact.jsx
├── App.jsx
├── main.jsx
└── index.css
```

## 🎨 Personnalisation
- Couleurs : modifier les variables CSS dans `index.css` (`:root`)
- Contenu : modifier les données directement dans chaque composant
- Liens réseaux sociaux : mettre à jour dans `Hero.jsx` et `Contact.jsx`
