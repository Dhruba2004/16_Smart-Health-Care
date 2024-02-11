import payelImg from '../../assets/images/payel.jpg';
import Navbar from "../../components/navbar/Navbar";
import './About.css';

function About() {
  return (
    <>
    <Navbar/>
    <div>
      <div className="about_us min-hscreen p-6 w-[1440px]">
        <section>
          <div className="aboutus_background">
            <div class="transbox p-[30px] mt-[-27px]">
              <h1 className="text-headingColor font-bold text-center text-[4rem]">
                About Us
              </h1>
              <p className="text-[25px] text-center text-[grey]">
                Welcome to our Smart Healthcare website! As B.Tech students, we
                are passionate about combining engineering and healthcare for a
                bright future. With our expertise in software development and
                healthcare principles, we aim to simplify the use and management
                of healthcare. Our innovative solutions leverage
                state-of-the-art technologies such as AI and IoT to improve
                patient care and outcomes. We are committed to a user-centric
                design, prioritizing ease of communication over ease of
                communication. Privacy and security are paramount; We hold the
                highest standards in data protection. Our mission is to empower
                individuals to take control of their health journey. Join us as
                we transform health care through innovation and compassion.
                Let’s join together, one click at a time, let’s build a
                healthier tomorrow.
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="container flex flex-row gap-[2rem] p-7 relative right-5">
            <div className="card">
            <img src="https://media.licdn.com/dms/image/D4E35AQHGllEpFobgkg/profile-framedphoto-shrink_800_800/0/1706358831231?e=1708171200&v=beta&t=_YBp5EIkWkXiWL1m6Xfzj5gL8MdRb6NxGsXd7t-K5PQ"
                alt=""
                className="rounded-full h-[200px] w-[200px] hover:transform scale-120"
              />
              <h3>Dhruba Dutta Banik</h3>
              <h4>9433433882</h4>
              <h6 class="mail">dhrubaduttabanik@gmail.com</h6>
            </div>
            <div className="card">
              <img
                src="https://media.licdn.com/dms/image/D4D03AQFmEfI28qQ6nw/profile-displayphoto-shrink_800_800/0/1696042797077?e=1712793600&v=beta&t=CmFNxEfEAXsQYhEjfqzTJfswgviTuin-7-JfgHWgKPk"
                alt=""
                className="rounded-full h-[200px] w-[200px] hover:transform scale-120"
              />
              <h3>Raj Garai</h3>
              <h4>9876543210</h4>
              <h6 class="mail">rajbahirgachi6352@gmail.com</h6>
            </div>
            <div className="card">
              <img
                src="https://media.licdn.com/dms/image/D4E03AQEL_gtQ744cvw/profile-displayphoto-shrink_800_800/0/1693293754167?e=1712793600&v=beta&t=JXzi0B0TifQ_G3nVu8ww846iDXWwrHSO7fcnXJIQQdY"
                alt=""
                className="rounded-full h-[200px] w-[200px] hover:transform scale-120"
              />
              <h3>Sagnik Roy</h3>
              <h4>9876543210</h4>
              <h6 class="mail">sagnik6@gmail.com@gmail.com</h6>
            </div>
            <div className="card">
              <img
                src="https://media.licdn.com/dms/image/D5603AQEcdUpHbDLpYg/profile-displayphoto-shrink_800_800/0/1707569332967?e=1712793600&v=beta&t=JLQ4ZqmjUuIUzg6Pke7f_Aytc7QUqWFz92c3iMklkjw" alt=""
                className="rounded-full h-[200px] w-[200px]"
              />
              <h3>Arnab Adhikary</h3>
              <h4>9876543210</h4>
              <h6 class="mail">adhikaryarnab779@gmail.com</h6>
            </div>

            <div className="card">
              <img
                src="https://media.licdn.com/dms/image/D5603AQFx5A5pB_3EEw/profile-displayphoto-shrink_800_800/0/1678095322706?e=1712793600&v=beta&t=-NkNG3XH6UZ9n6WOlas-RG3luybzZTevMXW31WDCUGo"
                alt=""
                className="rounded-full h-[200px] w-[200px]"
              />
              <h3>Rupak Das</h3>
              <h4>99876543210</h4>
              <h6 class="mail">rdas16983@gmail.com</h6>
            </div>

            <div className="card">
              <img
                src={payelImg}
                alt=""
                class="product-img"
                className="rounded-full w-[200px] h-[200px]"
              />
              <h3 class="product-title">Payel Majhi</h3>
              <h4>9876543210</h4>
              <h6 class="mail">majhipayel7@gmail.com</h6>
            </div>
          </div>
        </section>
      </div>
    </div>
    </>
    
  );
}
export default About;
