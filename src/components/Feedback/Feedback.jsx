import style from "./Feedback.module.css";

const Feedback = ({ feedback, total, percent }) => {
  return (
    <div className={style.wrapper}>
      <p className={style.text}>Good: {feedback.good}</p>
      <p className={style.text}>Neutral: {feedback.neutral}</p>
      <p className={style.text}>Bad: {feedback.bad}</p>
      <p className={style.text}>Total: {total}</p>
      <p className={style.text}>Positive: {percent}%</p>
    </div>
  );
};

export default Feedback;
