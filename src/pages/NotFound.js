import Footer from "parts/Footer";
import Header from "parts/Header";
import PageErrorMessage from "parts/PageErrorMessage";
import Sitemap from "parts/Sitemap";
import React from "react";
import Document from "../parts/Documents";

const NotFound = () => {
  return (
    <Document>
      <Header theme="black" />
      <PageErrorMessage />
      <Sitemap />
      <Footer />
    </Document>
  );
};

export default NotFound;
