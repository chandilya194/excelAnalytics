import styles from "./InputDesign.module.css";
import StatsCard from "./StatsCard";
import UploadSection from "./UploadSection";
import FileHistory from "./FileHistory";
 
function MainContent() {
  return (
    <main className={styles.main}>
      <div className={styles.head}>
       
          <span className={styles.hai}>Hai,<span className={styles.chandilya}>Chandilya</span></span>
          <span style={{opacity:"50%",fontSize:"20px"}}>Upload your excel files and visualize your data</span>
       
        
      </div>

      <div className={styles.cards}>
        <StatsCard count="0" label="Uploads" type="upload" />
        <StatsCard count="0" label="Downloads" type="download" />
      </div>

      <UploadSection />

      <FileHistory />
    </main>
  );
}

export default MainContent;
