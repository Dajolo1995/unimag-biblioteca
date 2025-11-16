import { Card, Row, Col, Typography } from "antd";
import { equipoTrabajo } from "./equipoTrabajo"; // importa el array de arriba
import BibliotecaLayout from "../../components/layout";

const { Text, Title } = Typography;

export default function EquipoTrabajo() {
  return (
    <BibliotecaLayout>
      {" "}
      <div style={{ padding: "20px 0" }}>
        <Title level={3} style={{ marginBottom: 20 }}>
          Equipo de trabajo
        </Title>

        <Row gutter={[24, 24]}>
          {equipoTrabajo.map((persona, index) => (
            <Col xs={24} sm={12} md={8} lg={6} key={index}>
              <Card
                hoverable
                style={{
                  borderRadius: 12,
                  border: "1px solid #e6e6e6",
                }}
                cover={
                  <img
                    alt={persona.nombre}
                    src={persona.foto}
                    style={{
                      width: "100%",
                      height: 250,
                      objectFit: "cover",
                      borderTopLeftRadius: 12,
                      borderTopRightRadius: 12,
                    }}
                  />
                }
              >
                <Title level={5} style={{ marginBottom: 2 }}>
                  {persona.nombre}
                </Title>

                <Text style={{ display: "block", marginBottom: 6 }}>
                  {persona.cargo}
                </Text>

                <Text type="secondary">{persona.correo}</Text>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </BibliotecaLayout>
  );
}
