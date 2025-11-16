import { Layout, Menu, Breadcrumb } from "antd";
import {
  FileTextOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ReadOutlined,
  ProfileOutlined,
} from "@ant-design/icons";
import FooterLayout from "./FooterLayout.jsx";
import { useNavigate, useLocation } from "react-router-dom";

const { Header, Sider, Content, Footer } = Layout;

const breadcrumbMap = {
  "/description/mision": "Misión",
  "/description/vision": "Visión",
  "/description/historia": "Historia",
  "/description/organigrama": "Organigrama",
  "/description/normatividad": "Normatividad",
};

const CUSTOM_TAYRONA_URL =
  "https://unimagdalena.primo.exlibrisgroup.com/discovery/custom/57UMA_INST-UMA/img/banner_tayrona.png";

export default function BibliotecaLayout({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const label = breadcrumbMap[location.pathname];

  const isTayrona = location.pathname === "/servicios/descubridor-tayrona";

  const itemsDescription = [
    {
      key: "mision",
      label: "Misión",
      onClick: () => {
        navigate("/description/mision");
      },
    },
    {
      key: "vision",
      label: "Visión",
      onClick: () => {
        navigate("/description/vision");
      },
    },
    {
      key: "historia",
      label: "Historia",
      onClick: () => {
        navigate("/description/historia");
      },
    },
    {
      key: "organigrama",
      label: "Organigrama",
      onClick: () => {
        navigate("/description/organigrama");
      },
    },
    {
      key: "normatividad",
      label: "Normatividad",
      onClick: () => {
        navigate("/description/normatividad");
      },
    },
  ];

  const itemsServices = [
    {
      key: "servicios",
      label: "Descubridor tayrona",
      onClick: () => {
        navigate("/servicios/descubridor-tayrona");
      },
    },
    {
      key: "bases-de-datos",
      label: "Bases de datos académicas y de investigación",
      onClick: () => {
        navigate("/servicios/bases-de-datos");
      },
    }
  ];

  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* HEADER INSTITUCIONAL */}
      <Header
        style={{
          background: isTayrona ? "#042D59" : "#003a73",
          padding: "0px 30px",
          display: "flex",
          alignItems: "center",
          height: 64,
          justifyContent: isTayrona ? "center" : "flex-start",
        }}
      >
        {isTayrona ? (
          <img
            src={CUSTOM_TAYRONA_URL}
            alt="Banner Tayrona"
            style={{ height: "100%" }}
          />
        ) : (
          <>
            <img
              src="https://cdn.unimagdalena.edu.co/images/escudo/bg_dark/default.png"
              alt="Logo Unimagdalena"
              style={{ height: 45, marginRight: 20 }}
            />

            <div style={{ color: "white", fontSize: 20, fontWeight: "bold" }}>
              Universidad del Magdalena
            </div>
          </>
        )}
      </Header>

      <Layout>
        {/* SIDEBAR LOCAL */}
        <Sider
          width={260}
          style={{
            background: "#fff",
            borderRight: "1px solid #eee",
            paddingTop: 20,
          }}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={["1"]}
            style={{ height: "100%", borderRight: 0 }}
            items={[
              {
                key: "1",
                icon: <ReadOutlined />,
                label: "Presentación",
                onClick: () => {
                  navigate("/");
                },
              },
              {
                key: "2",
                icon: <ProfileOutlined />,
                label: "Descripción",
                children: itemsDescription.map((item) => ({
                  key: item.key,
                  label: item.label,
                })),
                onClick: (e) => {
                  const selectedItem = itemsDescription.find(
                    (item) => item.key === e.key
                  );
                  if (selectedItem && selectedItem.onClick) {
                    selectedItem.onClick();
                  }
                },
              },
              {
                key: "3",
                icon: <AppstoreOutlined />,
                label: "Varios",
                children: [
                  {
                    key: "servicios",
                    label: "Servicios",
                    onClick: () => {
                      navigate("/servicios");
                    },
                  },
                ],
              },
              {
                key: "4",
                icon: <TeamOutlined />,
                label: "Equipo de trabajo",
                onClick: () => {
                  navigate("/equipo-trabajo");
                },
              },
              {
                key: "5",
                icon: <FileTextOutlined />,
                label: "Servicios",
                children: itemsServices.map((item) => ({
                  key: item.key,
                  label: item.label,
                })),
                onClick: (e) => {
                  const selectedItem = itemsServices.find(
                    (item) => item.key === e.key
                  );
                  if (selectedItem && selectedItem.onClick) {
                    selectedItem.onClick();
                  }
                },
              },
            ]}
          />
        </Sider>

        {/* CONTENIDO */}
        <Layout style={{ padding: "20px" }}>
          <Breadcrumb style={{ marginBottom: 20 }}>
            <Breadcrumb.Item>Inicio</Breadcrumb.Item>
            <Breadcrumb.Item>Biblioteca</Breadcrumb.Item>
            <Breadcrumb.Item>Germán Bula Meyer</Breadcrumb.Item>
            <Breadcrumb.Item>{label}</Breadcrumb.Item>
          </Breadcrumb>

          <Content
            style={{
              background: "#fff",
              padding: 30,
              borderRadius: 10,
              minHeight: 400,
            }}
          >
            {children}
          </Content>

          <Footer>
            <FooterLayout />
          </Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
