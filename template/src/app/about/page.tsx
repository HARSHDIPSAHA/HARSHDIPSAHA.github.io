import {
  Avatar,
  Button,
  Column,
  Heading,
  Icon,
  IconButton,
  Media,
  RevealFx,
  Tag,
  Text,
  Meta,
  Schema,
  Row,
} from "@once-ui-system/core";
import { baseURL, about, person, social, home } from "@/resources";
import TableOfContents from "@/components/about/TableOfContents";
import styles from "@/components/about/about.module.scss";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: about.title,
    description: about.description,
    baseURL: baseURL,
    image: home.image,
    path: about.path,
  });
}

export default function About() {
  const structure = [
    { title: about.intro.title, display: about.intro.display, items: [] },
    { title: about.work.title, display: about.work.display, items: about.work.experiences.map((e) => e.company) },
    { title: about.studies.title, display: about.studies.display, items: about.studies.institutions.map((i) => i.name) },
    { title: about.technical.title, display: about.technical.display, items: about.technical.skills.map((s) => s.title) },
    { title: "Publications", display: true, items: [] },
  ];
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={about.title}
        description={about.description}
        path={about.path}
        image={home.image}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />
      {about.tableOfContent.display && (
        <Column
          left="0"
          style={{ top: "50%", transform: "translateY(-50%)" }}
          position="fixed"
          paddingLeft="24"
          gap="32"
          s={{ hide: true }}
        >
          <TableOfContents structure={structure} about={about} />
        </Column>
      )}
      <Row fillWidth s={{ direction: "column"}} horizontal="center">
        {about.avatar.display && (
          <Column
            className={styles.avatar}
            top="64"
            fitHeight
            position="sticky"
            s={{ position: "relative", style: { top: "auto" } }}
            xs={{ style: { top: "auto" } }}
            minWidth={180}
            paddingX="l"
            paddingBottom="xl"
            gap="m"
            flex={3}
            horizontal="center"
          >
            <div className="about-avatar-lg">
              <Avatar src={person.avatar} size="xl" />
            </div>
            <Text variant="body-default-s" onBackground="neutral-weak">
              India/New Delhi
            </Text>
            {person.languages && person.languages.length > 0 && (
              <Row wrap gap="8">
                {person.languages.map((language, index) => (
                  <Tag key={index} size="l">
                    {language}
                  </Tag>
                ))}
              </Row>
            )}
          </Column>
        )}
        <Column className={styles.blockAlign} flex={9} maxWidth={40}>
          <Column
            id={about.intro.title}
            fillWidth
            minHeight="160"
            vertical="center"
            marginBottom="32"
          >
            {about.calendar.display && (
              <Row
                fitWidth
                border="brand-alpha-medium"
                background="brand-alpha-weak"
                radius="full"
                padding="4"
                gap="8"
                marginBottom="m"
                vertical="center"
                className={styles.blockAlign}
                style={{
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                <Icon paddingLeft="12" name="calendar" onBackground="brand-weak" />
                <Row paddingX="8">Schedule a call</Row>
                <IconButton
                  href={about.calendar.link}
                  data-border="rounded"
                  variant="secondary"
                  icon="chevronRight"
                />
              </Row>
            )}
            <Heading className={styles.textAlign} variant="display-strong-xl">
              {person.name}
            </Heading>
            <Text
              className={styles.textAlign}
              variant="display-default-xs"
              onBackground="neutral-weak"
            >
              {person.role}
            </Text>
            {social.length > 0 && (
              <Row
                className={styles.blockAlign}
                paddingTop="20"
                paddingBottom="8"
                gap="8"
                wrap
                horizontal="center"
                fitWidth
                data-border="rounded"
              >
                {social
                      .filter((item) => item.essential)
                      .map(
                  (item) =>
                    item.link && (
                      <React.Fragment key={item.name}>
                        <Row s={{ hide: true }}>
                          <Button
                            key={item.name}
                            href={item.link}
                            prefixIcon={item.icon}
                            label={item.name}
                            size="s"
                            weight="default"
                            variant="secondary"
                          />
                        </Row>
                        <Row hide s={{ hide: false }}>
                          <IconButton
                            size="l"
                            key={`${item.name}-icon`}
                            href={item.link}
                            icon={item.icon}
                            variant="secondary"
                          />
                        </Row>
                      </React.Fragment>
                    ),
                )}
              </Row>
            )}
          </Column>

          {about.intro.display && (
            <RevealFx translateY="8" delay={0.1}>
              <Column textVariant="body-default-l" fillWidth gap="m" marginBottom="xl">
                {about.intro.description}
              </Column>
            </RevealFx>
          )}

          {about.work.display && (
            <>
              <Heading as="h2" id={about.work.title} variant="display-strong-s" marginBottom="m">
                {about.work.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="40">
                {about.work.experiences.map((experience, index) => (
                  <Column key={`${experience.company}-${experience.role}-${index}`} fillWidth>
                    <Row fillWidth horizontal="between" vertical="end" marginBottom="4">
                      <Text id={experience.company} variant="heading-strong-l">
                        {experience.company}
                      </Text>
                      <Text variant="heading-default-xs" onBackground="neutral-weak">
                        {experience.timeframe}
                      </Text>
                    </Row>
                    <Text variant="body-default-s" onBackground="brand-weak" marginBottom="m">
                      {experience.role}
                    </Text>
                    <Column as="ul" gap="16">
                      {experience.achievements.map(
                        (achievement: React.ReactNode, index: number) => (
                          <Text
                            as="li"
                            variant="body-default-m"
                            key={`${experience.company}-${index}`}
                          >
                            {achievement}
                          </Text>
                        ),
                      )}
                    </Column>
                    {experience.images && experience.images.length > 0 && (
                      <Row fillWidth paddingTop="m" paddingLeft="40" gap="12" wrap>
                        {experience.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </>
          )}

          {about.studies.display && (
            <RevealFx translateY="8" delay={0.15}>
              <Heading as="h2" id={about.studies.title} variant="display-strong-s" marginBottom="m">
                {about.studies.title}
              </Heading>
              <Column fillWidth gap="0" marginBottom="40" className="journey-timeline">
                {about.studies.institutions.map((institution, index) => (
                  <Column
                    key={`${institution.name}-${index}`}
                    fillWidth
                    gap="4"
                    className="journey-timeline-item"
                  >
                    <Row gap="16" fillWidth>
                      <div className="journey-dot" />
                      <Column fillWidth gap="4" paddingBottom="24">
                        <Text id={institution.name} variant="heading-strong-l">
                          {institution.name}
                        </Text>
                        <Text variant="heading-default-xs" onBackground="neutral-weak">
                          {institution.description}
                        </Text>
                      </Column>
                    </Row>
                  </Column>
                ))}
              </Column>
            </RevealFx>
          )}

          {about.technical.display && (
            <RevealFx translateY="8" delay={0.2}>
              <Heading
                as="h2"
                id={about.technical.title}
                variant="display-strong-s"
                marginBottom="40"
              >
                {about.technical.title}
              </Heading>
              <Column fillWidth gap="l" marginBottom="32">
                {about.technical.skills.map((skill, index) => (
                  <Column key={`${skill}-${index}`} fillWidth gap="4">
                    <Text id={skill.title} variant="heading-strong-l">
                      {skill.title}
                    </Text>
                    <Text variant="body-default-m" onBackground="neutral-weak">
                      {skill.description}
                    </Text>
                    {skill.tags && skill.tags.length > 0 && (
                      <Row wrap gap="8" paddingTop="8">
                        {skill.tags.map((tag, tagIndex) => (
                          <Tag key={`${skill.title}-${tagIndex}`} size="l" prefixIcon={tag.icon}>
                            {tag.name}
                          </Tag>
                        ))}
                      </Row>
                    )}
                    {skill.images && skill.images.length > 0 && (
                      <Row fillWidth paddingTop="m" gap="12" wrap>
                        {skill.images.map((image, index) => (
                          <Row
                            key={index}
                            border="neutral-medium"
                            radius="m"
                            minWidth={image.width}
                            height={image.height}
                          >
                            <Media
                              enlarge
                              radius="m"
                              sizes={image.width.toString()}
                              alt={image.alt}
                              src={image.src}
                            />
                          </Row>
                        ))}
                      </Row>
                    )}
                  </Column>
                ))}
              </Column>
            </RevealFx>
          )}

          <RevealFx translateY="8" delay={0.25}>
          <Heading as="h2" id="Publications" variant="display-strong-s" marginTop="64" marginBottom="24">
            Publications
          </Heading>
          <Column fillWidth gap="l" marginBottom="40" className="journey-block publications-block">
            <Column
              fillWidth
              gap="m"
              padding="l"
              style={{
                border: "1px solid var(--neutral-alpha-weak)",
                borderRadius: "var(--static-radius-l)",
                background: "var(--neutral-alpha-weak)",
              }}
            >
              <Media
                src="/images/publications/miccai.jpg"
                alt="MICCAI 2025 South Korea"
                aspectRatio="16 / 9"
                radius="m"
                sizes="(max-width: 768px) 100vw, 640px"
              />
              <Column fillWidth gap="8">
                <Text variant="heading-strong-l" wrap="balance">
                  RECAP-Net: BraTS-PRO 2025 — MICCAI 2025, South Korea
                </Text>
                <Text variant="body-default-m" onBackground="neutral-weak" wrap="balance">
                  Went to South Korea to represent our college. Our team secured{" "}
                  <span className="intro-emerald">World Rank 3</span> in the BraTS Lighthouse 2025
                  Tumor Progression Challenge, with a paper accepted for{" "}
                  <span className="intro-emerald">Oral Presentation at MICCAI 2025</span>. We
                  proposed an end-to-end pipeline for longitudinal glioblastoma response
                  classification (RANO criteria), combining Swin UNETR segmentation with 3D CNNs
                  and GAN-based class balancing.
                </Text>
                <Row wrap gap="8" paddingTop="4">
                  <Button
                    href="https://github.com/HARSHDIPSAHA/brats_response_project"
                    target="_blank"
                    rel="noopener"
                    variant="secondary"
                    size="s"
                    prefixIcon="arrowUpRightFromSquare"
                  >
                    BraTS response project
                  </Button>
                  <Button
                    href="https://www.overleaf.com/read/mdzxqfqbsyfc#696149"
                    target="_blank"
                    rel="noopener"
                    variant="secondary"
                    size="s"
                    prefixIcon="arrowUpRightFromSquare"
                  >
                    Publication
                  </Button>
                </Row>
              </Column>
            </Column>
          </Column>
          </RevealFx>
        </Column>
      </Row>
    </Column>
  );
}