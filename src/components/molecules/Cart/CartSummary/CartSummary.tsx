import { useEffect, useState } from "react";
import { Card, Table } from "react-bootstrap";
import { BsCardList } from "react-icons/bs";
import { MdLocalOffer, MdLocalShipping } from "react-icons/md";
import { HiReceiptTax } from "react-icons/hi";
import { BiRupee } from "react-icons/bi";

import styles from "./CartSummary.module.css";

interface Props {
  cartItems: any[];
  netPayableAmt: number;
  updateNetPaybleAmt: any;
}

export const CartSummary = ({
  cartItems,
  netPayableAmt,
  updateNetPaybleAmt,
}: Props) => {
  const [total, setTotal] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [deliveryCharge, setDeliveryCharge] = useState(0);
  const [gst, setGst] = useState(0);

  useEffect(() => {
    setTotal(
      Math.round(
        cartItems.reduce(
          (acc: number, curr: any) =>
            (acc +=
              curr.product.price *
              curr.qty *
              (1 + curr.product.discount / 100)),
          0
        )
      )
    );
    setDiscount(
      cartItems.reduce(
        (acc: number, curr: any) =>
          (acc += Math.round(
            curr.product.price * curr.qty * (curr.product.discount / 100)
          )),
        0
      )
    );
    setGst(Math.round((total - discount) * 0.1));
    setDeliveryCharge(
      cartItems.reduce(
        (acc: number, curr: any) => (acc += curr.product.deliveryCharge),
        0
      )
    );
  }, [cartItems]);

  useEffect(() => {
    updateNetPaybleAmt(total - discount + gst + deliveryCharge);
  }, [total, discount, gst, deliveryCharge]);

  return (
    <div>
      <Card className={styles.card}>
        <Card.Header as="h4">Total du panier</Card.Header>
        <Card.Body>
          <Table hover className={styles.table}>
            <tbody>
              <tr>
                <td style={{ width: "10%" }}>
                  <BsCardList className={styles.icon} />
                </td>
                <td className={styles.heading}>Total</td>
                <td>C$ {total}</td>
              </tr>
              <tr>
                <td>
                  <MdLocalOffer className={styles.icon} />
                </td>
                <td className={styles.heading}>Remise appliquée</td>
                <td>C$ {discount}</td>
              </tr>
              <tr>
                <td>
                  <HiReceiptTax className={styles.icon} />
                </td>
                <td className={styles.heading}>TVA</td>
                <td>C$ {gst}</td>
              </tr>
              <tr>
                <td>
                  <MdLocalShipping className={styles.icon} />
                </td>
                <td className={styles.heading}>Tarif de livraison</td>
                <td>C$ {0}</td>
              </tr>
              <tr>
                <td>
                  <BiRupee className={styles.icon} />
                </td>
                <td className={styles.heading}>Montant à payer</td>
                <td>C$ {netPayableAmt}</td>
              </tr>
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </div>
  );
};
