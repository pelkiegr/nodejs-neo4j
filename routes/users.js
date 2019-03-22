import express from 'express';
import {
  createUser,
  deleteUserById,
  findAllUsers,
  findUserById,
  findUserByProperties,
  updateUser
} from '../utils/userUtils';

const router = express.Router();

router.get('/:id', (req, res, next) => {
  findUserById(req.params.id)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.get('/', (req, res, next) => {
  let promise;
  if (req.body) {
    promise = findUserByProperties(req.body);
  } else {
    promise = findAllUsers();
  }

  promise
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.patch('/:id', (req, res, next) => {
  if (req.body.id) {
    res.status(500).send('Cannot update user UUID');
  }
  updateUser(req.body, req.params.id)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.post('/', (req, res, next) => {
  createUser(req.body)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

router.delete('/:id', (req, res, next) => {
  deleteUserById(req.params.id)
    .then(node => node.toJson())
    .then(json => res.send(json))
    .catch(err => res.status(500).send(err));
});

module.exports = router;
