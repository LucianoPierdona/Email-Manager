import React, { useState } from "react";
import { useEffect } from "react";
import { CSVLink } from "react-csv";
import api from "../../services/api";
import EmailCard from "../EmailCard/EmailCard";
import ExcelButtonDownload from "../ExcelButtonDownload/ExcelButtonDownload";
import { EmailList, FiltersBlock, HeaderLanding } from "./styles";

// Email Landing Props
interface EmailLandingProps {
  subject: string;
  message: string;
  email_from: string;
  email_to: string;
  id: number;
}

const filtersSubject = [
  "COMERCIAL",
  "TRABALHE CONOSCO",
  "OUTROS",
  "AGENDAMENTO DE VISITAS",
  "OUVIDORIA",
  "PRODUTOS",
];

// Initial Page
const Landing = () => {
  // List of emails
  const [emails, setEmails] = useState<EmailLandingProps[]>([]);
  // Filters
  const [filters, setFilters] = useState("");
  const [showFilters, setShowFilters] = useState(false);

  // Call the api to get all the emails
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
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="link filter"
          >
            Filtros
          </button>
          <ExcelButtonDownload />
          <CSVLink className="link" data={emails}>
            Download em CSV
          </CSVLink>
        </div>
      </HeaderLanding>
      <div className="animate__animated animate__fadeInUp">
        {showFilters && (
          <FiltersBlock className="animate__animated animate__fadeIn">
            <div className="header-filters">
              <h1>Filtros</h1>
              <p>Filtrar por Assunto</p>
            </div>
            <ul>
              {filtersSubject.map((subject) => {
                return (
                  <li value={subject} onClick={() => setFilters(subject)}>
                    {subject}
                  </li>
                );
              })}
            </ul>
          </FiltersBlock>
        )}
        <EmailList>
          {emails?.map(({ id, subject, email_from }) => {
            if (filters === "") {
              return (
                <EmailCard
                  key={id}
                  subject={subject}
                  from={email_from}
                  id={id}
                />
              );
            } else if (filters === subject) {
              return (
                <EmailCard
                  key={id}
                  subject={subject}
                  from={email_from}
                  id={id}
                />
              );
            }
          })}
        </EmailList>
      </div>
    </>
  );
};

export default Landing;
