import { NavLink, Link } from "react-router-dom";
import styles from "./style.module.css";

const navData = [
  {
    to: "/",
    title: "Ana səhifə",
  },
  {
    to: "/haqqımızda",
    title: "Haqqımızda",
  },
  {
    to: "/kataloq",
    title: "Kataloq",
  },
  {
    to: "/sifariş-et",
    title: "Sifariş et",
  },
  {
    to: "/əlaqə",
    title: "Əlaqə",
  },
];

const Footer = () => {
  return (
    <div className={styles.full_fouter}>
      <div className="container">
        <div className={styles.footer_container}>
          <div className={styles.top_footer}>
            <Link to={"/"}>
              <h1 className={styles.logo}>Sweet Paradise</h1>
            </Link>

            <ul className={styles.nav}>
              {navData.map(({ to, title }) => {
                return (
                  <li key={title} className={styles.hoverLink}>
                    <NavLink to={to} className={styles.navli}>
                      {title}
                    </NavLink>
                  </li>
                );
              })}
            </ul>

            <div className={styles.contact_number}>
              <a href="tel:+38(050)4024030">
                {" "}
                <p>+38 (050) 402 40 30</p>
              </a>
            </div>
          </div>

          <div className={styles.starting_date}>
            <p>Bütün hüquqlar qorunur/2023-2024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
