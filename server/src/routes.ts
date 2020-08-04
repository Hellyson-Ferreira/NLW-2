
import express from 'express'
import ClassesController from './controllers/ClassesController'
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router()
const classesController = new ClassesController()
const connectionsControllers = new ConnectionsController();


routes.post('/classes', classesController.create)
routes.get('/classes', classesController.index)

routes.get('/connections', connectionsControllers.index);
routes.post('/connections', connectionsControllers.create);

export default routes