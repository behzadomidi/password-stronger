import React from "react";
import zxcvbn from "zxcvbn";

const PasswordStrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;

  const functionProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#828282";
      case 1:
        return "#ea1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };
  const functionProgressLabel = () => {
    switch (testResult.score) {
      case 0:
        return "ضعیف";
      case 1:
        return "متوسط";
      case 2:
        return "خوب";
      case 3:
        return "قوی";
      case 4:
        return "بسیار قوی";
      default:
        return "none";
    }
  };

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: functionProgressColor(),
    height: "7px",
  });

  return (
    <div>
      <div
        className="progress"
        style={{ height: "7px" }}
        role="progressbar"
        aria-label="Success example"
        aria-valuenow="25"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar " style={changePasswordColor()}></div>
      </div>
      <p style={{ color: functionProgressColor() }}>
        {functionProgressLabel()}
      </p>
    </div>
  );
};

export default PasswordStrengthMeter;
