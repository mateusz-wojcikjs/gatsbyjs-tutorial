import React from "react";
import Layout from "../layout/Layout";
import styles from "../css/error.module.css";
import { Link } from "gatsby";
import Banner from "../layout/Banner";

const ErrorPage = () => {
  return (
    <Layout>
      <header className={styles.error}>
        <Banner title="Error 404. There is no such a page!">
          <Link to="/" className="btn-white">
            back to home page
          </Link>
        </Banner>
      </header>
    </Layout>
  );
};

export default ErrorPage;
