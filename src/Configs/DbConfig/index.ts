const config = {
  port: 4000,
  host: "http://localhost",
  app_url: "http://localhost",
  database: {
    port: 27017,
    username: null,
    password: null,
    host: "127.0.0.1",
    dbname: "my_mongo_db",
    reloadViewOnRestart: true,
  },
  corsOptions: {
    allowedHeaders: [
      "Origin",
      "X-Requested-With",
      "Content-Type",
      "Accept",
      "X-Access-Token",
      "Authorization",
      "Permission",
    ],
    credentials: true,
    methods: "GET,HEAD,OPTIONS,PUT,PATCH,POST,DELETE",
    origin: "*",
    preflightContinue: false,
  },
  jwt: {
    secret: "5A233AC25A43054EA8970673DD84FFC66D9884CDC8A04AB2192CD10744CBF7A3",
    issuer: "http://techphant.com",
    expiresIn: "5h",
  },
};

export { config };
