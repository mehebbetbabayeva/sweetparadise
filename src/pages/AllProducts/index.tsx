import PageContainer from "../../Pagecontainer"
import { FaSearch } from "react-icons/fa";
import styles from "./style.module.css"
import { useState } from "react"
import { productData } from "../../data";
import CardItem from "../../components/CardItem";
import {Link} from "react-router-dom"
const Products = () => {
    const [search, setsearch] = useState("")
    const filteredProducts = productData.filter((card) =>
    
    card.title.toLowerCase().includes(search.toLowerCase())
  );
    


    return (
        <PageContainer>
            <div className="container">
                <div className={styles.center}>
                    <form className={styles.form_register}>
                        <div className={styles.icon_input} >
                            <span> <FaSearch /> </span>
                            <input type="text" placeholder=" Axtar" value={search} onChange={(e) => {
                                setsearch(e.target.value)
                            }} />
                        </div>
                    </form>
                </div>
            </div>
            <div className={styles.productContainer}>
            {filteredProducts.map((product) => (
          <Link to={"/"} key={product.id}>
            <CardItem
              image={product.image}
              title={product.title}
              description={product.description}
              price={product.price}
            />
          </Link>
        ))}
            </div>
        </PageContainer>


    )
}

export default Products