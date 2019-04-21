// reducer with object

const personReducer = (person, action) => {
  switch (action.type) {
    case 'INCREASE_AGE':
      return { ...person, age: person.age + 1 };
    case 'CHANGE_LASTNAME':
      return { ...person, lastname: action.lastname };
    default:
      return person;
  }
};

export default personReducer;
