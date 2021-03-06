console.log(process.env.DATABASE_URL);

module.exports = {
  "type": "postgres",
  "url": process.env.DATABASE_URL,
  "entities": [
    ".dist/src/modules/**/infra/typeorm/entities/*.js"
  ],
  "migrations": [
    ".dist/src/shared/infra/typeorm/migrations/*.js"
  ],
  "cli": {
    "migrationsDir": "./src/shared/infra/typeorm/migrations"
  }
},
{
  "name": "mongo",
  "type": "mongodb",
  "host": "localhost",
  "port": 27017,
  "database": "gobarber",
  "useUnifiedTopology": true,
  "entities": [
    "./src/modules/**/infra/typeorm/schemas/*.js"
  ]
}

