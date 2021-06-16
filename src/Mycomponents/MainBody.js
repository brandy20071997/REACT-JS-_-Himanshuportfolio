import React from "react";
import styles from  "./MainBody.module.css";
import Header from "../Mycomponents/Header";
import cx from 'classnames'
import globalstyles from '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import img from "../img/profile_img.jpg";
import Sidenav from "./Sidenav";
import Card from "./Card";
import icon from "../img/img1.jpg";
import icon2 from "../img/img2.jpg";
import reactimg from"../img/reactjs.png";
import Button from "./UI/Button";
import Career from "./Career";
import Form from "./UI/Form";
import Tech from "./Tech";

export default function MainBody() {
  return (
    <div>
      {/* <Sidenav/> */}
      <div className={`${styles.heroArea}`}>
        <Header></Header>
        {/* <div className={`${styles.styleHeading} ${styles.developer}`}>vfgewhj</div> */}

        <section className={`container ${styles.styleHeading}`}>
          <p>Hi,</p>
          <p>
            I'am <span className={styles.developer}>Himanshu</span>
          </p>
          <p>
            The Developer<span className={styles.developer}>.</span>
          </p>
          <div className={styles.borderClass}> </div>

          <p className={` mt-5 ${styles.mainSubHeading}`}>
            You have the vision for a stunning digital experience. I'm <br></br>
            the software developer and engineering that can bring it to life.
          </p>
{/* 
          <button
            className=" btn btn-primary"
          >
            Let's get started
          </button> */}

          <Button btnstyle="btnStylingContact" value="Let's get started"/>
        </section>
      </div>

      <Sidenav />
    
      <section className={`row ${styles['section-Design']}`}>
      
        <div className="col-md-3"></div>

        <div className="col-md-4 ">
          <h1 className={`${styles.cardTextingStyle}`}>Latest Articles</h1>
          <Card
            Icon={icon2}
            title="Benefits of work from Home 💪"
            description="💡When COVID-19 forced companies all over the world to send their employees home to work virtually, 
            remote work had a big moment.
            Yes, the rush to give employees access to all the tools they’d need to work from home was a bit, 
            well, sudden for many employers. But..."
            readmore="Continue reading...."
          />
          <div className="text-left">
            <Button btnstyle="btnstyling_1" value="Click out my Blogs" />

            {/* <Button/> */}
          </div>
        </div>

        <div className={`col-md-4 ${styles.cardMargin}`}>
          <Card
            Icon={icon}
            img="true"
            title="My Favourite Framework React JS"
            description="💡 React makes it painless to create interactive UIs. Design simple views for each state
             in your application, and React will efficiently update and render 
             just the right components when your data changes.In my view if you are frontend developer try using this
             framework which is most prominent..... "
            readmore="Continue reading....."
          />
        </div>

        {/* Third section-----tihrd-sction */}

        <section className={styles.thirdSectionDecoration}>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-8">
              <h1 className={styles.cardTextingStyle}>About Me</h1>
              <p class={styles.dec_1}>
                
                {/* It was back in 2019, when I first got my hands dirty with
                software. Since then my future was defined. I studied as an
                Electronics & Computer Engineer (ECE Bachelor) and during my
                studies I mastered in hardware, telecommunications, web
                applications’ full-stack development, HCI and graphics courses.
                Nonetheless, I fell in love with the beauty of web.
              </p> */}

                  Hey <i className ="far ml-2 fa-smile"></i><br></br>
                  Myself Himanshu Pratap, I'm a coincidental Developer. I was not interested in coding till
                   my final year of graduation but I started for the sake of the Job and now I m in love with the beauty of web. 
                  I did my graduation from JIIT NOIDA with a stream of Computer Science. 
                  Shiveringly started with HTML, CSS, and basic Javascript, and it's around a couple of years I m handy with 
                  these technologies and on the way of this, I made a personal portfolio and couple of web in React JS.
                  Started my career at Travographer.com as a UI developer and seeking my future toward more technologies.
              </p>

              <p class={styles.dec_2}>
                My first professional experience was back in 2019 and now I have
                under the chain of 2 years, ample of web projects.
                Let me build yours <i className ="far ml-2 fa-smile"></i>.
              </p>

              <Button btnstyle="btnstyling_2" value="Resume" />
            </div>
          </div>
        </section>

        {/* FOURTH SECTION FOUTH SECTION */}

        <section className={styles.thirdSectionDecoration}>
          <div class="row">
            <div class="col-md-3"></div>
            <div class="col-md-8">
              <h1 className={styles.cardTextingStyle}>Career</h1>

              <Career
                year="2011"
                dec= "2011-I completed my 10th standard and decided and further took science stream and went to Kota in a crowd of sheep."
              />
              <Career
                year="2013"
                dec="1998 First encounter with code. My dad kinda forced me to write some lines of QBASIC. 
              I will always be grateful for this moment.."
              />
              <Career
                year="2015"
                dec="1998 First encounter with code. My dad kinda forced me to write some lines of QBASIC. 
              I will always be grateful for this moment.."
              />
              <Career
                year="2019"
                dec="1998 First encounter with code. My dad kinda forced me to write some lines of QBASIC. 
              I will always be grateful for this moment.."
              />
            </div>
          </div>
        </section>


{/* fivth section */}

        <section>

          <div className="row">
         
            <div className="col-md-3"></div>

            <div className="col-md">
            <h1 className={styles.cardTextingStyle}>Tech Stack</h1>
            <p class={`${styles.dec_2} ${styles.dec_2Decor}`}>Here is my favourite Tech Stack, languages and frameworks that I use every day in most of my projects. </p>
            
            <Tech techIcon = {reactimg} value=" React JS" />
            
            </div>









          </div>

        </section>

        {/* get in touch----Get in touch */}
        <section class={styles['section-Design']}>
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-3">
              <h1 className={styles.cardTextingStyle}>Get In Touch</h1>
              <p class={styles.dec_3}>
                Either you have an enquiry about a potential project, a question
                about programming or whatever pops into your mind, drop me a
                message and I will get back to you as soon as possible.{" "}
              </p>
              <div class={styles.detail_cont}>
                <p>
                  <b>ADDRESS</b> : Noida,India
                </p>
                <p>
                  <b>EMAIL</b> : Himanshupratap40@gmail.com
                </p>
                <p>
                  <b>WEBSITE</b> : Himanshu.com{" "}
                  <span class={styles.snot_lve_yet}>(Not Live Yet)</span>
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <Form />
            </div>
          </div>
        </section>

        <section class={`pt-5 pb-3 ${styles['section-Design'] }`}>
          <div>
            <span class={styles.copyright}>©Himanshu.com 2021 | Developed by ME </span>
          </div>
        </section>
      </section>
    </div>
  );
}
