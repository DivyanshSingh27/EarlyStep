import { useState } from 'react';

const Snake = () => {
  const [feedback, setFeedback] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleFeedbackChange = (e) => {
    setFeedback({
      ...feedback,
      [e.target.name]: e.target.value
    });
  };

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert(`Feedback submitted by: ${feedback.name}`);
    setFeedback({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  const steps = [
    {
      id: 1,
      title: "Do Not Panic:",
      description: "Stay calm. Panicking can worsen the situation",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: false
    },
    {
      id: 2,
      title: "Leave the Snake Alone:",
      description: "Snakes usually bite when they feel threatened. Maintain a safe distance and wait for professional rescuers to arrive.",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: true
    },
    {
      id: 3,
      title: "Avoid Faith Healing:",
      description: "Refrain from attempting any traditional or faith-based remedies.",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: false
    },
    {
      id: 4,
      title: "Do Not Try to Kill or Capture the Snake:",
      description: "Avoid any actions that might provoke the snake further.",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: true
    },
    {
      id: 5,
      title: "Do Not Cut or Suck the Bite Area:",
      description: "These practices can cause additional harm.",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: false
    },
    {
      id: 6,
      title: "Do Not Apply a Tourniquet:",
      description: "Tying a tourniquet can worsen tissue damage.",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: true
    },
    {
      id: 7,
      title: "Do Not Apply Ice or Massage the Bitten Area:",
      description: "These actions can exacerbate the venom's effects.",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: false
    },
    {
      id: 8,
      title: "Do Not Self-Medicate or Apply Herbs/Spices:",
      description: "Seek professional medical help instead",
      image: "https://www.douglashamp.com/wp-content/uploads/2022/03/image-30.png",
      isRight: true
    }
  ];

  return (
    <div id="main">
      <div id="page1">
        <div id="top">
          <h1>SNAKE BITE</h1>
        </div>
        <div id="title">
          <div id="image-verified">
            <img src="/Images/360_F_789863270_wts0sXU2W3V5LZ3CX0pwRQWmWlzrsj7y.jpg" alt="Snake bite" />
          </div>
          <p>A snake bite is a serious emergency that requires immediate medical attention. The venom can spread quickly, causing severe symptoms like swelling, pain, and potentially life-threatening reactions. It's crucial to keep the person calm and still, clean and cover the bite, and seek professional help right away to manage the symptoms and administer antivenom. Avoid any actions that could worsen the situation, such as cutting the wound or applying ice.</p>
          <h3>Instructions</h3>
        </div>
      </div>
      
      <div id="page2">
        <div id="container">
          {steps.map((step) => (
            <div key={step.id} className={step.isRight ? "StepR" : "Step"}>
              <img src={step.image} alt={`Step ${step.id}`} />
              <p><b>{step.title}</b> {step.description}</p>
            </div>
          ))}
        </div>
        
        <div id="rating-box">
          <div className="rating">
            <input type="radio" id="star-1" name="star-radio" value="star-1" />
            <label htmlFor="star-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
            </label>
            <input type="radio" id="star-2" name="star-radio" value="star-2" />
            <label htmlFor="star-2">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
            </label>
            <input type="radio" id="star-3" name="star-radio" value="star-3" />
            <label htmlFor="star-3">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
            </label>
            <input type="radio" id="star-4" name="star-radio" value="star-4" />
            <label htmlFor="star-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
            </label>
            <input type="radio" id="star-5" name="star-radio" value="star-5" />
            <label htmlFor="star-5">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                <path pathLength="360" d="M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
      
      <div id="page3">
        <div id="feedback">
          <div className="form-card1">
            <div className="form-card2">
              <form onSubmit={handleFeedbackSubmit} className="form">
                <p className="form-heading">Your Feedback</p>
                
                <div className="form-field">
                  <input 
                    required 
                    placeholder="Name" 
                    className="input-field" 
                    type="text"
                    name="name"
                    value={feedback.name}
                    onChange={handleFeedbackChange}
                  />
                </div>
                
                <div className="form-field">
                  <input
                    required
                    placeholder="Email"
                    className="input-field"
                    type="email"
                    name="email"
                    value={feedback.email}
                    onChange={handleFeedbackChange}
                  />
                </div>

                <div className="form-field">
                  <input
                    required
                    placeholder="Subject"
                    className="input-field"
                    type="text"
                    name="subject"
                    value={feedback.subject}
                    onChange={handleFeedbackChange}
                  />
                </div>
                
                <div className="form-field">
                  <textarea
                    required
                    placeholder="Message"
                    cols="30"
                    rows="3"
                    className="input-field"
                    name="message"
                    value={feedback.message}
                    onChange={handleFeedbackChange}
                  ></textarea>
                </div>
                
                <button type="submit" className="sendMessage-btn">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Snake;
