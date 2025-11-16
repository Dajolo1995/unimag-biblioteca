import  { useEffect, useState } from "react";
import { Skeleton, Typography, Card } from "antd";
import { AimOutlined } from "@ant-design/icons";
import BibliotecaLayout from "../../../components/layout";

const { Title, Paragraph } = Typography;

export default function Mision() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de petición de 2 segundos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
<BibliotecaLayout>
        <Card
      style={{
        padding: 32,
        borderRadius: 12,
        border: "1px solid #e6e6e6",
      }}
    >
      {loading ? (
        <Skeleton active paragraph={{ rows: 4 }} />
      ) : (
        <>
          {/* TÍTULO */}
          <div style={{ display: "flex", alignItems: "center", marginBottom: 8 }}>
            <AimOutlined style={{ fontSize: 28, color: "#004A98", marginRight: 12 }} />
            <Title level={3} style={{ margin: 0 }}>
              Misión
            </Title>
          </div>

          {/* DIVISOR */}
          <div
            style={{
              width: 70,
              height: 3,
              background: "#004A98",
              margin: "12px 0 24px",
            }}
          />

          {/* CONTENIDO */}
          <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#444" }}>
            Brindar recursos de información que coadyuven al cumplimiento de los ejes misionales
            institucionales (docencia, investigación y extensión), a través de un acervo documental 
            actualizado y pertinente en formato físico, digital y/o electrónico; dirigidos a la 
            satisfacción de las necesidades de formación e información de la comunidad universitaria, 
            soportados en una infraestructura tecnológica moderna e innovadora y guiados por talento 
            humano calificado con vocación de servicio impartiendo herramientas de alfabetización 
            informacional que fortalecen los procesos académicos y de investigación.
          </Paragraph>
        </>
      )}
    </Card>
</BibliotecaLayout>

  );
}

