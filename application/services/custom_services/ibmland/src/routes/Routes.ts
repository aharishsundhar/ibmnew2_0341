import { Request, Response, NextFunction } from "express";
import { joinsController } from '../controller/joinsController';


export class Routes {
    private joins: joinsController = new joinsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/joins').post(this.joins.GpCreate);
     }

}