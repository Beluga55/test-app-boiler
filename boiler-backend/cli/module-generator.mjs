import { kebabToTitleCase } from "./helper.mjs";
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export const routeCreator = (resourceName, crud) => {

  const has = (operation) => crud.includes(operation);
  const createContent = `
    router.post(
      "/",
      [validate(create${kebabToTitleCase(resourceName)}Schema)],
      create${kebabToTitleCase(resourceName)}Handler
    );
  `;

  const readContent = `
    router.get("/", [], findAll${kebabToTitleCase(resourceName)}Handler);
    router.get("/:id", [], find${kebabToTitleCase(resourceName)}Handler);
  `

  const updateContent = `
    router.put(
      "/:id",
      [validate(create${kebabToTitleCase(resourceName)}Schema)],
      update${kebabToTitleCase(resourceName)}Handler
    );
  `

  const deleteContent = `
    router.delete("/:id", [], delete${kebabToTitleCase(resourceName)}Handler);
  `


  const fileContent = `
    import { Router } from "express";

    import {
      create${kebabToTitleCase(resourceName)}Handler,
      delete${kebabToTitleCase(resourceName)}Handler,
      findAll${kebabToTitleCase(resourceName)}Handler,
      find${kebabToTitleCase(resourceName)}Handler,
      update${kebabToTitleCase(resourceName)}Handler,
    } from "./${resourceName}.controller";
    import validate from "../../middlewares/validate-request";

    import { create${kebabToTitleCase(resourceName)}Schema } from "./${resourceName}.schema";

    const router = Router();

    ${has('create')? createContent : ''}
    ${has('read')? readContent : ''}
    ${has('update')? updateContent : ''}
    ${has('delete')? deleteContent : ''}

    export default router;
  `

  //write fileContent to modules/${resourceName}/${resourceName}.route.ts
  const filePath = `${__dirname}/../src/modules/${resourceName}/${resourceName}.route.ts`;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    
  });
}

export const serviceCreator = (resourceName) => {
  const fileContent = `
    import db from "../../utils/db.server";
    import { create${kebabToTitleCase(resourceName)}BodyType } from "./${resourceName}.schema";

    export async function create${kebabToTitleCase(resourceName)}(
      input: create${kebabToTitleCase(resourceName)}BodyType,
    ) {
      try {
        const ${resourceName} = await db.${resourceName}.create({
          data: { ...input },
        });

        return ${resourceName};
      } catch (error) {
        throw error;
      }
    }

    export async function find${kebabToTitleCase(resourceName)}(id) {
      try {
        const ${resourceName} = await db.${resourceName}.findFirst({
          where: {id},
        });
        return ${resourceName};
      } catch (error) {
        throw error;
      }
    }

    export async function findAll${kebabToTitleCase(resourceName)}s() {
      try {
        const ${resourceName}s = await db.${resourceName}.findMany();
        return ${resourceName}s;
      } catch (error) {
        throw error;
      }
    }

    export async function update${kebabToTitleCase(resourceName)}(
      input: create${kebabToTitleCase(resourceName)}BodyType,
      ${resourceName}Id: string
    ) {
      try {
        const ${resourceName} = await db.${resourceName}.update({
          where: {
            id: ${resourceName}Id,
          },
          data: { ...input },
        });

        return ${resourceName};
      } catch (error) {
        throw error;
      }
    }

    export async function delete${kebabToTitleCase(resourceName)}(id: string) {
      try {
        await db.${resourceName}.delete({
          where: {
            id: id,
          },
        });
      } catch (error) {
        throw error;
      }
    }
  `

  const filePath = `${__dirname}/../src/modules/${resourceName}/${resourceName}.service.ts`;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    
  });
}

export const controllerCreator = (resourceName) => {
  const fileContent = `
    import type { Request, Response } from "express";
    import { create${kebabToTitleCase(resourceName)}BodyType } from "./${resourceName}.schema";
    import {
      create${kebabToTitleCase(resourceName)},
      update${kebabToTitleCase(resourceName)},
      delete${kebabToTitleCase(resourceName)},
      findAll${kebabToTitleCase(resourceName)}s,
      find${kebabToTitleCase(resourceName)},
    } from "./${resourceName}.service";
    import type { payload } from "../../middlewares/check-user";

    import logger from "../../utils/logger";

    export async function create${kebabToTitleCase(resourceName)}Handler(
      req: Request<{}, {}, create${kebabToTitleCase(resourceName)}BodyType>,
      res: Response
    ) {
      try {
        const ${resourceName} = await create${kebabToTitleCase(resourceName)}(req.body);

        return res.json(${resourceName});
      } catch (error) {
        logger.error(error);
        return res.json("${kebabToTitleCase(resourceName)} Creation Failed");
      }
    }

    export async function update${kebabToTitleCase(resourceName)}Handler(
      req: Request,
      res: Response
    ) {
      try {
        const id = req.params.id as string;
        const ${resourceName} = await update${kebabToTitleCase(resourceName)}(req.body, id);

        return res.json(${resourceName});
      } catch (error) {
        logger.error(error);
        return res.json("${kebabToTitleCase(resourceName)} Creation Failed");
      }
    }

    export async function find${kebabToTitleCase(resourceName)}Handler(req: Request, res: Response) {
      try {
        const id = req.params.id as string;

        const ${resourceName} = await find${kebabToTitleCase(resourceName)}(id);

        if (!${resourceName}) {
          return res.json(
            "given ${resourceName} not found, you can access only those ${resourceName}s that you have created"
          );
        }

        return res.json(${resourceName});
      } catch (error) {
        logger.error(error);
        return res.json("failed while fetching ${resourceName} from database");
      }
    }
    export async function findAll${kebabToTitleCase(resourceName)}Handler(req: Request, res: Response) {
      try {
        const user = res.locals.user as payload;

        const ${resourceName}s = await findAll${kebabToTitleCase(resourceName)}s();

        if (!${resourceName}s) {
          return res.json("you currently have no ${resourceName}s");
        }

        return res.json(${resourceName}s);
      } catch (error) {
        logger.error(error);
        return res.json("failed while fetching ${resourceName} from database");
      }
    }

    export async function delete${kebabToTitleCase(resourceName)}Handler(req: Request, res: Response) {
      try {
        const pid = req.params.id as string;

        await delete${kebabToTitleCase(resourceName)}(pid);
        return res.json("deleted ${resourceName}");
      } catch (error) {
        logger.error(error);
        return res.json("failed to delete all ${resourceName}s");
      }
    }`

    const filePath = `${__dirname}/../src/modules/${resourceName}/${resourceName}.controller.ts`;

    fs.writeFile(filePath, fileContent, (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
}

export const errorCreator = (resourceName) => {
  const fileContent = `
  const name_errors = {
    required_error: "ERROR(Missing): Name is required for signup ",
  };

  export { name_errors };
  `

  const filePath = `${__dirname}/../src/modules/${resourceName}/${resourceName}.error.ts`;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}

export const schemaCreator = (resourceName) => {
  const fileContent = `
    import { z } from "zod";

    import * as errors from "./${resourceName}.error";

    export const create${kebabToTitleCase(resourceName)}Schema = z.object({
      key: z.string(),
    });

    export type create${kebabToTitleCase(resourceName)}BodyType = z.infer<typeof create${kebabToTitleCase(resourceName)}Schema>;
  `;

  const filePath = `${__dirname}/../src/modules/${resourceName}/${resourceName}.schema.ts`;

  fs.writeFile(filePath, fileContent, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
}