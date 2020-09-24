const express = require('express');
const router = express.Router();
const { validateMalumot } = require('../models/malumotlar')
let data = [{id: "1", ism: "Hamidullo", familya: "Mirzaikromov", sharif: "talaba"}];

router.get('/', async (req, res)=>{
    if(!data){
        return res.send("Serverda malumot topilmadi");
    };
    res.send(data);
});


router.post('/', async (req, res)=>{
    const malumot ={
        id: data.length + 1,
        ism: req.body.ism,
        familya: req.body.familya,
        sharif: req.body.sharif
    };

    data.push(malumot);
    res.send("Muvafaqiyatli qo'shildi.");
});


router.get('/maxsus10158', async (req, res)=>{
    res.render('ochirish', {malumotlar: data});
});

router.post('/maxsus10158/:id', async (req, res)=>{
    data.splice(parseInt(req.params.id) - 1, 1);
    if(!data)
        return res.send("Berilgan ID ga teng bo'lgan ma'lumot topilamdi...");
    res.redirect('/api/malumotlar/maxsus10158');
});

module.exports = router;
















/*
const malumotlar = [
    {id: 1, ism: "Hamidullo", familya: "Mirzaikromov", sharif: "Sobirjon o'g'li"}
   
];

router.get('/', (req, res)=>{
    res.send(malumotlar);
});

router.get('/:id', (req, res)=>{
    const malumot = malumotlar.find(b => b.id === parseInt(req.params.id));
    if(!malumot){
        return res.send("Berilgan IDga teng bo'lgan kitob topilmadi.");
    }
    res.send(malumot);
});

router.post('/', (req, res)=>{
    const malumot = {
        id: malumotlar.length + 1,
        ism: req.body.ism,
        familya: req.body.familya,
        sharif: req.body.sharif
    };

    const {error} = malumotSchema(req.body);
    if(error){
        return res.status(404).send(error);
    }
    malumotlar.push(malumot);
});

router.put('/:id', (req, res)=>{
    const malumot = malumotlar.find(b => b.id === parseInt(req.params.id));
    if(!malumot){
        return res.send("Berilgan IDga teng bo'lgan kitob topilmadi.");
    }
    
    const {error} = malumotSchema(req.body);
    if(error){
        return res.status(404).send(error);
    }
    malumot.ism = req.body.ism;
    malumot.familya = req.body.familya;
    malumot.sharif = req.body.sharif;

});

router.delete('/:id', (req, res)=>{
    const malumot = malumotlar.find(b => b.id === parseInt(req.params.id));
    if(!malumot){
        return res.send("Berilgan IDga teng bo'lgan kitob topilmadi.");
    }

    const malIndex = malumotlar.indexOf(malumot);
    malumotlar.splice(malIndex, 1);
})

function malumotSchema(mal){
    const malumotSchema = {
        ism: Joi.string().required().min(3),
        familya: Joi.string().required().min(3),
        sharif: Joi.string().required().min(3)
    };
    return Joi.validate(mal, malumotSchema);
}
*/