import React from "react";
import InfoCompany from "../info-company/info-company.component";
import InfoDeveloper from "../info-developer/info-developer.component";

import "./footer.styles.scss";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="container">
        <InfoCompany />
        <hr />
        <InfoDeveloper />
      </div>
    </footer>
  );
};
export default Footer;
