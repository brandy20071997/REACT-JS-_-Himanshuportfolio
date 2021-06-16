import React from 'react'
import styles from  './Sidenav.module.css'

export default function Sidenav() {
    return (
      // <div>
        <div className={styles.forSticky_Section}>
          {/* <div class="position-absolute"> */}
        <div id={styles.mySidenav} className={`${styles.sidenav}`}>
          <div className={`pt-5 ${styles.sideNavHieght}`}>
       {/* <a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a> */}
        <a href="#">Home</a>
        <a href="#">Blogs</a>
        <a href="#">About Me</a>
        <a href="#">Tech Stack</a>
        <a href="#">Portfolio</a>
        <a href="#">Contact</a>
        <a href="#">FAQs</a>

        <div className={styles.detailAlign}>
        <p class={styles['my-info-title']}>Name</p>
        <p class={styles['myInfoContent']}>Himanshu Pratap</p>
        <p  class={styles['my-info-title']}>Role</p>
        <p class={styles.myInfoContent}>Developer</p>
      {/* </div> */}
      </div>
        </div>
      </div>

      


      </div>
    )
}
