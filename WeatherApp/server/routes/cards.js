var express = require('express');
var router = express.Router();
// var sequenceGenerator = require('./sequenceGenerator');

const Card = require('../models/card');

function returnError(res, error) {
  res.status(500).json({
    message: 'An error occurred',
    error: error
  });
}

router.get('/', (req, res, next) => {
Card.find()
    .then(cards => {
      res.status(200).json({
        message: 'cards fetched successfully',
        cards: cards
      });
    })
    .catch(error => {
      returnError(res, error);
    });
  }
);

router.post('/', (req, res, next) => {
//   const maxDocumentId = sequenceGenerator.nextId("documents");
//   console.log(maxDocumentId);
  const card = new Card({
    id: req.body.id,
    city: req.body.city,
    image: req.body.image,
    temp: req.body.temp,
    min: req.body.min,
    max: req.body.max
  });

card.save()
    .then(createdCard => {
      res.status(201).json({
        message: 'Document added successfully',
        card: createdCard
      });
    })
    .catch(error => {
      returnError(res, error);
    });
});

router.put('/:id', (req, res, next) => {
Card.findOne({ id: req.params.id })
    .then(card => {
        card.city = req.body.city;
        card.image = req.body.image;
        card.temp = req.body.temp;
        card.min = req.body.min;
        card.max = req.body.max;

    Card.updateOne({ id: req.params.id }, card)
        .then(result => {
          res.status(204).json({
            message: 'card updated successfully'})
        })
        .catch(error => {
          returnError(res, error);
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'card not found.',
        error: { card: 'card not found'}
      });
    });
});

router.delete("/:id", (req, res, next) => {
Card.findOne({ id: req.params.id })
    .then(card => {
    Card.deleteOne({ id: req.params.id })
        .then(result => {
          res.status(204).json({ message: "card deleted successfully" });
        })
        .catch(error => {
          returnError(res, error);
        })
    })
    .catch(error => {
      returnError(res, error);
    });
});

module.exports = router;