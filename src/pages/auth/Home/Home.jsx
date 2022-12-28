import MainContainer from "../../../components/Containers/MainContainer";
import Searchbar from "../../../components/HomeComponents/Searchbar";
import styles from "../../../styles/Home/Home.module.scss";
import { Title } from "../../../components/Titles/Title";
import CategoryCard from "../../../components/Cards/CategoryCard";
import TransactionsCard from "../../../components/Cards/TransactionsCard";
import HomeProfile from "../../../components/HomeComponents/HomeProfile";

const Home = () => {
  return (
    <MainContainer optionClass={styles.container}>
      <div className={styles.main}>
        {/* SEARCHBAR */}
        <div className={styles.searchbar}>
          <Searchbar />
        </div>

        {/* CATEGORIES */}
        <div className={styles.categories}>
          <Title>Categories Last 30 Days</Title>
          <div className={styles.content}>
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
          </div>
        </div>

        {/* TRANSACTIONS */}
        <div className={styles.transactions}>
          <Title>Latest Transactions</Title>
          <div className={styles.content}>
            <TransactionsCard />
            <TransactionsCard />
            <TransactionsCard />
            <TransactionsCard />
          </div>
        </div>
      </div>
      <div className={styles.profile} >
        <HomeProfile />
      </div>
    </MainContainer>
  );
};

export default Home;
