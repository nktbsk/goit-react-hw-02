import style from "./Options.module.css";

const Options = ({ options, onLeaveFeedback, onReset }) => {
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

      <button className={style.btn} onClick={onReset}>
        Reset
      </button>
    </div>
  );
};

export default Options;
