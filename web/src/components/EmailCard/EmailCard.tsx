import React from "react";
import { Link } from "react-router-dom";
import { EmailCardContent } from "./styles";

export interface EmailCardProps {
  id: number;
  subject: string;
  message: string;
  from: string;
  to?: string;
  sendDate: string;
}

const EmailCard: React.FC<EmailCardProps> = ({
  subject,
  from,
  id,
  to,
  message,
  sendDate,
}) => {
  return (
    <>
      <EmailCardContent>
        <div>
          <h3>{subject}</h3>
          <p>{from}</p>
        </div>
        <div>
          <Link
            to={{
              pathname: `/email/${id}`,
              state: {
                id,
                subject,
                from,
                to,
                sendDate,
                message,
              },
            }}
          >
            Ler email
          </Link>
        </div>
      </EmailCardContent>
    </>
  );
};

export default EmailCard;
