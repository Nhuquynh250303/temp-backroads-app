import React from "react";
import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLinks";
const Footer = () => {
  return (
    <footer className="section footer">
      {/* <ul className="footer-links">
        {pageLinks.map((link) => {
          const { id, href, text } = link;
          return (
            <li key={id}>
              <a href={href} className="footer-link">
                {text}
              </a>
            </li>
          );
        })}
      </ul> */}
      <PageLinks parentClass='footer-links' itemClass='footer-link'/>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          const { id, href, icon } = link;
          return (
            <SocialLink key={link.id} {...link} itemClass='footer-icon'/>
          );
        })}
      </ul>
      <p className="copyright">
        copyright © Backroads travel tours company
        <span id="date">{new Date().getFullYear()} all rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
