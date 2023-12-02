import { z } from "zod";

export const createRequestSchema = z.object({
  title: z.string({
    required_error: "Title is required",
  }),
  description: z.string({
    required_error: "Description must be a string",
  }),
  endTime: z.string({
    required_error: "End time is required",
  }),
  classroom: z.string({
    required_error: "Classroom is required",
  }),
});
