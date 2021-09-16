import * as express from 'express';
// import {createPurchaseHandler} from './controller/purchase.controller'
// import { validateRequest } from "./middleware";
// import { createPurchaseSchema } from './schema/purchase.schema';


const cheeses = require('./data/cheeses.json');
const purchaseHistory = require('./data/purchaseHistory.json')

const router = express.Router();

router.get('/api/cheeses', (req, res, next) => {

    res.json(cheeses);
});

// Create purchase endpoint - to simulate successful created response 
router.post('/api/purchase', (req, res) => {

    res.json("You order have been created!");

});

// This api endpoint requires to set up User to be able to save mongoDB
// router.post('/api/purchase', [validateRequest(createPurchaseSchema)], createPurchaseHandler)

// Get recently purchased
router.get('/api/purchased', (req, res) => {
    res.json(purchaseHistory)
})

export default router;