const express = require('express');
const app = express();
const routes = require('./routes');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./swagger.json');

app.use(cors());
app.use(express.json());
app.use(routes);
app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(3333);