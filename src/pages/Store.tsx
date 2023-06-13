import { Col, Row } from "react-bootstrap";
import data from "../data/items.json";
import { ItemForSale } from "../components";

const Store = () => {
  return (
    <>
      <h1>Store</h1>

      <Row md={2} sm={1} lg={3} className="g-3">
        {data.map((item) => (
          <Col key={item.id}>
            <ItemForSale {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
};
export default Store;
