import React, { useState } from "react";
import { useEffect } from "react";
import { CSVDownload, CSVLink } from "react-csv";
import api from "../../services/api";
import EmailCard from "../EmailCard/EmailCard";
import { EmailProps } from "../EmailDetail/EmailDetail";
import { EmailList, HeaderLanding } from "./styles";
import ReactExport from "react-export-excel";

interface EmailLandingProps {
  subject: string;
  message: string;
  email_from: string;
  email_to: string;
  id: number;
}

const Landing = () => {
  const [emails, setEmails] = useState<EmailLandingProps[]>([]);
  const [data, setData] = useState<EmailProps[]>([]);

  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  useEffect(() => {
    api.get("/").then((res) => {
      setData(res.data);
      setEmails(res.data);
    });
  }, []);

  return (
    <>
      <HeaderLanding>
        <h1>Lista de Emails</h1>
        <div>
          <ExcelFile element={<a className="link">Download Data</a>}>
            <ExcelSheet data={data} name="emails">
              <ExcelColumn label="ID" value="id" />
              <ExcelColumn label="Nome" value="name" />
              <ExcelColumn label="CPF" value="cpf" />
              <ExcelColumn label="Telefone" value="Phone" />
              <ExcelColumn label="De" value="email_from" />
              <ExcelColumn label="Para" value="email_to" />
              <ExcelColumn label="Assunto" value="subject" />
              <ExcelColumn label="Mensagem" value="message" />
              <ExcelColumn label="UF" value="uf" />
              <ExcelColumn label="Bairro" value="neighborhood" />
              <ExcelColumn label="Empresa" value="company" />
              <ExcelColumn label="Perfil Do Comprador" value="profile" />
              <ExcelColumn label="Data Estimada" value="expected_date" />
              <ExcelColumn label="Pessoas Esperadas" value="estimated_people" />
              <ExcelColumn label="Tipo de Produto" value="product_type" />
              <ExcelColumn label="Tipo de Producao" value="production_type" />
              <ExcelColumn label="Lote" value="lot" />
              <ExcelColumn label="Validade" value="validity" />
              <ExcelColumn label="Area de Interesse" value="interest_area" />
              <ExcelColumn
                label="Curriculo"
                value={({ curriculum_url }: any) =>
                  curriculum_url.length > 42 ? curriculum_url : ""
                }
              />
            </ExcelSheet>
          </ExcelFile>
          <CSVLink className="link" data={data}>
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
