const app = require(`express`).Router();
const auth = require(`../middleWare/auth`);
//#region signup
const singUpController = require(`../controller/signUp`);
const signUpValidation = require(`../middleWare/signUp.validation`);
app.post(`/signup`, signUpValidation, singUpController);
//#endregion

// vervicate start
// const vervicate = require(`../controller/vervicate`)
// app.get(`/checkemail/:token`,vervicate)
// vervicate end

// signIn start
const signInValidation = require(`../middleWare/signInValidation`);
const signInController = require(`../controller/signIn`);
app.post(`/signIn`, signInValidation, signInController);
// signIn end

// home start
const homeController = require(`../controller/posts/home`);
app.get(`/home`, auth, homeController);
// home end

// addPost start
const addPostValidation = require(`../middleWare/addPostValidation`);
const addPost = require(`../controller/posts/addPost`);
app.post(`/add`, auth, addPostValidation, addPost);
// addPost end

// userPosts start
const userPosts = require(`../controller/posts/userPosts`)
app.get(`/userPosts`, auth,userPosts);
// userPosts end

// delete start
const deletePost = require(`../controller/posts/deletePost`)
app.delete(`/delete`, auth,deletePost);
// delete end

// update start
const updatePost= require(`../controller/posts/update`)
app.put(`/update`, auth,updatePost);
// update end

module.exports = app;
