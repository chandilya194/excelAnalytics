import styles from "./InputDesign.module.css";
import FileItem from "./FileItem";

function FileHistory() {
  const files = [
    { fileName: "File_name", date: "25/7/25" },
    { fileName: "File_name", date: "25/7/25" },
    { fileName: "File_name", date: "25/7/25" }
  ];
 
  return (
    <section className={styles.uploadHistory}>
      <h2 className={styles.uploadhistory}>
        Upload history
      </h2>
      <div className={styles.historyFiles}>
        {files.map((file, index) => (
          <FileItem
            key={index}
            fileName={file.fileName}
            date={file.date}
          />
        ))}
      </div>
    </section>
  );
}

export default FileHistory;
