import NavigationComponent from "../../components/navigation-component";
import newsStyles from "../../styles/news-component.module.css";
import indexS3Styles from "../../styles/index_section3.module.css";

export default function () {
  return (
    <div className={newsStyles.wrapper}>
      <NavigationComponent />
      <footer className={indexS3Styles.customfooter}>
        <span>Design and execution - Bartlomiej Witek 2022</span>
      </footer>
    </div>
  );
}
