import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "User Intent Recognition",
    Svg: require("@site/static/img/undraw_chatting.svg").default,
    description: (
      <>
        Enhance message filtering with intuitive technology that accurately
        identifies and organizes essential communications, making information
        processing more efficient.
      </>
    ),
  },
  {
    title: "MSE Assistant",
    Svg: require("@site/static/img/undraw_assistant.svg").default,
    description: (
      <>
        Streamline the resolution of medical queries with our rapid response
        mechanism and clear translation process, ensuring effective and timely
        communication.
      </>
    ),
  },
  {
    title: "Interactive Waiting Experience",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Enhance user wait times by offering relevant FAQs proactively, providing
        immediate value and potentially addressing their concerns without
        further delay.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
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
