import styles from "./style.module.css";
import Video1 from "../../assets/images/video1Page.jpeg";
import Video2 from "../../assets/images/video2Page.jpeg";
import Video3 from "../../assets/images/video3Page.jpeg";
import Video4 from "../../assets/images/video4Page.jpeg";
import Video5 from "../../assets/images/video5Page.jpeg";
import Video6 from "../../assets/images/video6Page.jpeg";
import Video7 from "../../assets/images/video7Photo.png";
import VideoButton from "../../components/VideoButton"
import { Link } from "react-router-dom";

const index = () => {
  return (
    <div className="container">
      <div className={styles.allVideos_Container}>
        <div className={styles.firstVideo}>
          <img src={Video1} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton/>
          </Link>
          
        </div>

        <div className={styles.fourthVideo}>
          <img src={Video4} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton />
          </Link>

        </div>
        <div className={styles.sixthVideo}>
          <img src={Video6} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton />
          </Link>

        </div>

        <div className={styles.secondVideo}>
          <img src={Video2} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton />
          </Link>
        </div>

        <div className={styles.fifthVideo}>
         
          <img src={Video5} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton />
          </Link>
        </div>

        <div className={styles.seventhVideo}>
          <img src={Video7} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton />
          </Link>
        </div>

        <div className={styles.thirdVideo}>
          <img src={Video3} alt="" />
          <Link to="https://youtu.be/WH1IeQlM2Jk?si=WdyOHBjgqwRCOcLQ"> 
          <VideoButton />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default index;
