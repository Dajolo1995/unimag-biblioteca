import React from "react";
import { Checkbox } from "antd";

const labels = {
  empresarialesEconomicas: "Ciencias Empresariales",
  ingenieria: "Ingeniería",
  cienciasBasicas: "Ciencias Básicas",
  humanidades: "Humanidades",
  cienciasSalud: "Ciencias de la Salud",
  cienciasEducacion: "Educación",
  suscripcion: "Suscripción",
  demostracion: "Demostración",
  libres: "Libres",
  proquest: "ProQuest",
  mcGrawHill: "McGraw Hill",
  gale: "Gale",
  indiceBibliometrico: "Índice Bibliométrico",
  plataformaProfesional: "Plataforma Profesional",
};

export default function BaseFilters({ filters, setFilters }) {
  return (
    <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 25 }}>
        Filtar por:
      {Object.keys(labels).map((key) => (
        <Checkbox
          key={key}
          checked={filters[key]}
          onChange={(e) =>
            setFilters({ ...filters, [key]: e.target.checked })
          }
        >
          {labels[key]}
        </Checkbox>
      ))}
    </div>
  );
}
