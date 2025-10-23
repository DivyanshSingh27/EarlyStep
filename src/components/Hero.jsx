const Hero = ({ textRef, leafRef, hill1Ref, hill4Ref, hill5Ref }) => {
  return (
    <div id="page1">
      <img id="hill1" ref={hill1Ref} src="/Images/hill1.png" alt="hill1" />
      <img id="hill2" src="/Images/hill2.png" alt="hill2" />
      <img id="hill3" src="/Images/hill3.png" alt="hill3" />
      <img id="hill4" ref={hill4Ref} src="/Images/hill4.png" alt="hill4" />
      <img id="hill5" ref={hill5Ref} src="/Images/hill5.png" alt="hill5" />
      <img id="tree" src="/Images/tree.png" alt="tree" />
      <h2 id="text" ref={textRef}>EarlySteps</h2>
      <img id="leaf" ref={leafRef} src="/Images/leaf.png" alt="leaf" />
      <img id="plant" src="/Images/plant.png" alt="plant" />
    </div>
  );
};

export default Hero;

