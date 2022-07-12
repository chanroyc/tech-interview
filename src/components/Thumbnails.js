import PropTypes from 'prop-types';

const Thumbnails = (props) => {
  const { activeImage, items, handleImage } = props;
  
  return (
    <div className='thumbnails-container'>
      {items.map((item, i) => (
        <img
          key={i} 
          src={item.image} 
          alt={item.caption} 
          className={`thumbnails ${activeImage === i ? 'active' : ''}`}
          onClick={() => handleImage(i)}
        />
      ))}
    </div>
  )
} 

export default Thumbnails;

Thumbnails.propTypes = {
  activeImage: PropTypes.number,
  items: PropTypes.array,
  handleImage: PropTypes.func,
}

