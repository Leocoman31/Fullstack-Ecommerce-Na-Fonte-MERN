const catchAsync = require('../middlewares/catchAsync');
const Shop = require('../models/shop');
const Withdraw = require('../models/withdraw');
const APIFeatures = require('../utilis/appiFeatures');
const ErrorHandler = require('../utilis/errorHandler')


exports.createRequestWidran = catchAsync(async (req, res, next) => {
      
        const { amount } = req.body;
  
        

         /* await sendMail({
            email: req.seller.email,
            subject: "Withdraw Request",
            message: `Hello ${req.seller.name}, Your withdraw request of ${amount}$ is processing. It will take 3days to 7days to processing! `,
          });
          res.status(201).json({
            success: true,
          });*/
    
        
        
  
        const withdraw = await Withdraw.create({
          shop:req.shop._id,
          amount
        });
  
        const shop = await Shop.findById(req.shop._id);
  
        shop.availableBalance = shop.availableBalance - amount;
  
        await shop.save();
  
        res.status(201).json({
          success: "success",
          withdraw,
        });
     
    
  });
  
  // get all withdraws --- admnin
  
 
exports.getAllWithdraws = catchAsync(async (req, res, next) => {
      

  const features = new APIFeatures(Withdraw.find(), req.query)
  .filter()
  .sort()
  .limitFields()
  .paginate();

        const withdraws = await features.query;
  
        res.status(201).json({
          success: "success",
          resultats:withdraws.length,
          withdraws,
        });
    

  });
  
  // update withdraw request ---- admin
 
exports.updateStatusRequestWithdraw = catchAsync(async (req, res, next) => {
      
        
  
        const withdraw = await Withdraw.findByIdAndUpdate(
          req.params.id,
          {
            status: "sucesso",
            updatedAt: Date.now(),
          },
          { new: true }
        );
  
        const shop = await Shop.findById({shop:req.shop._id});
  
        const transactions = {
          _id: withdraw._id,
          amount: withdraw.amount,
          updatedAt: withdraw.updatedAt,
          status: withdraw.status,
        };
  
        shop.transactions = [...shop.transactions, transactions];
  
        await shop.save();
  
        /*try {
          await sendMail({
            email: shop.email,
            subject: "Confirmação de pagamento",
            message: `Olá ${shop.name},o seu pedido de levantamento ${withdraw.amount}$ esta a ser processada. O prazo de entrega depende das politicas do seu banco, geralmente leva 48 euros.`,
          });
        } catch (error) {
          return next(new ErrorHandler("Algo errado aconteceu, tentar mais tarde", 500));
        }*/
        res.status(201).json({
          success: 'success',
          withdraw,
        });
    
    })
  
  