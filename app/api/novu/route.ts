import { serve } from "@novu/framework/next";
import { sbiLifeEmailWorkflow, welcomeOnboardingEmail, sbiLifeEmailWorkflow1 , sbiLifeEmailWorkflow2} from "../../novu/workflows";

// the workflows collection can hold as many workflow definitions as you need
export const { GET, POST, OPTIONS } = serve({
  workflows: [welcomeOnboardingEmail, sbiLifeEmailWorkflow, sbiLifeEmailWorkflow1, sbiLifeEmailWorkflow2],
});
