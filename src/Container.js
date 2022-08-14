import update from "immutability-helper";
import { useCallback, useState } from "react";
import { Card } from "./Card.js";
const style = {
  width: "auto",
  display: "grid",
  gridTemplateColumns: "repeat(3 , 1fr)"
};
export const Container = () => {
  {
    const [cards, setCards] = useState([
      {
        id: 1,
        text: "1"
      },
      {
        id: 2,
        text: "2"
      },
      {
        id: 3,
        text: "3"
      },
      {
        id: 4,
        text: "4"
      },
      {
        id: 5,
        text: "5"
      },
      {
        id: 6,
        text: "6"
      }
    ]);
    const moveCard = useCallback((dragIndex, hoverIndex) => {
      setCards((prevCards) =>
        update(prevCards, {
          $splice: [
            [dragIndex, 1],
            [hoverIndex, 0, prevCards[dragIndex]]
          ]
        })
      );
    }, []);
    const renderCard = useCallback((card, index) => {
      return (
        <Card
          key={card.id}
          index={index}
          id={card.id}
          text={card.text}
          moveCard={moveCard}
        />
      );
    }, []);
    return (
      <>
        <div style={style}>{cards.map((card, i) => renderCard(card, i))}</div>
      </>
    );
  }
};
