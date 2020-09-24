const Joi = require('joi');

function validateMalumot(malumot){
    const validateMalumot = {
        ism: Joi.string().required().min(3),
        familya: Joi.string().required().min(3),
        sharif: Joi.string().required().min(3)
    }
    return Joi.validate(malumot, validateMalumot);
}

exports.validateMalumot = validateMalumot;