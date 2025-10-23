const CardsSection = () => {
  const cards = [
    {
      id: 1,
      title: "Card Title 1",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt, praesentium accusantium temporibus.",
      image: "https://images.unsplash.com/photo-1715706107718-4a0cc4f0335c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
      id: 2,
      title: "Card Title 2",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1716343168811-353d613d132a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwxNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 3,
      title: "Card Title 3",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1676548363806-d3a57b200082?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 4,
      title: "Card Title 4",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1715619044226-b693312ffb9b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 5,
      title: "Card Title 5",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1716062778683-35d5f505d6ac?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzN3x8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 6,
      title: "Card Title 6",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1716094978972-f05cb5796185?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNnx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: 7,
      title: "Card Title 7",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1715706107718-4a0cc4f0335c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    },
    {
      id: 8,
      title: "Card Title 8",
      description: "Card description or content goes here.",
      image: "https://images.unsplash.com/photo-1715706107718-4a0cc4f0335c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHx8"
    }
  ];

  return (
    <div id="page3">
      <div id="OthersSec">
        <h2>Others</h2>
        <div className="card-container">
          {cards.map((card) => (
            <div key={card.id} className="card">
              <img src={card.image} alt={`Card Image ${card.id}`} width="375px" height="250px" />
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              <a href="#">
                <button>Read More</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardsSection;

