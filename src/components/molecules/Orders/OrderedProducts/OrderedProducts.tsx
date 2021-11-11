import { Table } from "react-bootstrap";
import styles from "./OrderedProducts.module.css";
import { Link } from "react-router-dom";

interface Props {
  products: any[];
}

const OrderedProducts = ({ products }: Props) => {
  if (!products) return null;
  if (!products.length) return null;

  return (
    <Table striped className={styles.table}>
      <tbody>
        {products.map((product: any) => (
          <tr key={product.id}>
            <td style={{ width: "20%" }}>
              <img
                src={`${product.image}?random=${product.id}`}
                className={styles.img}
                alt=""
              />
            </td>
            <td>
              <Link
                to={`/product/${product.id}`}
                className={styles.heading}
                target="_blank"
              >
                {product.title}
              </Link>
              <br />
              <span>
                <span className={styles.heading}>Quantité : </span>
                {product.qty}
              </span>{" "}
              <br />
              <span>
                <span className={styles.heading}>Taille : </span>
                {product.size}
              </span>{" "}
              <br />
              <span>
                <span className={styles.heading}>Couleur : </span>
                {product.color}
              </span>
            </td>
            <td className={styles.price} style={{ width: "18%" }}>
              ₹ {product.price}
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default OrderedProducts;
