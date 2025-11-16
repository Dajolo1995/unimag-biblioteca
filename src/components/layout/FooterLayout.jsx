import { Layout, Row, Col, Typography, Space } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  FacebookFilled,
  InstagramFilled,
  TwitterSquareFilled,
  YoutubeFilled,
} from "@ant-design/icons";

const { Text, Link, Title } = Typography;

export default function AppFooter() {
  return (
    <>
      <Row gutter={[32, 32]}>
        {/* CONTACTO */}
        <Col xs={24} md={12} lg={6}>
          <Title level={5}>Información de contacto</Title>

          <Space direction="vertical">
            <Text>
              <MailOutlined />{" "}
              <Link href="mailto:biblioteca@unimagdalena.edu.co">
                biblioteca@unimagdalena.edu.co
              </Link>
            </Text>

            <Text>
              <PhoneOutlined /> 4381000
            </Text>

            <Text>Ext. 3179 - 2180</Text>
          </Space>
        </Col>

        {/* UBICACIÓN */}
        <Col xs={24} md={12} lg={6}>
          <Title level={5}>Ubicación</Title>
          <Text>
            Universidad del Magdalena  
            <br />
            Carrera 32 No. 22-08  
            <br />
            Edificio Principal Bloque 7  
            <br />
            Santa Marta D.T.C.H., Magdalena
          </Text>
        </Col>

        {/* HORARIO */}
        <Col xs={24} md={12} lg={6}>
          <Title level={5}>Horario de atención</Title>
          <Text>
            Lunes a viernes:
            <br />
            06:00 a.m. – 9:00 p.m.
            <br />
            Sábados:
            <br />
            9:00 a.m. – 5:00 p.m.
          </Text>
        </Col>

        {/* SITIO WEB + REDES */}
        <Col xs={24} md={12} lg={6}>
          <Title level={5}>Sitio web</Title>
          <Link href="https://www.unimagdalena.edu.co" target="_blank">
            Clic para ir al sitio web
          </Link>

          <Space style={{ marginTop: 16 }}>
            <Link href="#">
              <FacebookFilled style={{ fontSize: 24, color: "#1877f2" }} />
            </Link>
            <Link href="#">
              <InstagramFilled style={{ fontSize: 24, color: "#C13584" }} />
            </Link>
            <Link href="#">
              <TwitterSquareFilled style={{ fontSize: 24, color: "#1DA1F2" }} />
            </Link>
            <Link href="#">
              <YoutubeFilled style={{ fontSize: 24, color: "red" }} />
            </Link>
          </Space>
        </Col>
      </Row>

      <div style={{ textAlign: "center", marginTop: 40 }}>
        <Text type="secondary">
          © {new Date().getFullYear()} Universidad del Magdalena – Biblioteca
        </Text>
      </div>
    </>
  );
}
