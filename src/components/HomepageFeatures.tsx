import useBaseUrl from "@docusaurus/useBaseUrl";
import React from "react";
import clsx from "clsx";
import styles from "./HomepageFeatures.module.css";

type FeatureItem = {
  title: string;
  image: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: "Pull Request Utils",
    image:
      "https://joachimdalen.gallerycdn.vsassets.io/extensions/joachimdalen/pull-request-utils/0.5.4/1639807510676/Microsoft.VisualStudio.Services.Icons.Default",
    description: (
      <>
        A task to manage pull requests. Includes posting comments on pull
        requests, checking if tags are assigned, assigning tags, updating the
        description
      </>
    ),
  },
  {
    title: "Auto State",
    image:
      "https://joachimdalen.gallerycdn.vsassets.io/extensions/joachimdalen/auto-state/1.2.0/1642830505441/Microsoft.VisualStudio.Services.Icons.Default",
    description: (
      <>
        An extension to automatically update states between parents and children
      </>
    ),
  },
  {
    title: "Env Transform",
    image:
      "https://joachimdalen.gallerycdn.vsassets.io/extensions/joachimdalen/env-transform/1.2.3/1639764057207/Microsoft.VisualStudio.Services.Icons.Default",
    description: (
      <>A task to perform variable replacement for environment files</>
    ),
  },
  {
    title: "Env Transform",
    image:
      "https://joachimdalen.gallerycdn.vsassets.io/extensions/joachimdalen/env-transform/1.2.3/1639764057207/Microsoft.VisualStudio.Services.Icons.Default",
    description: (
      <>A task to perform variable replacement for environment files</>
    ),
  },
];

function Feature({ title, image, description }: FeatureItem) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img
          className={styles.featureSvg}
          alt={title}
          src={useBaseUrl(image)}
        />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
