const express = require('express');
const Post = require('../models/Post');
exports.getAllPostsNames = async (req, res, next) => {
  const [allPosts, _] = await Post.getAllPostsNames();
  res.status(200).json({ allPosts });
};
exports.createNewPost = async (req, res, next) => {
  try {
    let {
      about,
      appearance,
      name,
      image,
      realName,
      gender,
      firstGame,
      lastGame,
      birthPlace,
      trivia,
    } = req.body;
    await Post.savePost(
      about,
      appearance,
      name,
      image,
      realName,
      gender,
      firstGame,
      lastGame,
      birthPlace
    );
    let [id, _] = await Post.getCurrentId();
    const postId = id[0]['MAX(id)'];
    await Post.saveTrivia(postId, trivia);
    res.status(200).json({ message: 'SUCESS' });
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.getPostById = async (req, res, next) => {
  let postid = req.params.id;
  try {
    let [posts, _] = await Post.findOnePost(postid);
    const [trivia, __] = await Post.findTriviaByPost(postid);
    const fullPost = { ...posts[0], trivia: [...trivia] };
    res.status(200).json(fullPost);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

exports.updatePostRecords = async (req, res, next) => {
  try {
    const postid = req.params.id;
    const data = req.body;
    for (const record in data) {
      await Post.updatePostRecord(record, data[record], postid);
    }
    const [posts, _] = await Post.findOnePost(postid);
    res.status(200).json(...posts);
  } catch (err) {
    console.log(err);
    next(err);
  }
};
exports.deletePost = async (req, res, next) => {
  try {
    const postid = req.params.id;
    if (postid == 1) {
      res.json({ message: 'Admin Acess Needed' });
    } else {
      await Post.deletepOnePost(postid);
      res.status(200).json({ message: 'SUCESS' });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
};
