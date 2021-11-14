
import styles from "./Home.module.css"
import SearchIcon from '@material-ui/icons/Search';

function Home(){


return <>
    <div className={styles.inputDiv}>
        <div>
            <SearchIcon className={styles.po}/>
            <input style={{border:"none"}} placeholder="job title or keyword" />
        </div>
    </div>



</>


}

export default Home