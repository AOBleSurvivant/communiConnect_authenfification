const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    // En mode développement, forcer l'utilisation de MongoDB local
    if (process.env.NODE_ENV === 'development') {
      const localMongoURI = 'mongodb://localhost:27017/communiconnect';
      console.log('📝 Mode développement: tentative de connexion à MongoDB local:', localMongoURI);
      
      try {
        const conn = await mongoose.connect(localMongoURI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
          dbName: 'communiconnect',
          maxPoolSize: 10,
          serverSelectionTimeoutMS: 5000,
          socketTimeoutMS: 45000,
        });
        
        console.log('✅ MongoDB local connecté:', conn.connection.host);
        global.mongoConnected = true;
        return conn;
      } catch (localError) {
        console.log('⚠️ MongoDB local non disponible, continuation sans base de données');
        global.mongoConnected = false;
        return null;
      }
    }

    // Configuration MongoDB Atlas
    const mongoURI = process.env.MONGODB_URI || 'mongodb+srv://your-username:your-password@your-cluster.mongodb.net/communiconnect?retryWrites=true&w=majority';
    
    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.MONGODB_DB || 'communiconnect',
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log('✅ MongoDB Atlas connecté:', conn.connection.host);
    global.mongoConnected = true;
    
    return conn;
  } catch (error) {
    console.error('❌ Erreur de connexion MongoDB Atlas:', error.message);
    global.mongoConnected = false;
    
    // En mode développement, continuer sans MongoDB
    if (process.env.NODE_ENV === 'development') {
      console.log('⚠️ Mode développement: continuation sans base de données');
      return null;
    }
    
    // En production, arrêter le serveur
    if (process.env.NODE_ENV === 'production') {
      console.error('🚨 Erreur critique MongoDB en production');
      process.exit(1);
    }
    
    // En mode développement, continuer sans MongoDB
    console.log('📝 Mode développement: serveur continue sans MongoDB');
    return null;
  }
};

module.exports = connectDB; 