import uuid from 'uuid';
import instance from './instance'

const MODEL = 'user';

export const findAllUsers = () => {
  return instance.model(MODEL)
    .all();
};

export const findUserById = (id) => {
  return instance.model(MODEL)
    .find(id);
};

export const findUserByProperties = (props) => {
  return instance.model(MODEL)
    .all(props)
};

export const createUser = (user) => {
  return instance.model(MODEL)
    .create({
      id: uuid.v4(),
      name: user.name,
      age: user.age,
      creationDate: new Date().toISOString(),
    })
};

export const updateUser = (user, id) => {
  return instance.model(MODEL)
    .mergeOn({ id }, user)
};

export const deleteUserById = (id) => {
  return findUserById(id)
    .then(node => instance.delete(node))
};
