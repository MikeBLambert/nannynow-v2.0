import { Router } from 'express';
import User from '../../models/User';
import { HttpError } from '../../middleware/error';
import requireAuth from '../../middleware/requireAuth';
// import Agency from '../../models/Agency';

export default Router()
  .post('/signup', (req, res, next) => {
    const { email, password, role } = req.body;
    User.create({ email, password, role })
      .then(user => {
        res.setHeader('X-AUTH-TOKEN', user.authToken());
        res.json(user);
      })
      .catch(next);
  })

  .get(
    '/verify',
    requireAuth(['admin', 'family', 'nanny', 'owner']),
    (req, res) => {
      User.findById(req.user._id)
        .then(user => user.getProfile())
        .then(profile => res.json({ user: req.user, profile }));
    },
  );
