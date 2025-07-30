import styles from "./InputDesign.module.css";

function MenuItem({ icon, text, onClick, className }) {
  return (
    <div className={className} onClick={onClick}>
      <div>
        <div dangerouslySetInnerHTML={{ __html: icon }} />
      </div>
      <div className={styles.dashboard2}>
        {text}
      </div>
    </div>
  );
}
 
export default MenuItem;
