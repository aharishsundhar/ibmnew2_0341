import { Request, Response, NextFunction } from "express";
import { task1Controller } from '../controller/task1Controller';


export class Routes {
    private task1: task1Controller = new task1Controller();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/task1').post(this.task1.GpCreate);
     }

}