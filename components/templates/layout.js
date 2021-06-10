import Head from "next/head";
import PropTypes from "prop-types";
import { NextSeo } from "next-seo";

import Navbar from "@/components/molecules/navbar";

const Layout = ({ title, withContainer, children }) => {
  return (
    <>
      <NextSeo title={title} />
      <Head>
        <title>{title}</title>
      </Head>
      <Navbar />
      <div className={withContainer ? "container" : null}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  title: PropTypes.string,
  withContainer: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default Layout;
