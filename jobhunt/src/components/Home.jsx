
import styles from "./Home.module.css"
import SearchIcon from '@material-ui/icons/Search';

function Home(){


return <>
    <div className={styles.inputDiv}>
        <div className={styles.in}>
            <SearchIcon className={styles.po}/>
            <input style={{border:"none"}} placeholder="job title or keyword" />
        </div>
        <div className={styles.selectDiv}>
            <select name="location">
                <option value="berlin">Berlin</option>
                <option value="india">India</option>
            </select>
        </div>
        <div className={styles.b}>
            <button className={styles.button}>search</button>
        </div>
    </div>
    <div className={styles.result}>
          
    </div>


</>


}

export default Home