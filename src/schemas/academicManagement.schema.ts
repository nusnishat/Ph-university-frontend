import { z } from "zod";

export  const academicSemesterSchema = z.object({
    name: z.string({required_error: "Required"}),
    year: z.string({required_error: "Required"}),
    startMonth: z.string({required_error: "Required"}),
    endMonth: z.string({required_error: "Required"}),
})