import React, { useState } from "react";
import { useEffect } from "react";
import api from "../../services/api";
import EmailCard from "../EmailCard/EmailCard";
import { EmailList, HeaderLanding } from "./styles";

interface EmailProps {
  subject: string;
  message: string;
  emailfrom: string;
  emailto: string;
  senddate: string;
  id: number;
}

const Landing = () => {
  const [emails, setEmails] = useState<EmailProps[]>([]);

  useEffect(() => {
    api.get("/").then((res) => {
      setEmails(res.data);
    });
  }, []);

  return (
    <>
      <HeaderLanding>
        <h1>Lista de Emails</h1>
        <p onClick={() => console.log("clicked")}>Filtrar</p>
      </HeaderLanding>
      <div className="animate__animated animate__fadeInUp">
        <EmailList>
          {emails.map(
            ({ id, subject, emailfrom, emailto, message, senddate }) => {
              return (
                <EmailCard
                  key={id}
                  subject={subject}
                  from={emailfrom}
                  to={emailto}
                  id={id}
                  message={message}
                  sendDate={senddate}
                />
              );
            }
          )}
        </EmailList>
      </div>
    </>
  );
};

export default Landing;
