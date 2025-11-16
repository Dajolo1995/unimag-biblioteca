import  { useState } from "react";
import { Input, Button, Typography, Card, Row, Col, message, Tag, } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import BibliotecaLayout from "../../components/layout";
import axios from "axios";
import { PictureOutlined, LinkOutlined, InfoCircleOutlined } from "@ant-design/icons";

const { Title, Paragraph, Text } = Typography;

const index = () => {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const handleSearch = async () => {
    if (!query.trim()) {
      message.warning("Por favor ingresa un término de búsqueda.");
      return;
    }

    const response = await axios.get(
      `
https://cdi-api.summon.serialssolutions.com/eautocomplete/person/suggest?q=${query}`,
      {}
    );
    console.log(response.data);

    setResult(response.data);
  };
  return (
    <BibliotecaLayout>
      <div
        style={{
          maxWidth: 1150,
          margin: "40px auto",
          padding: "0 20px",
        }}
      >
        {/* BUSCADOR BONITO */}
        <div
          style={{
            marginBottom: 40,
            background: "#fff",
            padding: "25px 30px",
            borderRadius: 10,
            boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
            display: "flex",
            gap: 15,
          }}
        >
          <Input
            size="large"
            placeholder="Haz una búsqueda en el Descubridor TAYRONA"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            style={{
              borderRadius: 8,
              padding: "10px 14px",
            }}
            onPressEnter={handleSearch}
          />
          <Button
            type="primary"
            size="large"
            icon={<SearchOutlined />}
            onClick={handleSearch}
            style={{
              borderRadius: 8,
              paddingInline: 25,
            }}
          >
            Buscar
          </Button>
        </div>

        {/* CONTENIDO PRINCIPAL */}
        <Row gutter={25}>
          <Col xs={24} md={16}>
            {result.length > 0 ? (
              <div style={{ paddingTop: 20 }}>
                {result.map((item, index) => {
                  const thumbnail = item.image_info?.link_to_thumbnail;
                  const title = item.person_name?.wikidata || "Sin nombre";
                  const description =
                    item.short_description?.wikidata || "Sin descripción";
                  const wiki = item.link_to_wikipedia?.wikidata;

                  return (
                    <Card
                      key={item.id}
                      bordered={false}
                      style={{
                        marginBottom: 15,
                        borderRadius: 10,
                        padding: 15,
                        boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
                      }}
                    >
                      <Row gutter={15}>
                        {/* NÚMERO */}
                        <Col span={1}>
                          <Text
                            type="secondary"
                            style={{ fontSize: 18, fontWeight: "bold" }}
                          >
                            {index + 1}
                          </Text>
                        </Col>

                        {/* IMAGEN */}
                        <Col span={3}>
                          {thumbnail ? (
                            <img
                              src={thumbnail}
                              alt={title}
                              style={{
                                width: "80px",
                                height: "80px",
                                objectFit: "cover",
                                borderRadius: 6,
                                border: "1px solid #eee",
                              }}
                            />
                          ) : (
                            <div
                              style={{
                                width: 80,
                                height: 80,
                                borderRadius: 6,
                                background: "#f5f5f5",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                color: "#999",
                                border: "1px solid #eaeaea",
                              }}
                            >
                              <PictureOutlined style={{ fontSize: 30 }} />
                            </div>
                          )}
                        </Col>

                        {/* CONTENIDO */}
                        <Col span={16}>
                          <div>
                            <Title
                              level={5}
                              style={{ margin: 0, color: "#00528C" }}
                            >
                              {title}
                            </Title>

                            <Paragraph
                              style={{ marginTop: 5, marginBottom: 5 }}
                            >
                              {description}
                            </Paragraph>

                            <Text type="secondary" style={{ fontSize: 13 }}>
                              Puntuación: {item.score}
                            </Text>

                            <div style={{ marginTop: 10 }}>
                              {item.birth_date?.wikidata && (
                                <Tag color="blue">
                                  Nació: {item.birth_date.wikidata}
                                </Tag>
                              )}
                              {item.death_date?.wikidata && (
                                <Tag color="red">
                                  Falleció: {item.death_date.wikidata}
                                </Tag>
                              )}
                            </div>
                          </div>
                        </Col>

                        {/* ACCIONES */}
                        <Col span={4} style={{ textAlign: "right" }}>
                          {wiki && (
                            <Button
                              type="link"
                              icon={<LinkOutlined />}
                              href={wiki}
                              target="_blank"
                            >
                              Wikipedia
                            </Button>
                          )}

                          {item.image_info?.link_to_image_page && (
                            <Button
                              type="link"
                              icon={<InfoCircleOutlined />}
                              href={item.image_info.link_to_image_page}
                              target="_blank"
                            >
                              Imagen
                            </Button>
                          )}
                        </Col>
                      </Row>
                    </Card>
                  );
                })}

  
              </div>
            ) : (
              <>
                <Card
                  bordered={false}
                  style={{
                    borderRadius: 10,
                    boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
                  }}
                >
                  <Title level={3}>
                    ¿Qué es y para qué sirve el Descubridor TAYRONA?
                  </Title>
                  <Paragraph style={{ fontSize: 16, lineHeight: "1.7" }}>
                    El Descubridor TAYRONA es la principal herramienta de
                    búsqueda de la Biblioteca Germán Bula Meyer. Integra
                    recursos físicos, digitales y electrónicos en una sola
                    plataforma para ofrecer acceso rápido a miles de libros,
                    revistas, artículos, material audiovisual y más.
                  </Paragraph>

                  <Paragraph>
                    En esta poderosa herramienta, también puedes:
                  </Paragraph>

                  <ul style={{ fontSize: 16, lineHeight: "1.8" }}>
                    <li>Renovar libros o materiales en préstamo</li>
                    <li>Crear listas de favoritos</li>
                    <li>Guardar búsquedas</li>
                    <li>Exportar citas a RefWorks y EndNote Web</li>
                  </ul>
                </Card>
              </>
            )}

            <Card
              bordered={false}
              style={{
                marginTop: 25,
                borderRadius: 10,
                padding: 25,
                boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
              }}
            >
              <a style={{ fontSize: 16 }}>Déjenos conocer su opinión</a>
            </Card>
          </Col>

          {/* COLUMNA DERECHA */}
          <Col xs={24} md={8}>
            <Card
              bordered={false}
              style={{
                borderRadius: 10,
                boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
              }}
            >
              <Title level={4}>¿Dónde puedo obtener ayuda?</Title>
              <Paragraph>
                <a>Pregunta a un Bibliotecario</a> cómo iniciar su búsqueda.
              </Paragraph>
            </Card>

            <Card
              bordered={false}
              style={{
                marginTop: 25,
                borderRadius: 10,
                boxShadow: "0 3px 12px rgba(0,0,0,0.06)",
              }}
            >
              <Title level={4}>Herramientas para la Investigación</Title>

              <div
                style={{ display: "flex", flexDirection: "column", gap: 12 }}
              >
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/WoS%202.png"
                  style={{ width: "100%" }}
                />
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/scopus%202.png"
                  style={{ width: "100%" }}
                />
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/sjr%202.png"
                  style={{ width: "100%" }}
                />
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/multilegis%202.png"
                  style={{ width: "100%" }}
                />
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/unwto%202.png"
                  style={{ width: "100%" }}
                />
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/vlex%202.jpg"
                  style={{ width: "100%" }}
                />
                <img
                  src="https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/arancel%202.png"
                  style={{ width: "100%" }}
                />
              </div>
            </Card>
          </Col>
        </Row>
      </div>
    </BibliotecaLayout>
  );
};

export default index;
