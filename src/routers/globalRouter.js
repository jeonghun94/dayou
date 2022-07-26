import express from "express";
import {
  login,
  logout,
  mypage,
  notSupport,
  password,
  searchInCar,
} from "../controllers/globalController";
import { protectorMiddleware } from "../middleware";

const globalRouter = express.Router();
globalRouter.route("/login").get(login);
globalRouter.route("/not-support").get(notSupport);
globalRouter.route("/search-in-car").post(searchInCar);
globalRouter.route("/logout").get(logout);

// 프로텍트 미들웨어를 사용하는 경우
globalRouter.route("/my-page").all(protectorMiddleware).get(mypage);
globalRouter
  .route("/password")
  .all(protectorMiddleware)
  .get(password)
  .put(password);

export default globalRouter;
