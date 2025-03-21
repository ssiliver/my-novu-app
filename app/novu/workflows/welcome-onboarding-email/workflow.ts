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
    // Existing email step
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

  //  await step.sms(
    //  "send-sms",
    //  async (controls) => {  
      //  return {
        //  body: `SBI Life update: Your application has been received. ${payload.inAppSubject ? `Subject: ${payload.inAppSubject}` : ''}`
      //  };
    //  }
  //  );

    // Add WhatsApp step
    await step.chat(
      "send-whatsapp",
      async (controls) => {
        return {
          body: `SBI Life update: Your application has been received. ${payload.inAppSubject ? `Subject: ${payload.inAppSubject}` : ''}`,
        };
      },
    );

    // Existing in-app notification step
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


export const sbiLifeEmailWorkflow1 = workflow(
  "sbi-life",
  async ({ step, payload }) => {
    // Existing email step
    await step.email(
      "send-email",
      async (controls) => {
        return {
          subject: controls.subject,
          body: renderEmail(controls, payload),
        };
      },
      {
        controlSchema: emailControlSchema
        ,
      },
    );

    // await step.sms(
    //   "send-sms",
    //   async (controls) => {  
    //     return {
    //       body: `SBI Life update: Your application has been received. ${payload.inAppSubject ? `Subject: ${payload.inAppSubject}` : ''}`
    //     };
    //   }
    // );

    // Add WhatsApp step
    await step.chat(
      "send-whatsapp",
      async (controls) => {
        return {
          body: `SBI Life update: Your application has been received. ${payload.inAppSubject ? `Subject: ${payload.inAppSubject}` : ''}`,
        };
      },
    );

    // Existing in-app notification step
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


export const sbiLifeEmailWorkflow2 = workflow(
  "whatsapp",
  async ({ step, payload }) => {
    
    // Add WhatsApp step
    await step.chat(
      "send-whatsapp",
      async (controls) => {
        return {
          body: `Welcome and congratulations!! This message demonstrates your ability to send a WhatsApp message notification from the Cloud API, hosted by Meta. Thank you for taking the time to test with us.`,
        };
      },
    );   
  },
  {
    payloadSchema,
  },
);

