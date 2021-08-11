const express = require("express");
const router = express.Router();

const ShoesController = require("./../controllers/shoes.controller")

const shoesController = new ShoesController();

// [GET] /shoes - Retorna a lista de calçados
router.get("/shoes", shoesController.getShoes);

// [GET] /shoes/{id} - Retorna apenas um único calçado pelo ID
router.get("/shoes/:id", shoesController.getShoesById);

// [POST] - /shoes - Cria um novo calçado
router.post("/shoes", shoesController.createShoes);

// [PUT] - /shoes/{id} - Atualiza um calçado pelo ID
router.put("/shoes/:id", shoesController.updateShoes);

// [Delete] - /shoes/{id} - Remover um calçado pelo ID
router.delete("/shoes/:id", shoesController.deleteShoes);

module.exports = router;