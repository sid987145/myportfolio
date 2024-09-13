import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <Col xs={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt={`Screenshot of ${title}`} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
      </div>
    </Col>
  )
}
