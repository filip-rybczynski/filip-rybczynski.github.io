import React from "react";

import { EmailButtonProps } from "./EmailButton.interface";

import "./EmailButton.styles.scss";

export function EmailButton({ email }: EmailButtonProps) {
  return (
    <a className="email-button" href={"mailto:" + email}>
      {email}
    </a>
  );
}
