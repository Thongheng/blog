import React from "react";

import { Heading, Flex, Text, Button, Avatar, RevealFx, Column, Badge, Row, Meta, Schema } from "@once-ui-system/core";
import { home, about, person, baseURL, routes } from "@/resources";
import { Posts } from "@/components/blog/Posts";

export default function Home() {
  return (
    <Column style={{ width: "70%", margin: "0 auto" }} gap="xl" horizontal="center">
      <Schema
        as="webPage"
        baseURL={baseURL}
        path={home.path}
        title={home.title}
        description={home.description}
        image={`/api/og/generate?title=${encodeURIComponent(home.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${about.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />      <Column fillWidth paddingY="24" gap="m">
        <Column maxWidth="s">
          <RevealFx translateY="4" fillWidth horizontal="start" paddingBottom="16">
            <Heading wrap="balance" variant="display-strong-l">
              {home.headline}
            </Heading>
          </RevealFx>
          <RevealFx translateY="8" fillWidth horizontal="start" paddingBottom="32">
            <Text wrap="balance" onBackground="neutral-weak" variant="body-default-l">
              {home.subline}
            </Text>
          </RevealFx>
          <RevealFx paddingTop="12" delay={0.4} horizontal="start" paddingLeft="12">
            <Button
              id="about"
              data-border="rounded"
              href={about.path}
              variant="secondary"
              size="m"
              weight="default"
              arrowIcon
            >
              <Flex gap="8" vertical="center" paddingRight="4">
                {about.avatar.display && (
                  <Avatar
                    marginRight="8"
                    style={{ marginLeft: "-0.75rem" }}
                    src={person.avatar}
                    size="m"
                  />
                )}
                {about.title}
              </Flex>
            </Button>
          </RevealFx>        </Column>      </Column>      {routes["/blog"] && (
            <Flex
              fillWidth
              direction="column"
              style={{ backdropFilter: "blur(var(--static-space-1))" }}
              border="neutral-medium"
              radius="l"
              padding="l"
              marginTop="xl"
            >
              <Flex paddingBottom="l">
                <Heading as="h2" variant="display-strong-xs" wrap="balance">
                  Latest from the blog
                </Heading>
              </Flex>
              <Flex>
                <Posts range={[1, 2]} columns="2" />
              </Flex>
            </Flex>
          )}
    </Column>
  );
}
