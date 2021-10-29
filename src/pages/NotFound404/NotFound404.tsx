import ProductScreenTemplate from 'components/templates/ProductscreenTemplate/ProductScreenTemplate'
import styles from './NotFound404.module.css'

interface Props {
  message?: string
}

const NotFound404 = ({ message }: Props) => {
  return (
    <ProductScreenTemplate>
      <div className={styles.main}>
        <div className={styles.fof}>
          <h1 className={styles.err}>{message || 'Page non trouvée !'}</h1>
          <br />
          <a href="/" className={styles.link}>
            Aller à la page d&#39;accueil
          </a>
        </div>
      </div>
    </ProductScreenTemplate>
  )
}

export default NotFound404
