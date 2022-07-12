import ArrowLeft from '../assets/icon-arrow-left.svg';
import ArrowRight from '../assets/icon-arrow-right.svg';
import PropTypes from 'prop-types';

const Gallery = (props) => {
  const { activeImage, items, handleNext, handlePrev } = props;

  return (
    <div className='container'>
      <img 
        src={ArrowLeft} 
        alt='arrow left' 
        className='arrow left'
        onClick={handlePrev}
      />
      {items.map((item, i) => (
        <img 
          key={i} 
          src={item.image} 
          alt={item.caption} 
          className={`gallery-images ${activeImage === i ? 'active' : ''}`}
        />
      ))}
      <img 
        src={ArrowRight} 
        alt='arrow right' 
        className='arrow right'
        onClick={handleNext}
      />

      <div className='captions'>
        <p>{items[activeImage].caption}</p>
      </div>
    </div>
  )
}

export default Gallery;

Gallery.propTypes = {
  activeImage: PropTypes.number,
  items: PropTypes.array,
  handleNext: PropTypes.func,
  handlePrev: PropTypes.func,
}