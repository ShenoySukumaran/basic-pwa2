import React from 'react';
import { 
  Card, 
  CardImg, 
  CardText, 
  CardBody,
  CardTitle, 
  CardSubtitle, 
} from 'reactstrap';
import PropTypes from 'prop-types';

const Beer = ({id, imagesUrl, name, type, style, description}) => {
  return (
    <div id={id} className='beer-card'>
      <Card>
        <CardImg top width="100%" src={imagesUrl[0]} alt={description} />
        <CardBody>
          <CardTitle>{name}</CardTitle>
          <CardSubtitle>{type}</CardSubtitle>
          <div className="card-style">{style}</div>
          <CardText>{description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
};

Beer.propTypes = {
  id: PropTypes.number.isRequied,
  imagesUrl: PropTypes.arrayOf(PropTypes.string).isRequired,
  name: PropTypes.string.isRequied,
  description: PropTypes.string,
  type: PropTypes.string,
  style: PropTypes.string,
};

export default Beer;