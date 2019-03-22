import express from 'express';
import {
  createAccount,
  deleteAccountById,
  findAccountById,
  findAccountByProperties,
  findAllAccounts,
  updateAccount
} from '../utils/accountUtils';

const router = express.Router();

router.get('/:id', (req, res, next) => {
  findAccountById(req.params.id)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.get('/', (req, res, next) => {
  let promise;
  if (req.body) {
    promise = findAccountByProperties(req.body);
  } else {
    promise = findAllAccounts();
  }

  promise
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.patch('/:id', (req, res, next) => {
  if (req.body.id) {
    res.status(500).send('Cannot update account UUID');
  }
  updateAccount(req.body, req.params.id)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res, next) => {
  createAccount(req.body)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.delete('/:id', (req, res, next) => {
  deleteAccountById(req.params.id)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
