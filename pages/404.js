import Layout from "@/components/templates/homeLayout";
import Button from "@/components/atoms/button";
import Router from "next/router";

const Custom404 = () => {
  const navigateToHome = () => Router.push("/");

  return (
    <Layout>
      <Button onClick={navigateToHome}>Back to Home Page</Button>
    </Layout>
  );
};

export default Custom404;
