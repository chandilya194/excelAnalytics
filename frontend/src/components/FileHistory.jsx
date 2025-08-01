import styles from "./InputDesign.module.css";
import FileItem from "./FileItem";

function FileHistory({filenames}) {
  
//  console.log({filenames})
  return (
    <section className={styles.uploadHistory}>
      <h2 className={styles.uploadhistory}>
        Upload history
      </h2>
      <div className={styles.historyFiles}>
        {filenames.map((file, index) => (
          <FileItem
            key={index}
            id={file._id}
            
            fileName={file.fileName}
            date={file.uploadedAt.match(/\d{4}-\d{2}-\d{2}/)}
          />
        ))}
      </div>
    </section>
  );
}

export default FileHistory;
