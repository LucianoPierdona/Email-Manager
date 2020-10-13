import React from "react";
import { data } from "../../data";
import EmailCard from "../EmailCard/EmailCard";
import { EmailList, HeaderLanding } from "./styles";

const Landing = () => {
  return (
    <>
      <HeaderLanding>
        <h1>Lista de Emails</h1>
        <p onClick={() => console.log("clicked")}>Filtrar</p>
      </HeaderLanding>
      <div className="animate__animated animate__fadeInUp">
        <EmailList>
          {data.emails.contato.map(
            ({ id, subject, from, to, sendDate, message }) => {
              return (
                <EmailCard
                  key={id}
                  subject={subject}
                  from={from}
                  to={to}
                  id={id}
                  message={message}
                  sendDate={sendDate}
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
