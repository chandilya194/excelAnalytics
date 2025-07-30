import styles from "./InputDesign.module.css";
import logo from "../assets/delete_button.png"
function FileItem({ fileName, date }) {
  return (
    <article className={styles.historyFile}>
      <div className={styles.fileBody}>
        <span className={styles.fileName}>
          {fileName}
        </span>
        <time className={styles.css25725}>
          {date}
        </time>
      </div>
      <div className={styles.fileButton}>
        <button className={styles.analyzeButton}>
          <span className={styles.analyze}>
            Analyze
          </span>
        </button>
       
        <button className={styles.delbut}>
           <div>
            <img className={styles.delimg} src={logo} alt="Logo" />
          </div>
        </button>
        
      </div>
    </article>
  );
}

export default FileItem;
