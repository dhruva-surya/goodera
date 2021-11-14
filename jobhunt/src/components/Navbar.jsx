import styles from "./Navbar.module.css"


function Navbar(){


return <>
 
     <div className={styles.mainDiv}>
            <div className={styles.headingDiv}>
               <div className={styles.headingLeft}>
                    <div className={styles.textDiv1}>
                        JobHunt
                    </div>
                    <div className={styles.normal}>
                          Find Jobs
                    </div>
                    <div className={styles.normal}>
                        Upskill Yourself
                    </div>
               </div>
               <div className={styles.headingRight}>
                       <div className={styles.normal}> Post a Job</div>
                       <div className={styles.normal}>Sign In</div>
               </div>
            </div>
                <div className={styles.head}>
                    <h1 className={styles.h}>Find Your Dream Job</h1>
                    <h3 className={styles.h1}>Browse through thousand of full-time or part-time jobs near you</h3>
                </div>

     </div>



</>



}

export default Navbar