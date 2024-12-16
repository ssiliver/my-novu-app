import React from "react";
import {
  Body,
  Button,
  CodeInline,
  Column,
  Container,
  Head,
  Heading,
  Html,
  Img,
  Preview,
  render,
  Row,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

import { ControlSchema, PayloadSchema } from "../workflows";

type NovuWelcomeEmailProps = ControlSchema & PayloadSchema;

export const NovuWelcomeEmail = ({
  components,
  lmscoursee,
  courseName,
  courseCode,
  emailSubject,
  emailBody,
  showHeader,
}: NovuWelcomeEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>{emailSubject}</Preview>
      <Tailwind
        config={{
          theme: {
            extend: {
              colors: {
                brand: "#2250f4",
                offwhite: "#fafbfb",
                blurwhite: "#f3f3f5",
                primary: "#1a365d",
                secondary: "#2d3748",
              },
              spacing: {
                0: "0px",
                20: "20px",
                45: "45px",
              },
            },
          },
        }}
      >
        <Body className="bg-blurwhite text-base font-sans">
          {showHeader && (
            <Container className="bg-gradient-to-r from-primary to-secondary p-20 rounded-t-lg">
              <Row>
                <Column>
                  <Img
                    src={lmscoursee}
                    width="120"
                    height="120"
                    alt="Course Image"
                    className="mx-auto rounded-lg shadow-lg"
                  />
                </Column>
              </Row>
            </Container>
          )}

          <Container className="bg-white p-45">
            <Section className="text-center mb-8">
              <Heading className="text-3xl font-bold text-primary mb-4">
                {courseName}
              </Heading>
              <Text className="text-gray-600 text-lg">
                Course Code: {courseCode}
              </Text>
            </Section>

            <Section className="bg-offwhite p-6 rounded-lg shadow-sm mb-8">
              <Text className="text-xl font-semibold text-primary mb-4">
                {emailSubject}
              </Text>
              <Text className="text-gray-700 leading-relaxed">
                {emailBody}
              </Text>
            </Section>

            {components?.map((component, componentIndex) => (
              <Section 
                key={componentIndex} 
                className="mb-6 border-b border-gray-100 pb-6 last:border-0"
              >
                {component.type === "heading" && (
                  <Heading as="h2" className={`text-${component.align} text-2xl text-primary`}>
                    {component.text}
                  </Heading>
                )}

                {component.type === "button" && (
                  <Section className={`text-${component.align} mt-4`}>
                    <Button
                      href="http://localhost:2022"
                      className="bg-brand hover:bg-blue-700 transition-colors rounded-lg text-white text-base font-medium no-underline text-center px-8 py-4"
                    >
                      {component.text}
                    </Button>
                  </Section>
                )}

                {component.type === "text" && (
                  <Text className={`text-base text-${component.align} text-gray-700`}>
                    {component.text}
                  </Text>
                )}

                {component.type === "users" && (
                  <Section className="mb-5">
                    <Text className={`text-gray-600 text-sm text-${component.align} mb-3`}>
                      {component.text}
                    </Text>
                    <Row align={component.align}>
                      <Column align="center">
                        <Img
                          className="rounded-lg shadow-md"
                          src={lmscoursee}
                          width="80"
                          height="80"
                        />
                      </Column>
                    </Row>
                  </Section>
                )}
              </Section>
            ))}
          </Container>

          <Container className="bg-gray-50 p-6 rounded-b-lg">
            <Text className="text-center text-gray-500 text-sm">
              © 2024 Your LMS Platform. All rights reserved.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default NovuWelcomeEmail;

export function renderEmail(controls: ControlSchema, payload: PayloadSchema) {
  return render(<NovuWelcomeEmail {...controls} {...payload} />);
}
