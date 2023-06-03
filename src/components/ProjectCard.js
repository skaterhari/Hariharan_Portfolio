import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl ,hed}) => {
  return (
    <Col  id="box" size={12} sm={6} md={4}>
      <a href={hed}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4 style={{ color: 'white' }}>{title}</h4>
          <span style={{ color: 'white' }}>{description}</span>
        </div>
      </div></a>
    </Col>
  )
}
