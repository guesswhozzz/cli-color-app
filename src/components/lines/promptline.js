import React from "react";
import "./promptline.scss";
import { useDrag, useDrop } from "react-dnd";
import { connect } from "react-redux";
import { setNewLine, editModOn, editModOff } from "../../redux/promptreducer";

const PsOneItem = ({ id, text, findCard, moveCard, state }) => {
  const oringIndex = findCard(id).index;

  const [{ isDragging }, drag] = useDrag({
    item: { type: "TEST_TWO", id, oringIndex },
    collect: (monitor) => ({ isDragging: monitor.isDragging() }),
    begin: () => {
      state.editModOn(id);
    },
    end: (dropResult, monitor) => {
      state.editModOff();
      const { id: droppedID, oringIndex } = monitor.getItem();
      const didDrop = monitor.didDrop();
      if (!didDrop) {
        moveCard(droppedID, oringIndex);
      }
    },
  });

  const [, drop] = useDrop({
    accept: "TEST_TWO",

    canDrop: () => false,

    hover({ id: draggedID }) {
      if (draggedID !== id) {
        const { index: overIndex } = findCard(id);
        moveCard(draggedID, overIndex);
      }
    },
  });
  const opacity = isDragging ? 0.3 : 1;
  return (
    <div
      style={{ opacity }}
      className="psone-line__item"
      ref={(node) => {
        drag(drop(node));
      }}
    >
      <span>{text}</span>
    </div>
  );
};

const LineContainer = ({ state }) => {
  const cards = state.items;
  // const [cards, setCards] = useState(items);

  function moveCard(id, atIndex) {
    const { card, index } = findCard(id);
    state.setNewLine({ index, card, atIndex });
  }
  function findCard(id) {
    const card = cards.filter((c) => `${c.id}` === id)[0];
    return {
      card,
      index: cards.indexOf(card),
    };
  }

  const [, drop] = useDrop({ accept: "TEST_TWO" });

  return (
    <div ref={drop} className="psone-line-container">
      {cards.map((cards) => (
        <PsOneItem
          key={cards.id}
          id={`${cards.id}`}
          text={cards.text}
          findCard={findCard}
          moveCard={moveCard}
          state={state}
        />
      ))}
    </div>
  );
};

const PromptPsOneLine = (state) => {
  return (
    <>
      <LineContainer state={state} />
    </>
  );
};

const mstp = (state) => {
  let newstate = state.promptline;
  return newstate;
};
const mdtp = () => {};

export default connect(mstp, { setNewLine, editModOn, editModOff })(
  PromptPsOneLine
);
