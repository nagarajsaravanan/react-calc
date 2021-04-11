import '../assets/scss/buttons.css'
const Buttons = ({name, buttonClick}) => {
    return (
      <div className="calc-button" onClick={() => buttonClick(name)}>
          {name}
      </div>
    );
  }
  
  export default Buttons;
  