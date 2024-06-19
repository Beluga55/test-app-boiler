
    import { Router } from "express";

    import {
      createBookHandler,
      deleteBookHandler,
      findAllBookHandler,
      findBookHandler,
      updateBookHandler,
    } from "./book.controller";
    import validate from "../../middlewares/validate-request";

    import { createBookSchema } from "./book.schema";

    const router = Router();

    
    router.post(
      "/",
      [validate(createBookSchema)],
      createBookHandler
    );
  
    
    router.get("/", [], findAllBookHandler);
    router.get("/:id", [], findBookHandler);
  
    
    router.put(
      "/:id",
      [validate(createBookSchema)],
      updateBookHandler
    );
  
    
    router.delete("/:id", [], deleteBookHandler);
  

    export default router;
  