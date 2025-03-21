import { z } from "zod";

// Learn more about zod at the official website: https://zod.dev/
export const payloadSchema = z.object({
  inAppSubject: z
    .string()
    .describe("The subject of the notification")
    .default("**LMS Email- By Saikrishna!**"),
  inAppBody: z
    .string()
    .describe("The body of the notification")
    .default("This is an in-app notification powered by Novu."),

    lmscoursee: z
    .string()
    .url()
    .default(
      "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png",
    ),
    // LMS specific fields
  courseName: z
  .string()
  .describe("Name of the course")
  .default("Introduction to Programming"),

  emailSubject: z
  .string()
  .describe("The subject line of the email")
  .default("Welcome to Your New Course!"),

emailBody: z
  .string()
  .describe("The main content of the email")
  .default("We're excited to have you begin your learning journey with us."),


instructorName: z
  .string()
  .describe("Name of the instructor")
  .default("Dr. Smith"),

dueDate: z
  .string()
  .describe("Assignment/Course due date")
  .optional(),

  courseCode: z
  .string()
  .describe("Unique course identifier")
  .default("COURSE-101"),

courseImage: z
  .string()
  .url()
  .describe("Course thumbnail image")
  .optional(),

phone: z
  .string()
  .describe("phonenumber")
  .optional(),  
});

export const whatsapPayloadSchema = z.object({
  inAppSubject: z
    .string()
    .describe("The subject of the notification")
    .default("**LMS Email- By Saikrishna!**"),
  inAppBody: z
    .string()
    .describe("The body of the notification")
    .default("This is an in-app notification powered by Novu."),

    lmscoursee: z
    .string()
    .url()
    .default(
      "https://react-email-demo-bdj5iju9r-resend.vercel.app/static/vercel-arrow.png",
    ),
    // LMS specific fields
  courseName: z
  .string()
  .describe("Name of the course")
  .default("Introduction to Programming"),

  emailSubject: z
  .string()
  .describe("The subject line of the email")
  .default("Welcome to Your New Course!"),

emailBody: z
  .string()
  .describe("The main content of the email")
  .default("We're excited to have you begin your learning journey with us."),


instructorName: z
  .string()
  .describe("Name of the instructor")
  .default("Dr. Smith"),

dueDate: z
  .string()
  .describe("Assignment/Course due date")
  .optional(),

  courseCode: z
  .string()
  .describe("Unique course identifier")
  .default("COURSE-101"),

courseImage: z
  .string()
  .url()
  .describe("Course thumbnail image")
  .optional(),

phone: z
  .string()
  .describe("phonenumber")
  .optional(),  
});

export const emailControlSchema = z.object({
  subject: z.string().default("LMS Learning Update!"),
  showHeader: z.boolean().default(true),
  components: z
    .array(
      z.object({
        type: z.enum(["heading", "text", "button", "code", "users"]),
        text: z.string().default(""),
        align: z.enum(["left", "center", "right"]).default("left"),
      }),
    )
    .default([
      {
        type: "heading",
        text: "Welcome to Novu",
        align: "center",
      },
      {
        type: "text",
        text: "Congratulations on receiving your first notification email from Novu! Join the hundreds of thousands of developers worldwide who use Novu to build notification platforms for their products.",
        align: "left",
      },
      {
        type: "users",
        align: "center",
        text: "",
      },
      {
        type: "text",
        text: "Ready to get started? Click on the button below, and you will see first-hand how easily you can edit this email content.",
        align: "left",
      },
      {
        
        type: "button",
        text: "Edit Email",
        align: "center",
      },
    ]),
});


export const emailComponentSchema = z.object({
  type: z.enum(['heading', 'button', 'text', 'users', 'code']),
  text: z.string(),
  align: z.enum(['left', 'center', 'right'])
});

// LMS Payload Schema with all required properties
export const lmsPayloadSchema = z.object({
  // Course related
  courseId: z.string(),
  courseName: z.string(),
  moduleId: z.string().optional(),
  moduleName: z.string().optional(),
  
  // User related
  studentId: z.string(),
  studentName: z.string(),
  instructorId: z.string().optional(),
  instructorName: z.string().optional(),
  
  // Content related
  contentType: z.enum(['ASSIGNMENT', 'QUIZ', 'LESSON', 'ANNOUNCEMENT', 'GRADE']),
  contentId: z.string(),
  contentTitle: z.string(),
  
  // Email content
  emailSubject: z.string(),
  emailBody: z.string(),
  
  // Additional metadata
  dueDate: z.string().optional(),
  grade: z.number().optional(),
  priority: z.enum(['LOW', 'MEDIUM', 'HIGH']).default('MEDIUM'),
  tags: z.array(z.string()).optional(),
  
  // Required properties for NovuWelcomeEmail
  inAppSubject: z.string(),
  inAppBody: z.string(),
  inAppAvatar: z.string(),
  teamImage: z.string(),
  userImage: z.string(),
  arrowImage: z.string(),
  components: z.array(emailComponentSchema).optional(),
  showHeader: z.boolean().optional(),
  subject: z.string()
});

interface LMSPayload {
  courseId: string;
  courseName: string;
  subject: string;
  emailSubject: string;
  emailBody: string;
  inAppSubject: string;
  inAppBody: string;
  contentType: 'ASSIGNMENT' | 'QUIZ' | 'LESSON' | 'ANNOUNCEMENT' | 'GRADE';
  dueDate?: string;
  grade?: number;
  showHeader?: boolean;
}

// Component Props Type
interface LMSEmailProps {
  subject: string;
  components: Array<{
    type: 'heading' | 'text';
    text: string;
    align: 'left' | 'center' | 'right';
  }>;
  showHeader: boolean;
  courseName: string;
  contentType: 'ASSIGNMENT' | 'QUIZ' | 'LESSON' | 'ANNOUNCEMENT' | 'GRADE';
  dueDate?: string;
  grade?: number;
}

// export const smsPayloadSchema = {
//   type: 'object',
//   properties: {
//     message: {
//       type: 'string',
//       description: 'The message to send in the SMS',
//     },
//   },
//   required: ['message'],
// };