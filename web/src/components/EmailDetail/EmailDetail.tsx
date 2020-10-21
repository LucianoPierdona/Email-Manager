import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import api from "../../services/api";
import {
  EmailContent,
  HeaderAndFooterEmail,
  MoreInformationContent,
} from "./styles";

// Declaring the Props from the route params
interface ParamsProps {
  id: string;
}

// Declaring The Props from the database
export interface EmailProps {
  id: number;
  name: string;
  subject: string;
  message: string;
  phone: string;
  email_from: string;
  email_to: string;
  cpf?: string;
  uf?: string;
  city?: string;
  neighborhood?: string;
  profile?: string;
  company?: string;
  expected_date?: string;
  estimated_people?: string;
  product_type?: string;
  production_type?: string;
  lot?: string;
  validity?: string;
  interest_area?: string;
  curriculum_url?: string;
}

const EmailDetail = () => {
  // Take the ID from the params
  const params = useParams<ParamsProps>();

  // get the email
  const [email, setEmail] = useState<EmailProps[]>([]);

  // Call the api and search for the specified email
  useEffect(() => {
    api.get(`/email/${params.id}`).then((res) => {
      setEmail(res.data);
    });
  }, [params.id]);

  return (
    <div className="animate__animated animate__fadeInUp">
      {email.map(
        ({
          email_from,
          email_to,
          subject,
          message,
          name,
          phone,
          profile,
          company,
          uf,
          city,
          neighborhood,
          cpf,
          expected_date,
          estimated_people,
          product_type,
          production_type,
          lot,
          validity,
          interest_area,
          curriculum_url,
        }) => {
          return (
            <>
              <HeaderAndFooterEmail>
                <p>
                  de <strong>{email_from}</strong>
                </p>
                <p>
                  para <strong>{email_to}</strong>
                </p>
              </HeaderAndFooterEmail>
              <EmailContent>
                <h1>{subject}</h1>
                {message !== "" ? (
                  <p>{message}</p>
                ) : (
                  <p>Nenhuma Mensagem Enviada</p>
                )}
              </EmailContent>
              <MoreInformationContent>
                <h1>Mais Informações</h1>
                {subject === "AGENDAMENTO DE VISITAS" && (
                  <>
                    <p>
                      Instituição: <strong>{company}</strong>
                    </p>
                    <p>
                      Data Prevista: <strong>{expected_date}</strong>
                    </p>
                    <p>
                      Estimativa de participantes:{" "}
                      <strong>{estimated_people}</strong>
                    </p>
                  </>
                )}
                {subject === "COMERCIAL" && (
                  <>
                    <p>
                      Perfil do Comprador: <strong>{profile}</strong>
                    </p>
                    <p>
                      Instituição: <strong>{company}</strong>
                    </p>
                    <p>
                      <p>
                        Bairro: <strong>{neighborhood}</strong>
                      </p>
                    </p>
                  </>
                )}
                {subject === "MARKETING" && (
                  <>
                    <p>
                      Instituição: <strong>{company}</strong>
                    </p>
                  </>
                )}
                {subject === "ONDE ENCONTRAR NORDESTE" && (
                  <>
                    <p>
                      Perfil do Comprador: <strong>{profile}</strong>
                    </p>
                    <p>
                      Instituição: <strong>{company}</strong>
                    </p>
                    <p>
                      Bairro: <strong>{neighborhood}</strong>
                    </p>
                    <p>
                      Tipo de Produto: <strong>{product_type}</strong>
                    </p>
                    <p>
                      Tipo de Produção: <strong>{production_type}</strong>
                    </p>
                  </>
                )}
                {subject === "PRODUTOS" && (
                  <>
                    <p>
                      Perfil do Comprador: <strong>{profile}</strong>
                    </p>
                    <p>
                      Instituição: <strong>{company}</strong>
                    </p>
                    <p>
                      Tipo de Produto: <strong>{product_type}</strong>
                    </p>
                    <p>
                      Tipo de Produção: <strong>{production_type}</strong>
                    </p>
                    <p>
                      Lote: <strong>{lot}</strong>
                    </p>
                    <p>
                      Validade: <strong>{validity}</strong>
                    </p>
                  </>
                )}
                {subject === "TRABALHE CONOSCO" && (
                  <>
                    <p>
                      Area de Interesse: <strong>{interest_area}</strong>
                    </p>
                    <p>
                      Link do Curriculo:{" "}
                      <a href={`${curriculum_url}`}>clique aqui</a>
                    </p>
                  </>
                )}
                <div>
                  <p>
                    CPF: <strong>{cpf}</strong>
                  </p>
                  <p>
                    Telefone: <strong>{phone}</strong>
                  </p>
                  <p>
                    UF: <strong>{uf}</strong>
                  </p>
                  <p>
                    Município: <strong>{city}</strong>
                  </p>
                </div>
              </MoreInformationContent>
              <HeaderAndFooterEmail>
                <p>
                  Enviado por: <strong>{name}</strong>
                </p>
                <a href={`mailto:${email_from}`}>Responder</a>
              </HeaderAndFooterEmail>
            </>
          );
        }
      )}
    </div>
  );
};

export default EmailDetail;
