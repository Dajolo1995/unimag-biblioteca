import React, { useState } from "react";
import BaseFilters from "./BaseFilters";
import BaseCard from "./BaseCard";
import { Row, Col, Empty } from "antd";
import  {data}  from "./db"; // Asegúrate de tener un archivo dataBases.js que exporte los datos
import BibliotecaLayout from "../../components/layout";
export default function BasesPage() {
  const [filters, setFilters] = useState({});

  const filtered = data.filter((item) =>
    Object.keys(filters).every((key) =>
      filters[key] ? item.categorias[key] : true
    )
  );

  return (
    <BibliotecaLayout>
      <div style={{ maxWidth: 1150, margin: "0 auto", padding: "40px 20px" }}>
        <BaseFilters filters={filters} setFilters={setFilters} />

        {filtered.length === 0 && (
          <Empty description="No se encontraron bases de datos con estos filtros." />
        )}

        <Row gutter={[20, 20]}>
          {filtered.sort((a, b) => a.nombre.localeCompare(b.nombre)).map((item) => (
            <Col key={item.nombre} xs={24} sm={12} md={8} lg={6} xl={6}>
              <BaseCard item={item} />
            </Col>
          ))}
        </Row>
      </div>
    </BibliotecaLayout>
  );
}
