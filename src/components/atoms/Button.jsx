
const Button = ({
  buttonType="button",buttonText,buttonStyle,renderLeftItem,renderLeftStyle,renderRightItem,renderRightStyle,buttonOnClick,buttonDisabled,buttonDisabledStyle 
  }) => {
    const conditionalStyles = buttonDisabled ? `opacity-50 cursor-not-allowed ${buttonDisabledStyle}`: `${buttonStyle}`;
  
    return (
      <button
      type={buttonType}
        className={conditionalStyles}
        onClick={buttonOnClick}
        disabled={buttonDisabled}
      >
        {renderLeftItem && <span className={renderLeftStyle}>{renderLeftItem}</span>}
        {buttonText && buttonText}
        {renderRightItem && <span className={renderRightStyle}>{renderRightItem}</span>}
      </button>
    );
  }
  
  export default Button;
  