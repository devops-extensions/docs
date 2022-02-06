import useBaseUrl from "@docusaurus/useBaseUrl";
import React, { useEffect, useState } from "react";
import clsx from "clsx";
import styles from "./ToolsSection.module.css";

type IToolItem = {
  title: string;
  currentVersion: string;
  image: string;
  description: string;
};

const tools: IToolItem[] = [
  {
    title: "AzExt",
    description:
      "A collection of tools to help with developing extensions for Azure DevOps.",
    image:
      "https://raw.githubusercontent.com/joachimdalen/azext/master/docs/images/azext-icon.png",
    currentVersion: "0.0.5",
  },
];

function Tool({ title, image, description, currentVersion }: IToolItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img className={styles.toolIcon} alt={title} src={useBaseUrl(image)} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function ToolsSection(): JSX.Element {
  return (
    <section className={styles.tools}>
      <h3>My tools</h3>
      <div className="container">
        <div className="row">
          {tools.map((props, idx) => (
            <Tool key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
