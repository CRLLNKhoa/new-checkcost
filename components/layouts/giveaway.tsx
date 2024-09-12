"use client"

import { useState } from "react";
import Card from "./card";

interface CardContent {
    text: string;
  }

const GiveAway: React.FC = () => {
    const initialCards: CardContent[] = [
        { text: "Nội dung" },
        { text: "Nội dung" },
        { text: "Nội dung" },
      ];
    
      const [cards, setCards] = useState<CardContent[]>(initialCards);
      const [selectedCard, setSelectedCard] = useState<number | null>(null);
    
      const handleSelect = (index: number) => {
        const updatedCards = cards.map((card, i) => ({
          ...card,
          text: i === index ? "Không trúng" : "Trúng",
        }));
        setCards(updatedCards);
        setSelectedCard(index);
      };
    
      return (
        <div className="grid grid-cols-3 gap-4">
          {cards.map((card, index) => (
            <div key={index} onClick={() => handleSelect(index)}>
              <Card
                content={card.text}
                isFlipped={selectedCard !== null} // Tất cả các thẻ đều mở khi một thẻ được chọn
              />
            </div>
          ))}
        </div>
      );
    };
    

export default GiveAway;
