import styles from "./ProfileCard.module.css";
import julio from "../assets/julio.jpg";

function ProfileCard() {
  return (
    <div className={styles.profileCard}>
      <img className={styles.profilePic} src={julio} alt="ProfilePic" />
      <h2>Nome: Julio Cezar</h2>
      <p>Descrição: Estudante de TADS criando um Profile Card</p>
    </div>
  );
}
export default ProfileCard;
