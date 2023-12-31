'use strict';

const router = require('express').Router();
const dish = require('./controllers/dishController');

router.get('/random-dishes', dish.getThreeRandomDishes);
router.post('/likedDishes', dish.saveLikedDish); 
router.get('/likedDishes', dish.getLikedDishes);
router.delete('/likedDishes/:dishId', dish.deleteLikedDish);

module.exports = router;