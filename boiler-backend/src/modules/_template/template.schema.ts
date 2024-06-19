import { z } from "zod";

import * as errors from "./template.error";

export const createProductSchema = z.object({
  key: z.string(),
});

export type createProductBodyType = z.infer<typeof createProductSchema>;
