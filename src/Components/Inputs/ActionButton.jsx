const ActionButton = ({
  label,
  classnames,
  btnIcon,
  onClick,
  disabled,
  loading,
  type,
}) => {
  return (
    <>
      <button
        disabled={disabled}
        type={type}
        onClick={() => onClick()}
        className={`${classnames} `}
      >
        {btnIcon && <img src={btnIcon} alt="icon" className="mr-2" />}
        {label}
      </button>
    </>
  );
};

export default ActionButton;
