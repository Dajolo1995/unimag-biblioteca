import BibliotecaLayout from "../../../components/layout";

import { useEffect, useState } from "react";
import { Skeleton, Typography, Card } from "antd";
import { ReadOutlined } from "@ant-design/icons";

const { Title, Paragraph } = Typography;

const History = () => {
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
          <Skeleton active paragraph={{ rows: 7 }} />
        ) : (
          <>
            {/* TÍTULO */}
            <div
              style={{ display: "flex", alignItems: "center", marginBottom: 8 }}
            >
              <ReadOutlined
                style={{ fontSize: 28, color: "#004A98", marginRight: 12 }}
              />
              <Title level={3} style={{ margin: 0 }}>
                Historia
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
            <Paragraph style={{ fontSize: 16, lineHeight: 1.9, color: "#444" }}>
              En mayo de 1962 nace la Universidad del Magdalena en el Claustro
              San Juan Nepomuceno, siendo director de Biblioteca el Dr. Carlos
              Cotes Díaz Granados, quien organizó la colección de forma numérica
              y los controles que se tenían para el préstamo y consulta se
              hacían de forma manual; la colección había sido donada por el
              gobierno departamental y por particulares. En los años 70s la
              Universidad se traslada a los terrenos de San Pedro Alejandrino y
              allí la Biblioteca se sitúa donde es ahora el auditorio Julio
              Otero.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.9, color: "#444" }}>
              En este espacio más amplio, la Biblioteca funciona como colección
              abierta y crece gracias a las donaciones que el ICFES hace a ésta.
              Más tarde, en 1988, se traslada al sitio donde se encuentra
              actualmente, estando de rector el Dr. Fernando Gaitán Arciniegas,
              quien plantea la reestructuración de la planta física y del cuerpo
              de trabajo. Es entonces cuando se amplía el personal y se hace
              inversión en compra de libros. Fue solo hasta el 15 de marzo del
              2001 cuando se inicia el proyecto de modernización y
              automatización de la Biblioteca de la Universidad del Magdalena,
              muy de la mano con el proceso de refundación.
            </Paragraph>

            <Paragraph style={{ fontSize: 16, lineHeight: 1.9, color: "#444" }}>
              La Biblioteca se inaugura el 26 de octubre del 2002, en el
              edificio donde actualmente funciona y la misma cuenta con una
              infraestructura logística adecuada, que la posiciona dentro de las
              mejores de la región Caribe colombiana, en conjunto con sus
              procesos automatizados y servicios que cumplen con las demandas
              actuales.
            </Paragraph>
          </>
        )}
      </Card>
    </BibliotecaLayout>
  );
};

export default History;
