# 🔐 Configuration des Secrets GitHub

Ce fichier explique comment configurer les secrets GitHub nécessaires pour le déploiement automatique.

## 📋 Secrets Requis

### 1. Render (Backend)

#### `RENDER_API_KEY`
- **Description** : Clé API Render pour déployer automatiquement
- **Où l'obtenir** : 
  1. Connectez-vous à [Render.com](https://render.com)
  2. Allez dans **Account Settings** → **API Keys**
  3. Cliquez sur **Create API Key**
  4. Copiez la clé générée

#### `RENDER_SERVICE_ID`
- **Description** : ID du service backend sur Render
- **Où l'obtenir** :
  1. Dans votre dashboard Render
  2. Sélectionnez votre service backend
  3. L'ID est dans l'URL : `https://dashboard.render.com/web/your-service-id`
  4. Ou dans **Settings** → **General** → **Service ID**

#### `RENDER_SERVICE_NAME`
- **Description** : Nom de votre service backend (sans .onrender.com)
- **Exemple** : Si votre URL est `https://communiconnect-backend.onrender.com`, le nom est `communiconnect-backend`

### 2. Vercel (Frontend)

#### `VERCEL_TOKEN`
- **Description** : Token d'accès Vercel
- **Où l'obtenir** :
  1. Connectez-vous à [Vercel.com](https://vercel.com)
  2. Allez dans **Settings** → **Tokens**
  3. Cliquez sur **Create Token**
  4. Donnez un nom (ex: "GitHub Actions")
  5. Copiez le token généré

#### `ORG_ID`
- **Description** : ID de votre organisation Vercel
- **Où l'obtenir** :
  1. Dans votre dashboard Vercel
  2. Allez dans **Settings** → **General**
  3. L'**Team ID** est votre **ORG_ID**

#### `PROJECT_ID`
- **Description** : ID de votre projet frontend
- **Où l'obtenir** :
  1. Dans votre dashboard Vercel
  2. Sélectionnez votre projet
  3. Allez dans **Settings** → **General**
  4. L'**Project ID** est affiché

#### `VERCEL_PROJECT_NAME`
- **Description** : Nom de votre projet Vercel
- **Exemple** : Si votre URL est `https://communiconnect.vercel.app`, le nom est `communiconnect`

## 🔧 Configuration des Secrets

### Étape 1 : Accéder aux Secrets GitHub

1. **Allez sur votre repository GitHub**
2. **Cliquez sur Settings** (onglet)
3. **Dans le menu de gauche, cliquez sur Secrets and variables** → **Actions**

### Étape 2 : Ajouter les Secrets

Pour chaque secret ci-dessus :

1. **Cliquez sur "New repository secret"**
2. **Nom** : Entrez le nom exact du secret (ex: `RENDER_API_KEY`)
3. **Value** : Entrez la valeur correspondante
4. **Cliquez sur "Add secret"**

### Étape 3 : Vérification

Vos secrets devraient apparaître dans la liste avec un indicateur "Protected" à côté.

## 🚀 Test de la Configuration

### 1. Déclenchement Manuel

1. **Allez dans l'onglet Actions de votre repository**
2. **Sélectionnez le workflow "🚀 Déploiement Automatique CommuniConnect"**
3. **Cliquez sur "Run workflow"**
4. **Sélectionnez la branche main**
5. **Cliquez sur "Run workflow"**

### 2. Vérification des Logs

1. **Cliquez sur l'exécution en cours**
2. **Vérifiez que chaque étape se termine avec succès**
3. **Regardez les logs pour détecter d'éventuelles erreurs**

## 🔍 Dépannage des Secrets

### Erreur : "Secret not found"

- **Vérifiez** que le nom du secret est exactement le même dans le workflow
- **Vérifiez** que le secret est bien configuré dans GitHub

### Erreur : "Invalid API key"

- **Vérifiez** que votre clé API Render est valide
- **Vérifiez** que votre token Vercel n'a pas expiré

### Erreur : "Service not found"

- **Vérifiez** que le `RENDER_SERVICE_ID` correspond à un service existant
- **Vérifiez** que le `PROJECT_ID` correspond à un projet Vercel existant

## 📚 Ressources

- [Documentation GitHub Secrets](https://docs.github.com/en/actions/security-guides/encrypted-secrets)
- [Documentation Render API](https://render.com/docs/api)
- [Documentation Vercel API](https://vercel.com/docs/rest-api)

## ⚠️ Sécurité

- **Ne partagez jamais** vos secrets
- **Régénérez** vos clés API si elles sont compromises
- **Utilisez des permissions minimales** pour vos tokens
- **Surveillez** l'utilisation de vos clés API

---

**✅ Une fois tous les secrets configurés, votre déploiement automatique sera opérationnel !**
