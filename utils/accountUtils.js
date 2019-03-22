import uuid from 'uuid';
import instance from './instance'

const MODEL = 'account';

export const findAllAccounts = () => {
  return instance.model(MODEL)
    .all();
};

export const findAccountById = (id) => {
  return instance.model(MODEL)
    .find(id);
};

export const findAccountByProperties = (props) => {
  return instance.model(MODEL)
    .all(props)
};

export const createAccount = (account) => {
  return instance.model(MODEL)
    .create({
      id: uuid.v4(),
      name: account.name,
      type: account.type
    })
};

export const updateAccount = (account, id) => {
  return instance.model(MODEL)
    .mergeOn({ id }, account)
};

export const deleteAccountById = (id) => {
  return findAccountById(id)
    .then(node => instance.delete(node))
};
