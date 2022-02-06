import useBaseUrl from "@docusaurus/useBaseUrl";
import React, { useEffect, useState } from "react";
const extensions = require("./extensions.json");
import clsx from "clsx";
import styles from "./ExtensionSection.module.css";

type IExtensionItem = {
  title: string;
  currentVersion: string;
  image: string;
  description: string;
  id: string;
  publisher: string;
};

function Extension({
  title,
  image,
  description,
  currentVersion,
  id,
  publisher,
}: IExtensionItem) {
  return (
    <div className={clsx("col col--3 margin-top--sm")}>
      <div className="card">
        <div className="card__image margin-top--sm text--center">
          <img className={styles.extensionIcon} src={image} />
        </div>
        <div
          className="card__body padding-horiz--md"
          style={{ height: "150px" }}
        >
          <h4>
            {title}
            <span className="margin-left--sm badge badge--primary">
              v{currentVersion}
            </span>
          </h4>
          <small>{description}</small>
        </div>
        <div className="card__footer">
          <a
            className="button button--info button--sm margin-right--sm"
            href={useBaseUrl(`/docs/docs/extensions/${id}`)}
          >
            Read the docs
          </a>
          <a
            className="button button--primary button--sm"
            href={`https://marketplace.visualstudio.com/acquisition?itemName=${publisher}.${id}`}
          >
            Install
          </a>
        </div>
      </div>
    </div>
  );
}

export default function ExtensionSection(): JSX.Element {
  return (
    <section className={styles.extensions}>
      <h3>My extensions</h3>
      <div className="container">
        <div className="row">
          {extensions.map((props, idx) => (
            <Extension key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
