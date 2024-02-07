import { useState,ChangeEvent, FormEvent } from "react";
import PageContainer from "../../Pagecontainer";
import GiftBox from "../../assets/images/cupcakebox.webp";
import styles from "./style.module.css";
interface ContactData {
  fullname: string;
  email: string;
  message: string;
}
const Contact = () => {
  const [contactData, setContactData] = useState<ContactData>({ fullname: "", email: "", message: "" });

  const handleValue = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!contactData.fullname.trim() || !contactData.email.trim() || !contactData.message.trim()) {
      console.log("error");
    } else {
      
      console.log(contactData);
    }
    setContactData({ fullname: "", email: "", message: "" });
  };
  
  return (
    <PageContainer>
      <div className="container">
        <div className={styles.fullContact_Screen}>
          <div className={styles.leftSide}>
            <form onSubmit={handleSubmit}>
              <div className={styles.inputGroup}>
                <label htmlFor="fullName">Ad Soyad</label>
                <input type="text" id="fullName" name="fullname" onChange={handleValue} value={contactData.fullname} />
              </div>

              <div className={styles.inputGroup}>
                <label htmlFor="email">E-mail</label>
                <input type="email" id="email" name="email" onChange={handleValue} value={contactData.email}/>
              </div>

              <div className={styles.message}>
                <label htmlFor="message">Mesaj</label>
                <textarea name="message" id="message" onChange={handleValue} value={contactData.message}></textarea>
              </div>
              <button type="submit" className={styles.submitbtn}>
                Gönder
              </button>
            </form>
          </div>

          <div className={styles.rightSide}>
            <img src={GiftBox} alt="img" />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default Contact;
