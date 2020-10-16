import React from "react";
import { useLocation } from "react-router";
import { EmailCardProps } from "../EmailCard/EmailCard";
import { EmailContent, HeaderAndFooterEmail } from "./styles";

const EmailDetail: React.FC = () => {
  const navigate = useLocation<EmailCardProps>();
  const { id, message, from, to, subject } = navigate.state;
  console.log(id);

  return (
    <div className="animate__animated animate__fadeInUp">
      <HeaderAndFooterEmail>
        <p>
          de <strong>{from}</strong>
        </p>
        <p>
          para <strong>{to}</strong>
        </p>
      </HeaderAndFooterEmail>
      <EmailContent>
        <h1>{subject}</h1>
        <p>{message}</p>
      </EmailContent>
      <HeaderAndFooterEmail>
        <p>
          Enviado em <strong>carro</strong>
        </p>
        <a href={`mailto:${from}`}>Responder</a>
      </HeaderAndFooterEmail>
    </div>
  );
};

export default EmailDetail;
