import React from "react";
import { Card, Button, Tag } from "antd";

export default function BaseCard({ item }) {
  const {
    nombre,
    imagenPath,
    proxyPath,
    categorias,
  } = item;

  const tipo = categorias.suscripcion
    ? "SUSCRIPCIÓN"
    : categorias.libres
    ? "LIBRE"
    : categorias.demostracion
    ? "DEMO"
    : "ACCESO";

  const color =
    tipo === "SUSCRIPCIÓN"
      ? "orange"
      : tipo === "LIBRE"
      ? "green"
      : tipo === "DEMO"
      ? "blue"
      : "geekblue";

  return (
    <Card
      hoverable
      style={{
        width: 220,
        height: 280,
        borderRadius: 18,
        textAlign: "center",
        paddingTop: 10,
        border: "1px solid #e6e6e6",
      }}
      bodyStyle={{ padding: "10px 12px 18px 12px" }}
    >
      {/* HEADER SUPERIOR */}
      <div
        style={{
          background: "#083C6F",
          color: "white",
          fontWeight: 600,
          fontSize: 12,
          padding: "4px 0",
          borderRadius: 14,
          marginBottom: 12,
        }}
      >
        {nombre}
      </div>

      {/* IMAGEN */}
      <div
        style={{
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 10,
        }}
      >
        <img
          src={imagenPath}
          alt={nombre}
          style={{
            maxWidth: "90%",
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </div>

      {/* PIE DE TIPO */}
      <Tag color={color} style={{ marginBottom: 12 }}>
        {tipo}
      </Tag>

      {/* BOTÓN */}
      <Button
        type="primary"
        block
        style={{
          borderRadius: 8,
          background: "#003C76",
        }}
        onClick={() => window.open(proxyPath, "_blank")}
      >
        Leer descripción
      </Button>
    </Card>
  );
}
