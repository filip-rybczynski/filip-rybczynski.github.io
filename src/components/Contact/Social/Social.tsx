import React from "react";

import { Socials as SocialProps } from "../../../types/Socials";

function Social({socialName, socialUrl, socialIconUrl}: SocialProps) {
  return (
    <li key={socialName} className="socials__item">
      <a
        className="socials__link"
        href={socialUrl}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          className="socials__icon"
          src={socialIconUrl}
          alt={`${socialName} of Filip Rybczyński`}
        />
      </a>
    </li>
  );
}

export default Social;
