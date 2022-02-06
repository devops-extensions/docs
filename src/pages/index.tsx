import React, { useEffect } from "react";
import clsx from "clsx";
import Layout from "@theme/Layout";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./index.module.css";
import ExtensionSection from "../components/ExtensionSection/ExtensionSection";
import ToolsSection from "../components/ToolsSection/ToolsSection";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
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
    <Layout title={siteConfig.title}>
      <HomepageHeader />
      <main className="container">
        <ExtensionSection />
        {/* <ToolsSection /> */}
      </main>
    </Layout>
  );
}
