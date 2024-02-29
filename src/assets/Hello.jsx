const Hello = ({message,name}) => {
  console.log({message,name});
  return (
    <div>
      <h1>{message} {name}</h1>
    </div>
  );
};
  
  
  import PropTypes from 'prop-types';
  Hello.propTypes = {
    name: PropTypes.string.isRequired,
    message: PropTypes.string
  }
  export default Hello;