import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import "./Resume.css";
const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 1,
      staggerChildren: 0.4,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};
const pageStyle = {
  width: "100 %",
  height: "100vh",
  backgroundColor: "#2c2d2f",
};
const Resume = () => {
  return (
    <motion.div
      style={pageStyle}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      {/* <!--Resume Section Start--> */}
      <section id="resume" className="resume-section pt-page">
        <motion.div
          className="section-container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="page-heading"
            initial={{ y: -250 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <span className="icon">
              <FontAwesomeIcon icon={faIdCard} />
            </span>
            <h2>My Resume.</h2>
          </motion.div>

          {/* <!--Education & Experience Row Start--> */}
          <motion.div className="row mb-4" variants={item}>
            <div className="col-lg-6">
              <div className="subheading">
                <h3>Education</h3>
              </div>

              <ul className="education">
                {/* <!--Education Item--> */}
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>Computer Science Student</h4>
                    <h5>
                      Faculty of Computers & Informations, Shibin El-Kom, EGY
                    </h5>
                    <p className="info"></p>
                  </div>
                  <span className="year">
                    <span className="to">2019</span>
                    <span className="from"></span>
                  </span>
                </li>

                {/* <!--Education Item--> */}
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>Web Development</h4>
                    <h5>Information Technology Institute(ITI), Menofia, EGY</h5>
                    <p className="info">
                      Learned HTML5 & CSS3, Bootstrap, ES, JQuery, Client Side
                      Technologies and React
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">(Jul) 2021</span>
                    <span className="from">(Sep) 2021</span>
                  </span>
                </li>

                {/* <!--Education Item--> */}
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>React Cross Skilling</h4>
                    <h5>
                      ministry of communications and information technology, EGY
                    </h5>
                    <p className="info">
                      MACHINE LEARNING CAREER & REACT and ANGULAR CAREER
                      CALENDAR
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">(Aug) 2022</span>
                    <span className="from">(Sep) 2022</span>
                  </span>
                </li>
              </ul>
            </div>

            {/* <!--Experience Column Start--> */}
            <div className="col-lg-6">
              <div className="subheading">
                <h3>Courses </h3>
              </div>
              <ul className="experience">
                {/* <!--Experience Item--> */}
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>
                      JavaScript - The Complete Guide 2022 (Beginner + Advanced)
                    </h4>
                    <h5>Maximilian (Udemy)</h5>
                    <p className="info">
                      Modern JavaScript from the beginning - all the way up to
                      JS expert level! THE must-have JavaScript resource in
                      2022.
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">2020</span>
                    <span className="from">2021</span>
                  </span>
                </li>

                {/* <!--Experience Item--> */}
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>
                      React - The Complete Guide (incl Hooks, React Router,
                      Redux)
                    </h4>
                    <h5>Maximilian (Udemy)</h5>
                    <p className="info">
                      Dive in and learn React.js from scratch! Learn Reactjs,
                      Hooks, Redux, React Routing, Animations, Next.js and way
                      more!
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">2020</span>
                    <span className="from">2021</span>
                  </span>
                </li>

                {/* <!--Experience Item--> */}
                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>Frontend Development</h4>
                    <h5>ElZero Web School</h5>
                    <p className="info">HTML, CSS & JS</p>
                  </div>
                  <span className="year">
                    <span className="to">2020</span>
                    <span className="from">2021</span>
                  </span>
                </li>

                <li>
                  <span className="line-left"></span>
                  <div className="content">
                    <h4>PHP Development</h4>
                    <h5>Mahara Tech</h5>
                    <p className="info">
                      Buliding Web Applications using PHP & MYSQL
                    </p>
                  </div>
                  <span className="year">
                    <span className="to">2021</span>
                    <span className="from">2022</span>
                  </span>
                </li>
              </ul>
            </div>
            {/* <!--Experience Column End--> */}

            {/* <!--Education Column Start--> */}

            {/* <!--Education Column End--> */}
          </motion.div>
          {/* <!--Education & Experience Row End--> */}
        </motion.div>
      </section>
      {/* <!--Resume Section End--> */}
    </motion.div>
  );
};
export default Resume;
