import { z } from 'zod'

// We're keeping a simple non-relational schema here.
// IRL, you will have a schema for your data models.
export const taskSchema = z.object({
  id: z.number(),
  task_title: z.string(),
  Description: z.string(),
  Status: z.string(),
  Deadline: z.string(),
})

export type Task = z.infer<typeof taskSchema>

export const inserttaskSchema = taskSchema.pick({
  task_title: true,
  Description: true,
  Status: true,
  Deadline: true,
}).extend({
  task_title: z.string().min(1, "Title is required").max(100, "Title must be 100 characters or less"),
  Description: z.string().min(1, "Description is required").max(500, "Description must be 500 characters or less"),
  Status: z.string(),
  Deadline: z.date({required_error: "A deadline is required.", invalid_type_error: "Invalid date format"}),
});

export type TaskInsert = z.infer<typeof inserttaskSchema>;