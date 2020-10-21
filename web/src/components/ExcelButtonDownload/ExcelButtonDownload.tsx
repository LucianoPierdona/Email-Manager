import React, { useState, useEffect } from "react";
import ReactExport from "react-export-excel";
import api from "../../services/api";
import { EmailProps } from "../EmailDetail/EmailDetail";

// Excel Button Creator && Tables Creation
const ExcelButtonDownload = () => {
  // All the data
  const [data, setData] = useState<EmailProps[]>([]);

  // Take the properties from the react-export-excel module
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
  const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

  // Take all the data from the database
  useEffect(() => {
    api.get("/").then((res) => {
      setData(res.data);
    });
  }, []);

  // Create the Excel Structure
  return (
    <ExcelFile element={<button className="link">Download em XLSX</button>}>
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
  );
};

export default ExcelButtonDownload;
