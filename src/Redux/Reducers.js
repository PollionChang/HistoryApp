'use strict';

import * as TYPES from './Actions';

const initialState = {
  lists: []
};

export default function user(state = initialState, action) {
  console.log('reducer')
  switch (action.type) {
    case TYPES.ADD_FAVOURITE:
      return {
        lists: [...state.lists, action.item]
      };
    case  TYPES.DELETE_FAVOURITE:
      let list = state.lists, index;
      list.forEach((it, id) => {
        if (it.title === action.item.title) {
          index = id
        }
      });
      console.log(index)
      if (index !== undefined) {
        list.splice(index)
      }

      return {
        lists: [...list]
      };
    default:
      return state;
  }

}