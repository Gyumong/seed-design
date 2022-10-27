import { motion } from "framer-motion";
import type { HeadFC } from "gatsby";
import { Link } from "gatsby";
import React from "react";

import DocumentEditLink from "../components/DocumentEditLink";
import Layout from "../components/Layout";
import * as style from "./ComponentsContentTemplate.css";

interface TemplatePostProps {
  children: React.ReactNode;
  pageContext: {
    title: string;
    description: string;
    slug: string;
    activeTab: string;
  };
}

const ComponentsContentTemplate: React.FC<TemplatePostProps> = ({
  pageContext,
  children,
}) => {
  return (
    <Layout>
      <main className={style.main}>
        <h1 className={style.title}>{pageContext.title}</h1>
        <p className={style.titleDescription}>{pageContext.description}</p>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <Link
            to={`${pageContext.slug}/primitive`}
            className={style.tabLink({
              active: pageContext.activeTab === "primitive",
            })}
          >
            primitive
          </Link>
          <Link
            to={`${pageContext.slug}/visual`}
            className={style.tabLink({
              active: pageContext.activeTab === "visual",
            })}
          >
            visual
          </Link>
        </div>
        <motion.div
          initial={{
            opacity: 0,
            x: -10,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
        >
          {children}
        </motion.div>
        <DocumentEditLink
          slug={`${pageContext.slug}/${pageContext.activeTab}`}
        />
      </main>
    </Layout>
  );
};

export const Head: HeadFC = () => <title>Component page</title>;

export default ComponentsContentTemplate;