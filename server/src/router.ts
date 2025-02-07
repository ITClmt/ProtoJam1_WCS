import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

import gladiator from "./modules/gladiator/gladiator";
// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/gladiator", gladiator.browse);
router.get("/api/gladiator/:firstname", gladiator.read);
router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

/* ************************************************************************* */

export default router;
