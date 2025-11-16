import BibliotecaLayout from "../../components/layout";

import { Carousel, Typography, List, Card } from "antd";

const { Title, Text, Paragraph, Link } = Typography;

const Home = () => {
  const noticiasMock = [
    {
      id: 1,
      title: "Segunda Jornada de Atención 24 Horas - Segundo Semestre 2025",
      date: "14/10/2025 10:45 AM",
      image: "https://www.unimagdalena.edu.co/Content/Imagenes/Sliders/Dependencias/slider-20231024180230_257.jpg",
      url: "#",
    },
    {
      id: 2,
      title: "Primera Jornada de Atención 24 Horas (2025-2)",
      date: "11/09/2025 09:54 AM",
      image: "https://www.unimagdalena.edu.co/Content/Imagenes/Sliders/Dependencias/slider-20231024180449_281.jpg",
      url: "#",
    },
    {
      id: 3,
      title: "1ra Jornada de Atención 24 horas | 2025-1",
      date: "04/03/2025 04:09 PM",
      image: "https://www.unimagdalena.edu.co/Content/Imagenes/Sliders/Dependencias/slider-20231024180555_873.jpg",
      url: "#",
    },
  ];

  const imageCarousel = [
    "https://www.unimagdalena.edu.co/Content/Imagenes/Sliders/Dependencias/slider-20231024180555_873.jpg",
    "https://www.unimagdalena.edu.co/Content/Imagenes/Sliders/Dependencias/slider-20231024180449_281.jpg",
    "https://www.unimagdalena.edu.co/Content/Imagenes/Sliders/Dependencias/slider-20231024180230_257.jpg",
  ];

  return (
    <BibliotecaLayout>
      <div style={{ maxWidth: 1000, margin: "0 auto", padding: "32px 16px" }}>
        {/* ======================= */}
        {/*        CARUSEL          */}
        {/* ======================= */}
        <Carousel
          autoplay
          dots
          style={{ borderRadius: 12, overflow: "hidden" }}
        >
          {imageCarousel.map((src, index) => (
            <div key={index}>
              <img
                src={src}
                alt={`slide-${index}`}
                style={{
                  width: "100%",
                  height: 350,
                  objectFit: "cover",
                }}
              />
            </div>
          ))}
        </Carousel>

        {/* ======================= */}
        {/*  TEXTO DESCRIPTIVO     */}
        {/* ======================= */}
        <div style={{ marginTop: 32 }}>
          <Paragraph style={{ fontSize: 16, lineHeight: 1.7, color: "#444" }}>
            Es el epicentro del conocimiento, toda vez que apoya los procesos
            académicos, de investigación y de extensión, por contar con amplias
            colecciones bibliográficas físicas, digitales y/o electrónicas;
            complementados con servicios enfocados en las necesidades de
            información de la comunidad académica y de investigación,
            promoviendo la innovación, creatividad y empatía en cada servicio.
          </Paragraph>
        </div>

        {/* ======================= */}
        {/*    DIVISOR AZUL        */}
        {/* ======================= */}
        <div
          style={{
            width: 70,
            height: 3,
            background: "#004A98",
            margin: "32px 0 12px",
          }}
        />

        {/* ======================= */}
        {/*       NOTICIAS         */}
        {/* ======================= */}
        <Title level={3} style={{ marginBottom: 20 }}>
          Noticias
        </Title>

        <List
          itemLayout="horizontal"
          dataSource={noticiasMock}
          renderItem={(item) => (
            <Card
              key={item.id}
              style={{
                marginBottom: 16,
                borderRadius: 12,
                border: "1px solid #e9e9e9",
              }}
              bodyStyle={{ padding: 16 }}
            >
              <List.Item
                extra={
                  <img
                    src={item.image}
                    alt="noticia"
                    style={{
                      width: 120,
                      height: 80,
                      borderRadius: 8,
                      objectFit: "cover",
                    }}
                  />
                }
              >
                <List.Item.Meta
                  title={
                    <Text style={{ fontSize: 12, color: "#666" }}>
                      {item.date}
                    </Text>
                  }
                  description={
                    <>
                      <Title level={5} style={{ margin: "4px 0 8px" }}>
                        {item.title}
                      </Title>
                      <Link href={item.url}>Ver más</Link>
                    </>
                  }
                />
              </List.Item>
            </Card>
          )}
        />

        {/* ======================= */}
        {/*    BOTÓN MÁS NOTICIAS  */}
        {/* ======================= */}
        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link style={{ fontSize: 14, fontWeight: 500 }}>
            Ver más noticias
          </Link>
        </div>
      </div>
    </BibliotecaLayout>
  );
};

export default Home;
