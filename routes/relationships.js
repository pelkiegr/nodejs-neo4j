import express from 'express';
import {findAccountById} from "../utils/accountUtils";
import {findUserById} from "../utils/userUtils";

const router = express.Router();

router.post('/hub_access', (req, res, next) => {
  if (!req.body.userId || !req.body.accountId) {
    res.status(500).send('Must provide UUIDs for user and account in the form:\n'
                         + '{\n'
                         + '\t"userId": "userId",\n'
                         + '\t"accountId": "accountId"\n'
                         + '}');
  }

  Promise.all([
    findUserById(req.body.userId),
    findAccountById(req.body.accountId)
  ])
    .then(([user, account]) => {
      user.relateTo(account, 'has_access')
        .then(node => node.toJson())
        .then(json => res.send(json))
    })
    .catch(err => res.status(500).send(err));
});

module.exports = router;
