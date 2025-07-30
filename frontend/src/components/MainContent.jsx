import styles from "./InputDesign.module.css";
import StatsCard from "./StatsCard";
import UploadSection from "./UploadSection";
import FileHistory from "./FileHistory";

function MainContent() {
  return (
    <main className={styles.main}>
      <header className={styles.head}>
        <div className={styles.greeting}>
          <h1 className={styles.hai}>Hai,</h1>
          <h1 className={styles.chandilya}>Chandilya</h1>
        </div>
        <p className={styles.uploadyourExcelfilesandvisualizeyourdata}>
          Upload your Excel files and visualize your data.
        </p>
      </header>

      <section className={styles.cards}>
        <StatsCard count="0" label="Uploads" type="upload" />
        <StatsCard count="0" label="Downloads" type="download" />
      </section>

      <UploadSection />

      <FileHistory />
    </main>
  );
}

export default MainContent;
