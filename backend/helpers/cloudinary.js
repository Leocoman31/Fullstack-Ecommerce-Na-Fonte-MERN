const cloudinary = require('cloudinary').v2;

cloudinary.config({ 
    cloud_name: 'dib1opete', 
    api_key: '345738932288829', 
    api_secret: 'Y85IL4xa-wAAwh1TXvtdj08SEm0' // Click 'View API Keys' above to copy your API secret
});


module.exports = cloudinary;