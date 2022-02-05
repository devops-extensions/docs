import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import HomepageFeatures from "../components/HomepageFeatures";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  useEffect(() => {
    fetch(
      "https:marketplace.visualstudio.com/_apis/public/gallery/extensionquery",
      {
        headers: {
          accept: "application/json;api-version=7.1-preview.1;excludeUrls=true",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          assetTypes: null,
          filters: [
            {
              criteria: [{ filterType: 18, value: "joachimdalen" }],
            },
          ],
          flags: 512 | 2
        }),
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }, []);
  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <a
            className="button button--secondary button--lg"
            href="https://marketplace.visualstudio.com/publishers/joachimdalen"
          >
            Browse Marketplace
          </a>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
