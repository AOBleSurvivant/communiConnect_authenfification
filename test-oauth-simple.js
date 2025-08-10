// Test simple de la configuration OAuth Google
const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification de la configuration OAuth Google\n');

// Vérifier les fichiers de configuration
const serverConfigPath = path.join(__dirname, 'server', 'env.google-oauth.js');
const clientConfigPath = path.join(__dirname, 'client', 'env.google-oauth.js');
const guidePath = path.join(__dirname, 'GUIDE-GOOGLE-OAUTH.md');

console.log('📁 Fichiers de configuration :');
console.log(`✅ Serveur: ${fs.existsSync(serverConfigPath) ? 'Présent' : '❌ Manquant'}`);
console.log(`✅ Client: ${fs.existsSync(clientConfigPath) ? 'Présent' : '❌ Manquant'}`);
console.log(`✅ Guide: ${fs.existsSync(guidePath) ? 'Présent' : '❌ Manquant'}`);

// Vérifier la structure des dossiers
console.log('\n📂 Structure des dossiers :');
const serverAuthPath = path.join(__dirname, 'server', 'routes', 'auth.js');
const clientLoginPath = path.join(__dirname, 'client', 'src', 'pages', 'Auth', 'LoginPage.js');
const clientCallbackPath = path.join(__dirname, 'client', 'src', 'pages', 'Auth', 'AuthCallback.js');

console.log(`✅ Routes auth serveur: ${fs.existsSync(serverAuthPath) ? 'Présent' : '❌ Manquant'}`);
console.log(`✅ Page login client: ${fs.existsSync(clientLoginPath) ? 'Présent' : '❌ Manquant'}`);
console.log(`✅ Page callback client: ${fs.existsSync(clientCallbackPath) ? 'Présent' : '❌ Manquant'}`);

// Vérifier le package.json du serveur
console.log('\n📦 Dépendances serveur :');
try {
  const serverPackage = JSON.parse(fs.readFileSync(path.join(__dirname, 'server', 'package.json'), 'utf8'));
  const requiredDeps = ['axios', 'jsonwebtoken', 'express'];
  
  requiredDeps.forEach(dep => {
    const hasDep = serverPackage.dependencies && serverPackage.dependencies[dep];
    console.log(`  ${hasDep ? '✅' : '❌'} ${dep}: ${hasDep ? 'Installé' : 'Manquant'}`);
  });
} catch (error) {
  console.log('❌ Impossible de lire package.json du serveur');
}

// Instructions de configuration
console.log('\n🔧 Instructions de configuration :');
console.log('1. Créez un projet Google Cloud : https://console.cloud.google.com/');
console.log('2. Activez l\'API Google+ API');
console.log('3. Créez des identifiants OAuth 2.0');
console.log('4. Configurez les URIs de redirection :');
console.log('   - http://localhost:3000/auth/callback');
console.log('   - http://localhost:5000/api/auth/oauth/callback');
console.log('5. Copiez vos clés dans les fichiers .env');

// Vérifier si les fichiers .env existent
console.log('\n📝 Fichiers .env :');
const serverEnvPath = path.join(__dirname, 'server', '.env');
const clientEnvPath = path.join(__dirname, 'client', '.env');

if (fs.existsSync(serverEnvPath)) {
  console.log('✅ Serveur .env: Présent');
  const serverEnv = fs.readFileSync(serverEnvPath, 'utf8');
  const hasGoogleConfig = serverEnv.includes('GOOGLE_CLIENT_ID') && serverEnv.includes('GOOGLE_CLIENT_SECRET');
  console.log(`  ${hasGoogleConfig ? '✅' : '❌'} Configuration Google: ${hasGoogleConfig ? 'Complète' : 'Incomplète'}`);
} else {
  console.log('❌ Serveur .env: Manquant');
  console.log('  💡 Copiez server/env.google-oauth.js vers server/.env');
}

if (fs.existsSync(clientEnvPath)) {
  console.log('✅ Client .env: Présent');
  const clientEnv = fs.readFileSync(clientEnvPath, 'utf8');
  const hasGoogleConfig = clientEnv.includes('REACT_APP_GOOGLE_CLIENT_ID');
  console.log(`  ${hasGoogleConfig ? '✅' : '❌'} Configuration Google: ${hasGoogleConfig ? 'Complète' : 'Incomplète'}`);
} else {
  console.log('❌ Client .env: Manquant');
  console.log('  💡 Copiez client/env.google-oauth.js vers client/.env');
}

console.log('\n🚀 Prochaines étapes :');
console.log('1. Configurez vos clés Google OAuth');
console.log('2. Créez les fichiers .env');
console.log('3. Démarrez le serveur: cd server && npm run dev');
console.log('4. Démarrez le client: cd client && npm start');
console.log('5. Testez l\'authentification Google');

console.log('\n📚 Documentation :');
console.log('📖 Guide complet: GUIDE-GOOGLE-OAUTH.md');
console.log('🌐 Google Cloud Console: https://console.cloud.google.com/');
console.log('🔗 Documentation OAuth: https://developers.google.com/identity/protocols/oauth2');

console.log('\n' + '='.repeat(60));
console.log('🎯 Résumé de la configuration OAuth Google');
console.log('='.repeat(60));

const allFilesPresent = fs.existsSync(serverConfigPath) && 
                       fs.existsSync(clientConfigPath) && 
                       fs.existsSync(guidePath) &&
                       fs.existsSync(serverAuthPath) &&
                       fs.existsSync(clientLoginPath) &&
                       fs.existsSync(clientCallbackPath);

if (allFilesPresent) {
  console.log('✅ Tous les fichiers de configuration sont présents');
  console.log('✅ L\'authentification Google est prête à être configurée');
  console.log('⚠️  Il ne reste plus qu\'à ajouter vos vraies clés Google OAuth');
} else {
  console.log('❌ Certains fichiers de configuration sont manquants');
  console.log('🔧 Vérifiez la structure du projet');
}

console.log('\n🎉 Configuration OAuth Google terminée !');
