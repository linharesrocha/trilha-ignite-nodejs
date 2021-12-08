import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/implementations/CategoriesRepository';
import { createCategoryController } from '../useCases/createCategory';
import { listCategoriesController } from '../useCases/listCategories';

const categoriesRoutes = Router();

categoriesRoutes.post("/", (request, response) => {
   return createCategoryController.handle(request, response);
})

categoriesRoutes.get("/", (request, response) => {
    return listCategoriesController.handle(request, response);
})

export { categoriesRoutes };