import produce from 'immer';

const INITIAL_STATE = {
  sucess: true,
  opened: false,
};

export default function animations(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@animations/SUCCESS_ANIMATION': {
        draft.opened = true;
        draft.sucess = true;
        break;
      }
      case '@animations/CANCEL_ANIMATION': {
        draft.opened = true;
        draft.sucess = false;
        break;
      }
      case '@animations/BREAK_ANIMATION': {
        draft.opened = false;
        break;
      }
      default:
    }
  });
}
