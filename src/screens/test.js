module.exports = {
  apps: [{
    name: "Final Project Backend",
    script: "./dist/app.js",
    env: {
      NODE_ENV: "production",
      MONGO_URI: "mongodb+srv://gradsby06:vdoTa4MEnzgUG2D5@fp-cluster.gmduc.mongodb.net/?retryWrites=true&w=majority&appName=FP-Cluster",
      JWT_SECRET: "rahasiakelulusan",
      FIREBASE_BUCKET: "gt-hacktiv8.appspot.com",
      PORT: 80,
      REDIS_URI: "redis://default:cJe38yGcWMsuc6EcDTExtcJ7gudqCa11@redis-13255.c1.ap-southeast-1-1.ec2.redns.redis-cloud.com:13255",
      NODEMAILER_USER: "muhfarros28@gmail.com",
      NODEMAILER_PASS: "xscregntbomfgvqe",
      MIDTRANS_SERVER_KEY: 'SB-Mid-server-zd8fKrgxKL9YGUy_yzPIFqXq'
    }
  }]
}
