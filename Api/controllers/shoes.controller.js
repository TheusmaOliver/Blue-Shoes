const ShoesService = require('./../services/shoes.service');
const mongoose = require('mongoose');

const shoesService = new ShoesService();

class ShoesController {
    async getShoes(req,res){
        const shoes = await shoesService.findAll();
        res.send(shoes);
  }

  async getShoesById(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const shoes = await shoesService.findById(id);

    // Validação das mensagens
    if (!shoes) {
      res.status(404).send("Calçado não encontrado.");

      return;
    }

    res.send(shoes);
  }

  async createShoes(req, res) {
    const shoes = req.body;

    // Validação

    if (!shoes || !shoes.name || !shoes.imageUrl) {
      res.status(400).send({
        message:
          'Calçado inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    const saveShoes = await shoesService.createShoes(shoes);

    res.send(saveShoes);
  }

  async updateShoes(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.send("Código inválido.");
      return;
    }

    const shoes = await shoesService.findById(id);

    // Validação das mensagens
    if (!shoes) {
      res.status(404).send("Calçado não encontrado.");

      return;
    }

    const newShoes = req.body;

    if (!Object.keys(newShoes).length) {
      res.status(400).send({ message: "O body da requisição está vazio." });

      return;
    }

    if (!newShoes || !newShoes.name || !newShoes.imageUrl) {
      res.status(400).send({
        message:
          'Calçado inválido. Certifique-se de que o body da requisição possui "nome" e "imagemUrl".',
      });

      return;
    }

    shoesService.updateShoes(newShoes, id);
    const shoesUpdate = await shoesService.findById(id);

    res.send(shoesUpdate);
  }

  async deleteShoes(req, res) {
    const id = req.params.id;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      res.status(422).send("Código inválido.");
      return;
    }

    const shoes = await shoesService.findById(id);

    // Validação das mensagens
    if (!shoes) {
      res.status(404).send("Calçado não encontrado.");

      return;
    }

    await shoesService.delete(id);

    res.send({ message: "Calçado excluído com sucesso" });
  }
}

module.exports = ShoesController;
