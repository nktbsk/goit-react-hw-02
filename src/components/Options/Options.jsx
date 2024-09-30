import style from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onReset, show }) => {
  return (
    <div className={style.wrapper}>
      {options.map((option) => (
        <button
          className={`${style.btn} ${style[option]}`}
          key={option}
          onClick={() => onLeaveFeedback(option)}
        >
          {option}
        </button>
      ))}

      {show && (
        <button className={style.btnReset} onClick={onReset}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
