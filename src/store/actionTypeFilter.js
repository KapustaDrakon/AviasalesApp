export const actionTypeFilter = (state, actionType) => {
  if (state.filter.length === 3 && !state.filter.includes(actionType)) {
    return {
      ...state,
      filter: ['all'],
    };
  } else if (actionType === 'all') {
    return {
      ...state,
      filter: [actionType],
    };
  }

  if (state.filter.length === 1 && state.filter.includes('all') && actionType !== 'all') {
    let newArray = ['without_changes', 'one_change', 'two_changes', 'three_changes'];
    const idx = newArray.findIndex((el) => el === actionType);
    newArray = [...newArray.slice(0, idx), ...newArray.slice(idx + 1)];
    return {
      ...state,
      filter: newArray,
    };
  }

  if (state.filter.length === 1 && state.filter.includes(actionType)) {
    return {
      ...state,
      filter: ['empty'],
    };
  } else if (state.filter.length > 1 && state.filter.includes(actionType)) {
    const idx = state.filter.findIndex((el) => el === actionType);
    return {
      ...state,
      filter: [...state.filter.slice(0, idx), ...state.filter.slice(idx + 1)],
    };
  }

  if (!state.filter.includes('all') && !state.filter.includes('empty')) {
    return {
      ...state,
      filter: [...state.filter, actionType],
    };
  } else {
    return {
      ...state,
      filter: [actionType],
    };
  }
};
