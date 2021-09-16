import { Request, Response } from 'express'
import { createPurchase } from '../service/purchase.service'

export async function createPurchaseHandler(req: Request, res: Response ) {
  const body = req.body;

  const purchase = await createPurchase({...body})

  return res.send(purchase)
  
}