import styles from "./InputDesign.module.css";
import logo from "../assets/delete_button.png";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function FileItem({ id,fileName, date}) {
  const navigate = useNavigate();
  const itemdelete=()=>{
     
     const token= localStorage.getItem("token")
     
axios.delete("http://localhost:5000/upload/"+id,{headers:{Authorization:`Bearer ${token}`}})
.then((res)=>console.log(res.data.mess))
  }
  const gotoo=()=>{
navigate("/check?mode=analyze&id="+id);
  }
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
        <button className={styles.analyzeButton} onClick={gotoo}>
          <span className={styles.analyze}>
            Analyze
          </span>
        </button>
       
        <button className={styles.delbut}>
           <div>
            <img className={styles.delimg} onClick={itemdelete} src={logo} alt="Logo" />
          </div>
        </button>
        
      </div>
    </article>
  );
}

export default FileItem;
