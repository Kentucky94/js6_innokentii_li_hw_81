const express = require('express');
const nanoid = require('nanoid');

const Link = require('../models/Link');

const router = express.Router();

router.post('/links', async (req, res) => {
  const linkData = req.body;

  linkData.shortUrl = nanoid(7);

  const link = new Link(linkData);

  try{
    link.save();

    res.send(link);
  }catch(e){
    res.status(422).send(e);
  }
});

router.get('/:shortUrl', async (req, res) => {
  try{
    const link = await Link.findOne({shortUrl: req.params.shortUrl});

    if(!link){
      return res.status(400).send({message: 'Not Found'});
    }

    res.status(301).redirect(link.originalUrl);
  }catch(e){
    return res.status(400).send({message: 'Not Found'});
  }
});

module.exports = router;