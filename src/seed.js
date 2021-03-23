import shortid from "shortid";

export default function seed(store) {
  console.log("Insert first list");
  const firstListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: firstListId, listTitle: "Things To Do" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Untitled Card"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Test"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Machine Coding Round"
    }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: firstListId,
      cardId: shortid.generate(),
      cardText: "Tech Interview"
    }
  });

  console.log("Insert second list");
  const secondListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: secondListId, listTitle: "Doing" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: secondListId,
      cardId: shortid.generate(),
      cardText: "Machine Coding Round"
    }
  });

  console.log("Insert third list");
  const thirdListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: thirdListId, listTitle: "Done" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: thirdListId,
      cardId: shortid.generate(),
      cardText: "Will be updated"
    }
  });

  // store.dispatch({
  //   type: "ADD_CARD",
  //   payload: {
  //     listId: thirdListId,
  //     cardId: shortid.generate(),
  //     cardText: "Card two"
  //   }
  // });

  console.log("Insert Fourth list");
  const fourthListId = shortid.generate();

  store.dispatch({
    type: "ADD_LIST",
    payload: { listId: fourthListId, listTitle: "FeedBack" }
  });

  store.dispatch({
    type: "ADD_CARD",
    payload: {
      listId: fourthListId,
      cardId: shortid.generate(),
      cardText: "Will be updated"
    }
  });

  // store.dispatch({
  //   type: "ADD_CARD",
  //   payload: {
  //     listId: fourthListId,
  //     cardId: shortid.generate(),
  //     cardText: "Card II"
  //   }
  // });

};
