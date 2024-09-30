import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";

const App = () => {
  const [feedback, setFeedback] = useState(() => {
    const savedFeedback = localStorage.getItem("feedback");
    return savedFeedback
      ? JSON.parse(savedFeedback)
      : { good: 0, neutral: 0, bad: 0 };
  });

  useEffect(() => {
    localStorage.setItem("feedback", JSON.stringify(feedback));
  }, [feedback]);

  const updateFeedback = (feedbackType) => {
    setFeedback((prevFeedback) => ({
      ...prevFeedback,
      [feedbackType]: prevFeedback[feedbackType] + 1,
    }));
  };

  const resetFeedback = () => {
    setFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  };

  const hasFeedback = Object.values(feedback).some((value) => value > 0);

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const percentGoodFeedback = Math.round((feedback.good / totalFeedback) * 100);

  return (
    <div style={{ padding: "10px 20px" }}>
      <Description />
      <Options
        options={Object.keys(feedback)}
        onLeaveFeedback={updateFeedback}
        onReset={resetFeedback}
        show={hasFeedback}
      />
      {hasFeedback ? (
        <Feedback
          feedback={feedback}
          total={totalFeedback}
          percent={percentGoodFeedback}
        />
      ) : (
        <p>No feedback yet</p>
      )}
    </div>
  );
};

export default App;
