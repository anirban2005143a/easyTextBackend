import { Router } from "express";
import {
  Blogresult,
  BLogsummary,
  BLogtitle,
  changetone,
  converttopara,
  imagetotext,
  jobrole,
  lipost,
  liprofileview,
  pcaption,
  promotionaldata,
  utubevuddes,
  utubevuditle,
} from "../controllers/Getdata.js";
import upload from "../middlewares/multer.js";

const router = Router();

router.route("/api/v1/kol/Blogtitle").post(BLogtitle);
router.route("/api/v1/kol/Blogsummary").post(BLogsummary);
router.route("/api/v1/kol/Blogresult").post(Blogresult);
router.route("/api/v1/kol/paragraph").post(converttopara);
router.route("/api/v1/kol/promotion").post(promotionaldata);
router.route("/api/v1/kol/utubeviddescr").post(utubevuddes);
router.route("/api/v1/kol/utubevidtitle").post(utubevuditle);
router.route("/api/v1/kol/jobrole").post(jobrole);
router.route("/api/v1/kol/piccaption").post(pcaption);
router.route("/api/v1/kol/lipost").post(lipost);
router.route("/api/v1/kol/liprofileview").post(liprofileview);
router.route("/api/v1/kol/imagetotext").post(
  upload.fields([
    {
      name: "image",
      maxCount: 1,
    },
  ]),
  imagetotext
);
router.route("/api/v1/kol/changetone").post(changetone);

export default router;
