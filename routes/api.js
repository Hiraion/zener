const express = require('express');
const security = require('../private/security');
const errorCodes = require('../private/error-codes');
const renderHTML = require('../private/render-html');
const product = require('../controllers/product');
const work = require('../controllers/work');
const customer = require('../controllers/customer');
const sale = require('../controllers/sale');
const api = express.Router();

api.get("/", security.ensureAuthenticated, renderHTML);
api.get("/customer/ui", security.ensureAuthenticated, renderHTML);
api.get("/work/ui", security.ensureAuthenticated, renderHTML);
api.get("/sale/ui", security.ensureAuthenticated, renderHTML);
api.get("/product/ui", security.ensureAuthenticated, renderHTML);
api.get("/sql/ui", security.ensureAuthenticated, renderHTML);
api.post("/", security.ensureAuthenticated, renderHTML);
api.post("/customer/ui", security.ensureAuthenticated, renderHTML);
api.post("/work/ui", security.ensureAuthenticated, renderHTML);
api.post("/sale/ui", security.ensureAuthenticated, renderHTML);
api.post("/product/ui", security.ensureAuthenticated, renderHTML);
api.post("/sql/ui", security.ensureAuthenticated, renderHTML);

api.get("/customer/all", security.ensureAuthenticated, customer.getCustomers);
api.get("/work/all", security.ensureAuthenticated, work.getWorks);
api.get("/sale/all", security.ensureAuthenticated, sale.getSales);
api.get("/product/all", security.ensureAuthenticated, product.getProducts);

api.post("/customer/add", security.ensureAuthenticated, customer.insertCustomer);
api.post("/work/add", security.ensureAuthenticated, work.insertWork);
api.post("/sale/add", security.ensureAuthenticated, sale.insertSale);
api.post("/product/add", security.ensureAuthenticated, product.insertProduct);

api.post("/customer/edit", security.ensureAuthenticated, customer.updateCustomer);
api.post("/work/edit", security.ensureAuthenticated, work.updateWork);
api.post("/sale/edit", security.ensureAuthenticated, sale.updateSale);
api.post("/product/edit", security.ensureAuthenticated, product.updateProduct);

api.post("/customer/del", security.ensureAuthenticated, customer.deleteCustomer);
api.post("/work/del", security.ensureAuthenticated, work.deleteWork);
api.post("/sale/del", security.ensureAuthenticated, sale.deleteSale);
api.post("/product/del", security.ensureAuthenticated, product.deleteProduct);

api.get("/customer/:id", security.ensureAuthenticated, customer.getCustomer);
api.get("/work/:id", security.ensureAuthenticated, work.getWork);
api.get("/sale/:id", security.ensureAuthenticated, sale.getSale);
api.get("/product/:id", security.ensureAuthenticated, product.getProduct);

api.use(errorCodes(404).send);
module.exports = api;