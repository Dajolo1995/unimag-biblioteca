import  { useEffect, useState } from "react";
import { Skeleton, Typography, Card } from "antd";
import { ToolOutlined } from "@ant-design/icons";
import BibliotecaLayout from "../../components/layout";

const { Title, Paragraph, Link } = Typography;

export default function Servicios() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <BibliotecaLayout>
      <Card
        style={{
          padding: 32,
          borderRadius: 12,
          border: "1px solid #e6e6e6",
          background: "#ffffff",
        }}
      >
        {loading ? (
          <Skeleton active paragraph={{ rows: 8 }} />
        ) : (
          <>
            {/* TÍTULO */}
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <ToolOutlined
                style={{ fontSize: 28, color: "#004A98", marginRight: 12 }}
              />
              <Title level={3} style={{ margin: 0 }}>
                Servicios
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

            {/* INTRODUCCIÓN */}
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#444" }}>
              La Biblioteca Germán Bula Meyer, como epicentro del conocimiento y
              pilar fundamental dentro de los procesos académicos de
              investigación de la Universidad del Magdalena, ofrece a la
              comunidad estudiantil, docente y en general los siguientes
              servicios:
            </Paragraph>

            {/* LISTA NUMERADA */}
            <ol
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: "#444",
                paddingLeft: 24,
              }}
            >
              <li>
                Préstamo de material bibliográfico. <Link href="#">(Ver)</Link>
              </li>
              <li>Préstamo de Salas virtuales y sala de reuniones.</li>
              <li>Préstamo de dispositivos móviles (Tablets).</li>
              <li>
                Estadísticas. <Link href="#">(Ver)</Link>
              </li>
              <li>
                Biblioteca Digital, a través de consultas en el Catálogo en
                línea, con acceso a Bases de Datos electrónicas.{" "}
                <Link href="#">(Ver)</Link>
              </li>
              <li>Servicio de Referencia y Orientación al Usuario.</li>
              <li>
                Capacitaciones en uso y manejo de Bases de Datos Virtuales.
              </li>
              <li>
                Alfabetización Informacional “ALFIN” y Tecnológica “ALFINTIC”
                (Uso de Gestores Bibliográficos).
              </li>
              <li>
                Repositorio Digital Institucional Unimagdalena.{" "}
                <Link href="#">(Ver)</Link>
              </li>

              <li style={{ marginTop: 18 }}>
                Módulo administrativo <Link href="#">(Ver)</Link>
              </li>
            </ol>

            {/* SUBLISTA CON BULLETS */}
            <ul
              style={{
                fontSize: 16,
                lineHeight: 1.9,
                color: "#444",
                paddingLeft: 24,
                marginTop: 16,
              }}
            >
              <li>
                Guía de publicación de trabajo de grado – ESTUDIANTES{" "}
                <Link href="#">(Ver)</Link>
              </li>
              <li>
                Licencia de publicación para trabajos de investigación (BL.F12).{" "}
                <Link href="#">(Ver)</Link>
              </li>
              <li>
                Guía de revisión de trabajos de grado – COORDINADORES ACADÉMICOS{" "}
                <Link href="#">(Ver)</Link>
              </li>
              <li>
                Procedimientos, guías, instructivos y formatos de modalidades de
                grado. <Link href="#">(Ver)</Link>
              </li>
            </ul>
          </>
        )}
      </Card>
    </BibliotecaLayout>
  );
}
