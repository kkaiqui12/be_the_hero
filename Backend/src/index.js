const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors());

app.use(express.json());

app.use(routes);
/**
 * Rota/Recurso
 */

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma rota no back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parametros:
 * 
 * Query Params: Parametros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route Params: Parametros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos 
 */

 /**
  * SQL: MySQL, SQLite, PostgreSQL, Oracle, Microsoft SQL Sever
  * NoSQL: MongoDB, CouchDB, etc.
  */

  /**
   * Driver: SELECT * FROM users
   * Query Builder: table("users").select("*").where()
   */



app.listen(3333);
