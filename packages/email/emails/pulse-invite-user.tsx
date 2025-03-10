import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface PulseInviteUserEmailProps {
  invitedUserEmail: string;
  invitedByName: string;
  invitedByEmail: string;
  organizationName: string;
  role: string;
  inviteLink: string;
}

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? `https://${process.env.NEXT_PUBLIC_SITE_URL}`
  : "http://localhost:3000";

export const PulseInviteUserEmail = ({
  invitedUserEmail,
  invitedByName,
  invitedByEmail,
  organizationName,
  role,
  inviteLink,
}: PulseInviteUserEmailProps) => {
  const previewText = `Join ${organizationName} on Pulse.dev`;
  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Section className="mt-[32px]">
              <Img
                src={`${baseUrl}/logos/pulse-light-200px.png`}
                width="150"
                height="30"
                alt="Pulse"
                title="Pulse"
                className="my-0 mx-auto"
                style={{display: 'block'}}
              />
            </Section>
            <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
              Join <strong>{organizationName}</strong> on <strong>Pulse</strong>
            </Heading>
            <Text className="text-black text-[14px] leading-[24px]">
              Hello,
            </Text>
            <Text className="text-black text-[14px] leading-[24px]">
              <strong>{invitedByName}</strong> (
              <Link
                href={`mailto:${invitedByEmail}`}
                className="text-blue-600 no-underline"
              >
                {invitedByEmail}
              </Link>
              ) has invited you to join <strong>{organizationName}</strong> as a{" "}
              <strong>{role}</strong> on <strong>Pulse</strong>.
            </Text>
            <Section className="text-center mt-[32px] mb-[32px]">
              <Button
                className="bg-black rounded text-white text-[12px] font-semibold no-underline text-center px-5 py-3"
                href={inviteLink}
              >
                Accept Invitation
              </Button>
            </Section>
            <Text className="text-black text-[14px] leading-[24px]">
              or copy and paste this URL into your browser:{" "}
              <Link href={inviteLink} className="text-blue-600 no-underline">
                {inviteLink}
              </Link>
            </Text>
            <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This invitation was intended for{" "}
              <span className="text-black">{invitedUserEmail}</span>. If you were not 
              expecting this invitation, you can ignore this email. If you are 
              concerned about your account's safety, please contact our support team.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

PulseInviteUserEmail.PreviewProps = {
  invitedUserEmail: "alan.turing@example.com",
  invitedByName: "John Doe",
  invitedByEmail: "john.doe@example.com",
  organizationName: "Acme Corp",
  role: "Member",
  inviteLink: "https://dontflatline.com/invite/abc123",
} as PulseInviteUserEmailProps;

export default PulseInviteUserEmail;
