const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
// SERVER DATA
// router.put('/like/:id', (req, res) => {
//     console.log(req.params);
//     const galleryId = req.params.id;
//     for(const galleryItem of galleryItems) {
//         if(galleryItem.id == galleryId) {
//             galleryItem.likes += 1;
//         }
//     }
//     res.sendStatus(200);
// }); // END PUT Route

// DB PUT
router.put('/like/:id', (req, res) => {
    console.log(req.params);
    const galleryId = req.params.id;
    const queryText = `UPDATE gallery
        SET likes = likes + 1
        WHERE id = $1`;
    const values = [galleryId];

    pool.query(queryText, values)
        .then(response => {
            console.log('likes updated at id:', galleryId);
            res.sendStatus(200);
        }).catch(err => {
            console.log('PUT ERR', err);
            res.sendStatus(500);
        });
}); // END PUT Route

// // GET Route SERVER 
// router.get('/', (req, res) => {
//     res.send(galleryItems);
// }); // END GET Route

//GET Route DB
router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM gallery';

    pool.query(queryText)
        .then(response => {
            res.send(response.rows);
        }).catch(err => {
            res.sendStatus(500);
        })
}); // END GET Route


module.exports = router;