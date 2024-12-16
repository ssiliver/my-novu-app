import { workflow } from "@novu/framework";
import { renderEmail } from "../../emails/novu-onboarding-email";
import { emailControlSchema, payloadSchema, lmsPayloadSchema } from "./schemas";
import { Novu } from '@novu/node';
const novu = new Novu(process.env.NOVU_SECRET_KEY!);


 
export const welcomeOnboardingEmail = workflow(
  "welcome-onboarding-email",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema,
      },
    );

    await step.inApp("In-App Step", async () => {
      return {
        subject: payload.inAppSubject,
        body: payload.inAppBody,
        avatar: payload.lmscoursee,
      };
    });
  },
  {
    payloadSchema,
  },
);


export const sbiLifeEmailWorkflow = workflow(
  "sbi-life",
  async ({ step, payload }) => {
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema,
      },
    );

    await step.inApp("In-App Step", async () => {
      return {
        subject: payload.inAppSubject,
        body: payload.inAppBody,
        avatar: payload.lmscoursee,
      };
    });
  },
  {
    payloadSchema,
  },);



