import PageContainer from "../../Pagecontainer";
import styles from "./styles.module.css";

import Aboutimg from "../../assets/images/R158174-fc2d2016fe184e048cc01ba08878e38b_900x.webp";

const AboutPage = () => {
    return (
        <PageContainer>
            <div className={styles.about_container}>
                <div className="container">
                    <div className={styles.imageand_text} >

                        <div className={styles.image} ><img src={Aboutimg} alt="img" /> </div>

                        <div className={styles.about_text_container}>
                            
                            <h2 className={styles.about_us_header}>Sweet Paradise</h2>
                            <p className={styles.text_about}>
                                
                               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum ut sed totam ex quisquam dignissimos. Reiciendis placeat assumenda culpa quam officia nemo illo sapiente dolor excepturi consequuntur! Repellendus a suscipit hic beatae provident optio, molestiae mollitia, aspernatur, eveniet nihil veritatis. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil, debitis omnis. Iusto amet accusamus quam omnis harum ipsa perferendis id! Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nulla minima, impedit eaque delectus voluptatem </p>
                        </div>
                    </div>
                </div>
            </div>
        </PageContainer>
    );
}

export default AboutPage;
