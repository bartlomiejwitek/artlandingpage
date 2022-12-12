import NavigationComponent from "../../components/navigation-component";
import contactStyles from "../../styles/contact-component.module.css";
import indexS3Styles from "../../styles/index_section3.module.css";

export default function ContactComponent() {
  return (
    <div className={contactStyles.wrapper}>
      <NavigationComponent />
      <footer className={indexS3Styles.customfooter}>
        <span>Design and execution - Bartlomiej Witek 2022</span>
      </footer>
    </div>
  );
}
