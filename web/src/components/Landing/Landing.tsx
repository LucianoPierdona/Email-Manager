import React, { useState } from "react";
import { useEffect } from "react";
import { CSVLink } from "react-csv";
import api from "../../services/api";
import EmailCard from "../EmailCard/EmailCard";
import ExcelButtonDownload from "../ExcelButtonDownload/ExcelButtonDownload";
import { EmailList, HeaderLanding } from "./styles";

interface EmailLandingProps {
  subject: string;
  message: string;
  email_from: string;
  email_to: string;
  id: number;
}

const Landing = () => {
  const [emails, setEmails] = useState<EmailLandingProps[]>([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setEmails(res.data);
    });
  }, []);

  return (
    <>
      <HeaderLanding>
        <h1>Lista de Emails</h1>
        <div>
          <ExcelButtonDownload />
          <CSVLink className="link" data={emails}>
            Download em CSV
          </CSVLink>
        </div>
      </HeaderLanding>
      <div className="animate__animated animate__fadeInUp">
        <EmailList>
          {emails.map(({ id, subject, email_from }) => {
            return (
              <EmailCard key={id} subject={subject} from={email_from} id={id} />
            );
          })}
        </EmailList>
      </div>
    </>
  );
};

export default Landing;
