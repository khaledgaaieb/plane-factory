import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="flex justify-between px-8 p-8 bg-white dark:bg-[#0b1727] text-zinc-900 dark:text-white">
      <div>Eviation.com</div>
      <div className="flex justify-center items-center space-x-4">
        <p>Follow us</p>
        <FontAwesomeIcon icon={faFacebook} size="lg" />
        <FontAwesomeIcon icon={faInstagram} size="lg" />
        <FontAwesomeIcon icon={faYoutube} size="lg" />
      </div>
    </div>
  );
}
