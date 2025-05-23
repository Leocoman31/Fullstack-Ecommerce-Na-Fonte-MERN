import React, { useState } from 'react'
import { MdBatchPrediction } from 'react-icons/md'
import { Link, useLocation, useParams } from 'react-router-dom'
import { useGetproduct } from '../hooks/useGetproduct';
import Spinner from '../components/UI/Spinner';
import { IoMdStar } from "react-icons/io";
import { FaComments } from "react-icons/fa";
import { userAddReviewToProduct } from '../hooks/userAddReviewToProduct';
import { useForm } from 'react-hook-form';
import { useGetRelateproducts } from '../hooks/useGetRelateproducts';
import ListAllProducts from '../components/Shopping/ListAllProducts';
import ListReview from '../components/UI/ListReview';
import Review from '../components/UI/Review';
import {useIsAuthenticadUser} from '../hooks/useIsAuthenticadUser'
import ReactStars from 'react-rating-stars-component'
import StarRating from '../components/common/StarRating';
import { FaHeart } from "react-icons/fa";
import { useAddProduct } from '../hooks/useAddProduct';
import { useGetProductsWithSameName } from '../hooks/useGetProductWithSameName';
import { useDispatch, useSelector } from 'react-redux';
import { addItem, getItemCart } from '../slice/sliceCart';
import toast from 'react-hot-toast';
import { AiOutlinePlusCircle } from "react-icons/ai";





