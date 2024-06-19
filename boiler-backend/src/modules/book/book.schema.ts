
    import { z } from "zod";

    import * as errors from "./book.error";

    export const createBookSchema = z.object({
      key: z.string(),
    });

    export type createBookBodyType = z.infer<typeof createBookSchema>;
  