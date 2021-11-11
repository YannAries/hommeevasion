import React, { useState } from 'react'
import { Card, Row, Col } from 'react-bootstrap'
import { AddToCartButton, WishlistButton } from 'components/atoms/Buttons'
import styles from './KeyInfo.module.css'

interface Props {
  product: any
}

export const KeyInfo: React.FC<Props> = ({ product }: Props) => {
  const [size, setSize] = useState<string>()
  const [color, setColor] = useState<string>()
  return (
    <Card className={styles.card}>
      <Card.Header as="div">
        <span className={styles.title}>{product.title}</span>
        <br />
        <span className={styles.smallDesc}>{product.smallDesc}</span>
      </Card.Header>
      <Card.Body className={styles.cardBody}>
        <Row>
          <Col sm={7}>
            <Row>
              <Col>
                <table>
                  <tbody>
                    <tr>
                      <td className={styles.heading}>Évaluation :</td>
                      <td>
                        <div className={styles.starRatings}>
                          {[...Array(product.ratings)].map((value, index) => (
                            <span key={index}>★</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                    <tr>
                      <td className={styles.heading} style={{ width: '60%' }}>
                        Vendeur :
                      </td>
                      <td>{product.seller}</td>
                    </tr>
                    <tr>
                      <td className={styles.heading}>Tarif de livraison :</td>
                      <td>{product.deliveryCharge}</td>
                    </tr>
                    <tr>
                      <td className={styles.heading}>Prix :</td>
                      <td>
                        <span className={styles.priceWithoutDiscount}>{(product.price * (100 - product.discount)) / 100}$
                        </span>
                        <span className={styles.price}>{product.price}$</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col sm={4}>
                <span className={styles.heading}>Taille :</span>
              </Col>
              <Col>
                {product.size?.map((sz: string, idx: number) => {
                  return (
                    <button
                      key={idx}
                      className={styles.btnSizeColor}
                      style={sz === size ? { backgroundColor: '#ff3e6c', border: 'none', color: 'white' } : {}}
                      onClick={() => setSize(sz)}>
                      {sz}
                    </button>
                  )
                })}
              </Col>
            </Row>
            <Row>
              <Col sm={4}>
                <span className={styles.heading}>Couleur :</span>
              </Col>
              <Col>
                {product.colors?.map((clr: string, idx: number) => {
                  return (
                    <button
                      key={idx}
                      className={styles.btnSizeColor}
                      style={clr === color ? { backgroundColor: '#ff3e6c', border: 'none', color: 'white' } : {}}
                      onClick={() => setColor(clr)}>
                      {clr}
                    </button>
                  )
                })}
              </Col>
            </Row>
            <Row>
              <div>
                <br />
              </div>
            </Row>
            <Row>
              <Col>
                <AddToCartButton productId={product.id} size={size} color={color} />
              </Col>
            </Row>
            <Row>
              <Col>
                <WishlistButton productId={product.id} />
              </Col>
            </Row>
          </Col>
        </Row>
        <Row>
          <div>
            <br />
          </div>
        </Row>
        <Row>
          <Col>
            <h2>Description :</h2>
            <span>{product.desc}</span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  )
}
