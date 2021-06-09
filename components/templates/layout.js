import Navbar from "@/components/molecules/navbar";
import PropTypes from "prop-types";

const Layout = ({ withContainer, children }) => {
  return (
    <>
      <Navbar />
      <div className={withContainer ? "container" : null}>{children}</div>
    </>
  );
};

Layout.propTypes = {
  withContainer: PropTypes.bool,
  children: PropTypes.element.isRequired,
};

export default Layout;
