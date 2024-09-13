import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>I specialize in web and application development, API integration, and R&D, with expertise in C++, JavaScript, Swift, and Kotlin.Experienced in Xcode, Visual Studio, and Android Studio, I have a strong foundation in OOP and Data Structures. I am proficient with tools like JIRA, GIT, and hold certifications in Fullstack JS, AI, Google Cloud, and Cybersecurity.</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C++</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Swift</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Kotlin</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>React JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Node JS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Xcode</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Android Studio</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>OOPS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Data Structures</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Research & Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>JIRA</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>GIT</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
