/*const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`div ${className}`}>
      <p className="forPara">{text}</p>
    </div>
  );
  //  Write your code here.
};

const element = (
  <div className="for_background">
    <h1 className="forHeader">Boxes</h1>
    <div className="fordiv">
      <Box className="forFirst" text="Small" />
      <Box className="forSecond" text="Medium" />
      <Box className="forThird" text="Large" />
    </div>
  </div>
  //  Write your code here.
);

ReactDOM.render(element, document.getElementById("root"));*/

const Box = (props) => {
  const { className, text } = props;
  return (
    <div className={`${className}`}>
      <p className="for-para">{text}</p>
    </div>
  );
};
const element = (
  <div className="for-background">
    <h1 className="for-header">Boxes</h1>
    <div className="for-div">
      <Box className="for-first" text="Small" />
      <Box className="for-second" text="Medium" />
      <Box className="for-third" text="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
