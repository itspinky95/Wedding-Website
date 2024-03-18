import { Body, Head, Preview, render, Heading, Text } from "@react-email/components";
import * as React from "react";

interface EmailTemplateProps {
  firstName: string;
  lastName: string;
  attending: boolean;
  specialDietary?: string;
  message?: string;
}

// Define your styles here
const styles = {
  bodyStyle: {
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#f4f4f4",
    padding: "20px",
  },
  headerStyle: {
    color: "#333",
  },
  paragraphStyle: {
    color: "#555",
    lineHeight: "1.5",
  },
  strongStyle: {
    fontWeight: "bold",
  },
};

export const EmailTemplate = ({ firstName, lastName, attending, specialDietary, message }: EmailTemplateProps) => {
  return (
    <html>
      <Head />
      <Preview>Scott&apos;s and Deanna&apos;s Wedding</Preview>
      <Body style={styles.bodyStyle}>
        <Heading as='h2' >Hello {firstName} {lastName},</Heading>
        <Text style={styles.paragraphStyle}>Thank you for getting back to us regarding our wedding invitation!</Text>
        {attending ? (
          <>
            <Text style={styles.paragraphStyle}>We&apos;re thrilled to hear you can make it and can&apos;t wait to share our special day with you. Your presence means a lot to us!</Text>
            <Text style={styles.paragraphStyle}>Stay tuned for more details about the venue and day&apos;s schedule. We&apos;re looking forward to creating wonderful memories together.</Text>
            {specialDietary !== "none" && (
              <Text style={styles.paragraphStyle}>We&apos;ll make sure to accommodate your dietary preference: {specialDietary}.</Text>
            )}
            {message && (
              <Text style={styles.paragraphStyle}>Thank you for your message: &apos;{message}&apos;</Text>
            )}
          </>
        ) : (
          <>
            <Text style={styles.paragraphStyle}>We&apos;re sorry to hear you can&apos;t join us for our wedding day. You will be missed, but we understand and appreciate you letting us know. We&apos;ll be sure to share photos and memories from the day with you.</Text>
            {message && (
              <Text style={styles.paragraphStyle}>Thank you for your message: &apos;{message}&apos;</Text>
            )}
            <Text style={styles.paragraphStyle}>If you change your mind, please let us know. We&apos;d love to have you there!</Text>
          </>
        )}
        <Text style={styles.paragraphStyle}>With love,</Text>
        <Text style={{ ...styles.paragraphStyle, ...styles.strongStyle }}>Scott Jones & Deanna Keel</Text>
      </Body>
    </html>
  );
};

export const PrimaryActionEmailHtml = (props: EmailTemplateProps) =>
  render(<EmailTemplate {...props} />, { pretty: true });
