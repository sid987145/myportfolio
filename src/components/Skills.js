import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
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

  const skills = [
    { img: meter1, label: "C++" },
    { img: meter2, label: "JavaScript" },
    { img: meter2, label: "Swift" },
    { img: meter3, label: "Kotlin" },
    { img: meter1, label: "React JS" },
    { img: meter1, label: "Node JS" },
    { img: meter1, label: "Xcode" },
    { img: meter2, label: "Android Studio" },
    { img: meter3, label: "OOPS" },
    { img: meter1, label: "Data Structures" },
    { img: meter2, label: "Research & Development" },
    { img: meter3, label: "JIRA" },
    { img: meter1, label: "GIT" }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                I specialize in web and application development, API integration, and R&D, with expertise in C++, JavaScript, Swift, and Kotlin. Experienced in Xcode, Visual Studio, and Android Studio, I have a strong foundation in OOP and Data Structures. I am proficient with tools like JIRA, GIT, and hold certifications in Fullstack JS, AI, Google Cloud, and Cybersecurity.
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skills.map((skill, index) => (
                  <div className="item" key={index}>
                    <img src={skill.img} alt={`${skill.label} icon`} />
                    <h5>{skill.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Colorful background decoration" />
    </section>
  );
};