function ProductDetails() {
    const id = useParams();
    const productd =id.id;

    
    const {isLoading, data,error} = useGetproduct({id});
    const[openDescription, setOpenDescription] =useState(true);
    const[openReview, setOpenReview] =useState(false)
    const{isLoading:isReviewLoading, data:addReview} = userAddReviewToProduct();
    const{isLoading:isGetingRelateProduct,data:relateProduct}=useGetRelateproducts({id});
    const{isLoading:isGetingProductsWithSameName,data:productsWithSameName}=useGetProductsWithSameName(productd);
    const {handleSubmit,reset,register} =useForm();
    const{isLoading:isUserLoading, data:userAuth}= useIsAuthenticadUser();
    const[ratingReview, setRatingReview] = useState(0);
    const [selectImage, setSelectImage] = useState(0);
    const [prodSize, setProdSize] =useState("");
   const cart = localStorage.getItem("Cartitems");
   const dispatch = useDispatch();
const qtdItemexistCart = useSelector(getItemCart(productd));
 const [qtd, setQtd]= useState(qtdItemexistCart);
    const location = useLocation();
    const[imagesReviews,setImagesReviews] = useState([])


   
   
  


    if(isLoading || isReviewLoading || isGetingRelateProduct  || isGetingProductsWithSameName){
        return <Spinner/>
    }

    console.log(relateProduct);


   
   
  

    const{name, category, description, discountPrice, originalPrice, images, quantityReviews, ratings, sold_out,stock,shop,
        flavor,size,color,weight,reviews,slug,_id
    }=data.product

    const loc = location.pathname.split("/")[1] + "/"  + slug


    if(qtd === 0){
        setQtd(qtd+1)}
       

function increaseQtdItem (){
    let quant =qtd ;
    quant =quant+1
    setQtd(quant);


}

function handleDecreaseQtd(){
    let quant =qtd ;
    quant =quant-1;
    setQtd(quant);
   
  }

function deletedItem (){
    dispatch(deletedItem());
    

}

    function HandleAddItemCard(){

      if(category==="Smartphone"){

           const  newItem={
                productId:productd,
                  name,
                  quantity:qtd,
                  price:discountPrice,
                  totalPrice:discountPrice*qtd,
                  images,
                  color,
                  shop,
            
                }

                dispatch(addItemCard({newItem}))

        }

        
        if(category==="Roupas" || category==="Ténis"){

       
          
            const newItem={
                productId:productd,
                  name,
                  quantity:qtd,
                  price:discountPrice,
                  totalPrice:discountPrice*qtd,
                  images,
                  color,
                  prodSize,
                  shop,
            
                }

           

                dispatch(addItem({newItem}))
                toast.success("Item adicionado no Carrinho");
                setQtd(0);
            }


        


  


    }


    
const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
  
    setImagesReviews([]);
  
    files.forEach((file) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setImagesReviews((old) => [...old, reader.result]);
        }
      };
      reader.readAsDataURL(file);
    });
  };
  
 

    function handlevisibleDescription(){
        if(!openDescription){
          setOpenDescription(true);
          setOpenReview(false)
        }
      }
      
      function handlevisibleReview(){
        if(!openReview){
          setOpenReview(true);
          setOpenDescription(false)
        }
      }

      function handleReview(data){
    

        
    
       if(isUserLoading && !user){
            toast.success("Caro usúario, faça o Login para poder deixar o seu comentário");
    
       }
    
       else{
            const {review} = data;
            const rating = ratingReview
           
            
            const product =productd;
           const user =userAuth.user._id

      
           
       addReview({review,rating,product,user,imagesReviews},{onSuccess:()=>{
        setImagesReviews([]);
        reset();
        setRatingReview(0)

       }});
           
    
        }
    
        
    
      }

   
  return  (
    <div className="text-gray-800 min-h-screen mt-16  "  >
     

        <div className='grid  grid-cols-2 gap-4 justify-center mx-24  '>

            <div className='grid grid-cols-4   gap-4'>
                <div className='space-y-4  border-gray-500' >
                {images.map((imagem, index)=> <div key={imagem.public_id} className='flex justify-center items-center'>
                    <img src={imagem.url}  className={`${
                          selectImage === index ? "border-2" : "null"
                        } cursor-pointer rounded-lg w-full h-[100px] object-contain overflow-hidden`} 
                     onClick={() => setSelectImage(index)}/>
                    
                
                </div>)}
                </div>


                <div className='col-span-3 mx-auto'>
                <img src={images[selectImage].url} className=' rounded-xl h-[450px]' />
                </div>
            </div>


            <div>
                <div className='mx-16'>
                    <h1 className='text-[2.5rem] font-bold text-black'>
                       {name}
                    </h1>
                    <div className='flex ga-4 text-lg'>
                        <div className='flex gap-1 items-center'> 
                            <p>{ratings}</p>
                            <IoMdStar color='orange'/>

                        </div>
                       
                       <div className='flex gap-1 items-center'>
                       <p> //{reviews.length}</p>
                       <FaComments className='text-sky-400'/>


                       </div>
                       
                        <p className='text-green-500'> // {stock} em stock</p>

                    </div>

                    <div id='description' className='text-gray-700'>
                        <p  className='text-lg' >{description.split(".")[0] }.</p>

                    </div>

                    <div id="price" className='flex gap-2 items-center'>
                    <p className='text-gray-900  text-[1.5rem] font-bold'>Kz {discountPrice}</p>
                        <p  className='text-gray-500 text-[1.5rem] line-through'>Kz {originalPrice}</p>
                    
        
                    </div>
                        
                        {category === "Electrónicos" &&
                        <div>
                            <p className='font-semibold'>Cor:{color} </p>
                        <div className='flex gap-2'>
                            {
                                productsWithSameName.data.map((item) => <div key={item._id}>

                                    <Link to={`../detailsProduct/${item._id}`}><img src={item.images[0].url} className=' w-full h-[50px] object-contain overflow-hidde'/></Link>
                                </div>)
                            }
                        
                        </div>

                        </div>
                        }

{category === "Smartphone" &&
                        <div className='space-y-2'>
                            <p className='font-semibold'>Cor:{color} </p>
                            <div>
                            
                            <div className='flex gap-2  items-center'>
                            <p className='font-semibold'>Memória: {prodSize} </p>
                                {size.map((item) => <button  key={item._id} value={item} className=" hover:bg-gray-200 border text-sm p-2 rounded-md" onClick={(e)=>setProdSize(e.target.value)}>{item}</button>)}
                            </div>
                            </div>
                        <div className='flex gap-2'>
                            {
                                productsWithSameName.data.map((item) => <div key={item._id}>

                                    <Link to={`../detailsProduct/${item._id}`}><img src={item.images[0].url} className=' w-full h-[50px] object-contain overflow-hidde'/></Link>
                                </div>)
                            }
                        
                        </div>

                        </div>
                        }

                        
                    {category === "Roupas" || category === "Ténis" &&
                        <div className='space-y-2 my-2'>
                          
                            <p className='font-semibold' >Cor : {color} </p>
                            <div>
                            <p className='font-semibold'>Tamanho: {prodSize} </p>
                            <div className='flex gap-2'>
                                {size.map((item) => <button  key={item._id} value={item} className=" hover:bg-gray-200 border text-sm p-2 rounded-md" onClick={(e)=>setProdSize(e.target.value)}>{item}</button>)}
                            </div>
                            </div>

                      
                        <div className='flex gap-4'>
                            {
                                productsWithSameName.data.map((item) => <div key={item._id}>

                                    <Link to={`../detailsProduct/${item._id}`}><img src={item.images[0].url} className=' w-full  h-[50px]  object-contain '/></Link>
                                </div>)
                            }
                        
                        </div>

                        </div>
                        }
                    
                    

                  
                    


                    <div className='flex gap-4  justify-start items-center mt-4'>
                    <div>
                    <button onClick={HandleAddItemCard} className='bg-gray-950 px-4 hover:bg-sky-500 text-sm text-white py-2 rounded-md '>Adicionar no Carrinho</button>

                    </div>
                    
                     <div className=' flex gap-8  justify-center items-center border   '>
                    <div className='border-r hover:bg-gray-950 hover:text-white text-sm  '>
                     <button className='px-4 py-2' onClick={increaseQtdItem} >+</button></div>
                    
                     <p  className='text-sm '>{qtd}</p>

                      <div className='border-l hover:bg-gray-950 hover:text-white text-sm'>
                          <button  className='px-4 p-2'  onClick={handleDecreaseQtd}>-</button></div>
                 
                  

                     </div>
                    </div>
                           
                     
                     

                       

            

                </div>
                
            </div>

        </div>


        <div className='bg-white my-8' >
            
        <div className='flex justify-center gap-4   mx-16 mt-8 py-4'>
          <button  className='text-xl' onClick={handlevisibleDescription}> <span className={`${openDescription  && ' border-b-4 border-b-sky-600 pb-1' }`} >Descrição do produto</span></button>
          <p >|</p>
          <button  className='text-xl' onClick={handlevisibleReview}><span  className={`${openReview  && ' border-b-4 border-b-sky-600 pb-1' }`}>Comentários ({reviews.length
          })</span> </button>


        </div>

        <div className='mx-32 py-4 '>
          {openDescription && <div>
           <p className='whitespace-pre-line'>{description}</p> 
          </div>}

          {openReview && <div>

            <div>
            {reviews.length!==0 ? (<ListReview reviews={reviews}/>): (<div><p>
                        Este produto por enquanto não tem nenhum comentário</p>
                         <p>Seja o primeiro, deixa o seu comentário</p>
                         
                         
                         
                         </div>)
                         }
            </div>

            <div>
            <div id='section_reviews' className=' mt-4 tex-lg text-gray-700'>
            <div className=' space-y-4 '>
            <p className='text-lg'>Deixa o seu comentário</p>
            <div className='space-y-4'>
            <div className='flex gap-2'>
                <p>Avalie o produto : </p>
        <StarRating  rating={ratingReview} setRatingReview={setRatingReview}  />
        </div>

        <div>

        <div>
        <label className="pb-2">
            Deixe imagens do producto no comentário <span className="text-red-500"></span>
          </label>
            <input type='file'  
            className="hidden" multiple  id='upload' name="images" onChange={handleImageChange} />
        </div>

            <div className="w-full flex items-center flex-wrap">
                        <label htmlFor="upload">
                          <AiOutlinePlusCircle size={30} className="mt-3" color="#555" />
                        </label>
                        {imagesReviews &&
                          imagesReviews.map((i) => (
                            <img
                              src={i}
                              key={i}
                              alt=""
                              className="h-[120px] w-[120px] object-cover m-2"
                            />
                          ))}
                      </div>
        </div>

        
 
           <div>
            <form onSubmit={handleSubmit(handleReview)} >
           
            <textarea id="review" className='border-2 border-gray-300 rounded-xl p-2 w-[60%] ' rows={10}  name="review" {...register("review")} defaultValue="Deixa o seu comentário aqui"/>
            
        

            <div className='flex gap-2 py-4'>
                <button type='submit' className='bg-gray-800 hover:bg-sky-700 px-4 py-2 text-white'>Enviar</button>
                <button type='reset' className='bg-red-600 hover:bg-red-700 px-4 py-2 text-white'>Cancelar</button>

            </div>
            </form>

            </div>
        
      
            </div>
              
            </div>

        </div>
            
            </div>

          </div>}


        </div>

        </div>
        {relateProduct && <div className=' m-16 space-y-4'>
            <h1 className='text-2xl text-gray-800'>Produtos relacionados</h1>

        <ListAllProducts products={relateProduct}/>


        </div>}

    </div>
  )
}

export default ProductDetails