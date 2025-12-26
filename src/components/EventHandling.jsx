
export const EventHandling = () => {

  const handleWelcomeUser = (user) => {
    alert(`Hey, ${user}`);
  };

  const handleHover = () => {
    alert("Hey, Thanks for hovering me");
  };

  return (
    <>
      <WelcomeUser
        onClick={() => handleWelcomeUser("Chandan")}
        onMouseEnter={handleHover}
      />
    </>
  );
};

const WelcomeUser = (props) => {

  const handleGreeting = () => {
    console.log("Hey User, Welcome");
    props.onClick();  
  };

  return (
    <>
      <button className="btn" onClick={props.onClick}>Click</button>
      <button className="btn" onMouseEnter={props.onMouseEnter}>Hover</button>
      <button className="btn" onClick={handleGreeting}>Greeting</button>
    </>
  );
};