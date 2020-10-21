import React from "react";
import { Link } from "react-router-dom";
import { EmailCardContent } from "./styles";

// Declaration of the props inside the card
export interface EmailCardProps {
  id: number;
  subject: string;
  from: string;
}

const EmailCard: React.FC<EmailCardProps> = ({ subject, from, id }) => {
  return (
    <>
      <EmailCardContent>
        <div>
          <h3>{subject}</h3>
          <p>{from}</p>
        </div>
        <div>
          <Link to={`/email/${id}`}>Ler email</Link>
        </div>
      </EmailCardContent>
    </>
  );
};

export default EmailCard;
