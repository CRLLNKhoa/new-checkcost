"use client"
interface CardProps {
    content: string;
    isFlipped: boolean;
  }
  
  const Card: React.FC<CardProps> = ({ content, isFlipped }) => {
    return (
      <div
        style={{
          cursor: "pointer",
          transition: "transform 0.6s ease, background-color 0.3s ease",
          backgroundColor: isFlipped ? "red" : "lightgray",
          padding: '10px',
          borderRadius: '8px',
          position: "relative",
          width: "150px",
          height: "200px",
          perspective: "1000px",
        }}
      >
        <div className={`card ${isFlipped ? "flipped" : ""}`}>
          <div className="content">{content}</div>
        </div>
      </div>
    );
  };
  
  export default Card;
  
  