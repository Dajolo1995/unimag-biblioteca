import { useEffect, useState } from "react";
import { Skeleton, Typography, Card } from "antd";
import { EyeOutlined } from "@ant-design/icons";
import BibliotecaLayout from "../../../components/layout";

const { Title, Paragraph } = Typography;

export default function Vision() {
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
          <Skeleton active paragraph={{ rows: 5 }} />
        ) : (
          <>
            {/* TÍTULO */}
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <EyeOutlined
                style={{ fontSize: 28, color: "#004A98", marginRight: 12 }}
              />
              <Title level={3} style={{ margin: 0 }}>
                Visión
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

            {/* TEXTO */}
            <Paragraph style={{ fontSize: 16, lineHeight: 1.8, color: "#444" }}>
              Ser reconocida a nivel regional y nacional como una biblioteca:
            </Paragraph>

            <ul
              style={{
                fontSize: 16,
                lineHeight: "1.9",
                color: "#444",
                paddingLeft: 24,
              }}
            >
              <li>
                Que promueva la innovación, creatividad y empatía en todos los
                servicios que presta.
              </li>
              <li>
                Que preste servicios de manera ágil, eficiente y de fácil acceso
                a las diversas comunidades de la institución.
              </li>
              <li>
                Que aporte valor a la transformación digital para la
                optimización, ampliación y seguimiento de los procesos
                institucionales.
              </li>
              <li>
                Que posea un acervo bibliográfico fortalecido para la búsqueda
                de información por parte de la comunidad académica y de
                investigación.
              </li>
              <li>
                Que trabaje articuladamente con las unidades académicas y la
                vicerrectoría de investigación.
              </li>
            </ul>
          </>
        )}
      </Card>
    </BibliotecaLayout>
  );
}
