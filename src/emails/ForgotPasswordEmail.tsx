import * as React from "react";
import { IReactEmailTemplate } from "@kaviar/email-bundle";

export interface IForgotPasswordEmailProps {
  username: string;
  name: string;
  resetPasswordUrl: string;
  regardsName: string;
}

export const ForgotPasswordEmail: IReactEmailTemplate<IForgotPasswordEmailProps> = (
  props
) => (
  <div>
    <p>Hello {props.name},</p>
    <p>
      You have requested to reset your password for username: {props.username}.
    </p>
    <p>
      Please access the link below:
      <br />
      <a href={props.resetPasswordUrl}>{props.resetPasswordUrl}</a>
    </p>
    <p>
      Regards, <br />
      {props.regardsName}
    </p>
  </div>
);

ForgotPasswordEmail.subject = (props) => {
  return `You have requested a password reset!`;
};
