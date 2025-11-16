import { Button, Typography } from "antd";

const { Title, Paragraph } = Typography;

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#000",
        padding: 20,
        textAlign: "center",
      }}
    >
      {/* NÚMERO 404 */}
      <div style={{ display: "flex", alignItems: "center", marginBottom: 20 }}>
        
        {/* 4 */}
        <Title
          level={1}
          style={{ fontSize: "120px", margin: 0, color: "#fff", fontWeight: 800 }}
        >
          4
        </Title>

        {/* 0 (IMAGEN GIRANDO) */}
        <img
          src="https://cdn.unimagdalena.edu.co/images/escudo/bg_dark/default.png"
          alt="Escudo UM"
          style={{
            width: 120,
            height: 120,
            margin: "0 10px",
            borderRadius: "50%",
            animation: "spin 6s linear infinite",
          }}
        />

        {/* 4 */}
        <Title
          level={1}
          style={{ fontSize: "120px", margin: 0, color: "#fff", fontWeight: 800 }}
        >
          4
        </Title>
      </div>

      {/* TEXTO */}
      <Title level={2} style={{ marginBottom: 8 }}>
        Página no encontrada
      </Title>

      <Paragraph style={{ fontSize: 16, color: "#fff", maxWidth: 500 }}>
        Lo sentimos, la página que estás buscando no existe o fue movida.
      </Paragraph>

      {/* BOTÓN */}
      <Button type="primary" size="large" href="/">
        Volver al inicio
      </Button>

      {/* ANIMACIÓN CSS */}
      <style>
        {`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}
      </style>
    </div>
  );
}
