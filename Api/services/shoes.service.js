const shoesModel = require('../models/calcado');

class ShoesService{
    async findAll(){
        return await shoesModel.find();
    }

    async findById(id){
        return await shoesModel.findById(id);
    }

    async findByName(name){
        const findByName = await shoesModel.find({name:`/.*${name}*/i`})
        

        return findByName;
    }

    async createShoes(shoes){
        return await new shoesModel(shoes).save();
    }

    async updateShoes(shoes,id){
        return await shoesModel.findOneAndUpdate({ _id: id }, shoes);
    }

    async delete(id){
        await shoesModel.findByIdAndDelete(id);
    }
}

module.exports = ShoesService;