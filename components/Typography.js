import styles from "../styles/Typography.module.css";

const Title = ({ children }) => {
  return <h1 className={styles.title}>{children}</h1>;
};

export { Title };
