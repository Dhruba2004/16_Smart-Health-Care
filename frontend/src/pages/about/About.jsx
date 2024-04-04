import Navbar from "../../components/navbar/Navbar";

function About() {
  return (
    <>
    <Navbar/>
    <div>
      <div className="about_us p-6 w-[1440px]">
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
      </div>
    </div>
    </>
    
  );
}
export default About;
