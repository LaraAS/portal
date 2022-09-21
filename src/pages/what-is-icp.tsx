import Link from "@docusaurus/Link";
import useGlobalData from "@docusaurus/useGlobalData";
import completedRoadmapItems from "@site/roadmap/completed";
import { resetNavBarStyle } from "@site/src/utils/reset-navbar-style";
import BlobGradient from "@site/static/img/gradientBlurredCircle.png";
import BlobPurple from "@site/static/img/purpleBlurredCircle.png";
import GithubIcon from "@site/static/img/token-holders/social/github.svg";
import transitions from "@site/static/transitions.json";
import Layout from "@theme/Layout";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import AnimateSpawn from "../components/Common/AnimateSpawn";
import DarkHeroStyles from "../components/Common/DarkHeroStyles";
import DomainCard from "../components/RoadmapPage/DomainCard";
import Overlay from "../components/RoadmapPage/Overlay";
import { RoadmapDomain } from "../components/RoadmapPage/RoadmapTypes";
import Head from "@docusaurus/Head";
import { WhatIsIcpTopic } from "../components/HowItWorksPage/WhatIsIcpData";
import TopicCard from "../components/HowItWorksPage/TopicCard";

const MotionLink = motion(Link);

const RoadmapPage: React.FC = () => {
  resetNavBarStyle();

  const data = useGlobalData()["what-is-icp-data"].default as WhatIsIcpTopic[];

  return (
    <Layout
      title="What is ICP"
      description="The DFINITY Foundation is committing R&D resources in various domains of development with the intent of making the Internet Computer blockchain more efficient, faster and easier to use. This roadmap shows the status of many projects across the Internet Computer stack."
    >
      <Head>
        <meta
          property="og:image"
          content={
            "https://internetcomputer.org/img/shareImages/share-roadmap.jpeg"
          }
        />
        <meta
          name="twitter:image"
          content={
            "https://internetcomputer.org/img/shareImages/share-roadmap.jpeg"
          }
        />
        <title>What is ICP</title>
      </Head>
      <main className="w-full overflow-hidden">
        <section className="overflow-hidden bg-infinite text-white">
          <DarkHeroStyles></DarkHeroStyles>
          <div className="container-10 pt-12 mb-60 md:mb-52 md:pt-36 relative">
            <div className="md:w-7/10">
              <h1 className="tw-heading-3 md:tw-heading-2 mb-6">What is ICP</h1>
              <p className="tw-lead-sm md:tw-lead mb-0">
                The Internet Computer (IC) is a general-purpose blockchain-based
                platform that can host and run virtually any kind of web-based
                application in a decentralized manner. It is designed to provide
                a World Computer that can replace traditional IT and enable a
                new generation of Web3 services and applications that run
                entirely on-chain. It can also play the role of Web3
                orchestrator by interacting with traditional blockchains. An
                open internet requires decentralization, which is solved nicely
                by using blockchains. However, there are efficiency,
                scalability, usability, and security issues with blockchain
                protocols, a radical new design is needed to realize the vision
                of a world computer. The IC rebuilds the idea of a world
                computer from the ground up. It is more than just a blockchain.
                The Internet Computer Protocol (ICP) has introduced many
                innovations in cryptography, networking, and consensus, which we
                explain below.
              </p>
            </div>
          </div>
          <div className="container-10 relative">
            <img
              alt=""
              src="/img/whiteBlurredCircle.png"
              className="absolute pointer-events-none max-w-none w-[800px] aspect-square -right-[200px] bottom-[-400px] md:w-[1500px] md:bottom-[-680px] md:right-[-550px] object-contain object-center"
            />
          </div>
        </section>

        <section className="container-10 -mt-52 md:-mt-32 relative mb-30 md:mb-56">
          <AnimateSpawn
            el={motion.img}
            variants={transitions.fadeIn}
            src={BlobPurple}
            alt=""
            className="absolute pointer-events-none max-w-none w-[600px] md:w-[1400px] -left-[300px] md:-left-[700px] top-[1680px] md:top-1/2 -translate-y-1/2 z-[-1000]"
          />
          <div className="space-y-6 md:space-y-16">
            {data.map((topic, index) => (
              <TopicCard
                topic={topic}
                index={index}
                key={topic.name}
              ></TopicCard>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
};

export default RoadmapPage;
