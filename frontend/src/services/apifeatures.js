
import axios from 'axios';



export const  registerApi = async (dataForm)=>{
  
    try{
    const {data} = await axios.post("/api/v1/users/register",dataForm,{ withCredentials: true })
    return data;
    }
    catch(err){
        console.log(err)
    }

}

export const featuresProducts = async () =>{

    
    try{

        const {data} = await axios.get('/api/v1/products/getAllProducts/');
      
       
        return data;

        
   
   

    }
    catch(err){
        console.log(err.message)


    }
}



export const topProducts = async () =>{

    
    try{

        const {data} = await axios.get('/api/v1/products/getAllProducts/?sort=-ratings&limit=10');
      
       
        return data;

        
   
   

    }
    catch(err){
        console.log(err.message)


    }
}


export const recentsProducts = async () =>{

    
    try{

        const {data} = await axios.get('/api/v1/products/getAllProducts/?sort=-createdAt&limit=10')
        return data
        
   
   

    }
    catch(err){
        console.log(err.message)


    }
}

export const getSpeciaisOfersProducts  = async () =>{
    try{

        const {data} = await axios.get('/api/v1/products/specialofer');

        console.log(data)
        
        return data
      
        
   
   

    }
    catch(err){
        console.log(err.message)


    }

}


export const createShop = async(dataform)=>{
    try{
        const {data} = await axios.post("/api/v1/shops/createShop",dataform ,{withCredentials:true} )

        return data;
    }
    catch(err){
        console.log(err)
    }
}




export const loginApi = async (dataForm)=>{
    try{
        const {data} = await axios.post("/api/v1/users/login",dataForm,{ withCredentials: true })
        return data

    }

    catch(err){
        console.log(err)

    }
 
}


export const logout = async() =>{

    try{
        const {data} = await axios.get('/api/v1/users/logout')
        return data
    }

    catch(err){
        console.log(err)
    }

}


export const getAllProducts = async(currentPage=0) =>{

    const url = '/api/v1/products/getAllProducts';
   
    try{

        if(currentPage>0){
            const {data} = await axios.get(`${url}/?page=${currentPage}`);
            return data
        }
    
           
            const {data} = await axios.get(url)
            return data
    }

    catch(err){
        console.log(err)
    }

}





export const getAllProductsByCategory = async(category) =>{
    try{
        const {data} = await axios.get(`/api/v1/products/getAllProducts/?category=${category}`)
        return data
    }

    catch(err){
        console.log(err)
    }



}


export const getFilterProduct = async(filterSearch) =>{




    try{
        if(filterSearch === "Mais popular"){
           
            const {data} = await axios.get('/api/v1/products/getAllProducts/?sort=-ratings')
            return data

        }
      
        if(filterSearch === "Do mais caro ao mais barato"){
            const {data} = await axios.get('/api/v1/products/getAllProducts/?sort=-originalPrice')
            return data

        }

        if(filterSearch === "Do mais barato ao mais caro"){
            const {data} = await axios.get('/api/v1/products/getAllProducts/?sort=originalPrice')
            return data

        }
    }

    catch(err){
        console.log(err)
    }



}



export const getAllProductsFilter = async(filterPriceUp="",filterPriceLower="",category="") =>{


    let url = '/api/v1/products/getAllProducts/';

    
    try{
        if(filterPriceUp !=="" && filterPriceLower!==""){
        const {data} = await axios.get(`${url}?originalPrice[lte]=${filterPriceLower}&originalPrice[gte]=${filterPriceUp}`)
        return data;
        }

        if(category !=="" && filterPriceUp ==="" && filterPriceLower==="" ){
            const {data} = await axios.get(`${url}?category=${category}`)
            return data;

        }

        if(category !=="" && filterPriceUp !=="" && filterPriceLower!=="" ){
            const {data} = await axios.get(`${url}?originalPrice[lte]=${filterPriceLower}&originalPrice[gte]=${filterPriceUp}&category=${category}`)
            return data;

        }
    }
    

    catch(err){
        console.log(err)
    }



}

export const getProduct = async(id_prod)=>{
    const{id} = id_prod;

        
            
            const{data} = await axios.get(`/api/v1/products/productDetails/${id}`);
       
       
            return data;


}



export const addProduct =async(product)=>{ 
    try{
        
   console.log(product);
    const{data}= await axios.post('/api/v1/products/addProduct',product,{withCredentials:true} );
    return data;

    }catch(err){
        console.log(err)
    }

}


export const searchProducts =async (key_word) =>{

    const {keyword} =key_word
 

    try{

   
        const {data} = await axios.get(`/api/v1/products/${keyword}`)
        

        return data;
      


    
}
catch(err){
    console.log(err.message)


}

   

}





export const userAuthenticad  = async () =>{
    try{

        const {data} = await axios.get('/api/v1/users/auth');
        return data;
       
        
    }
    catch(err){
        console.log(err.message)


    }

}
export const getRelateProduct = async(id_prod) =>{

    const{id} = id_prod
    try{

        

      

        const {data} = await axios.get(`/api/v1/products/relateProducts/${id}`);
        
    
       
        return data
        
   
   

    }
    catch(err){
        console.log(err.message)


    }

}

export const getProductsWithSameName= async(id) =>{


    try{

        


        const {data} = await axios.get(`/api/v1/products/productsWithSameName/${id}`);
        
    
       
        return data
        
   
   

    }
    catch(err){
        console.log(err.message)


    }

}


export const getAllReviewsProduct =  async(id)=>{
    try{
   
        const {data} = await axios.post(`api/v1/products/${id}/reviews`)

        return data
    }
    catch(err){
        console.log(err)
    }
}



export const addReviewToProduct =  async(review,rating, product,user,imagesReviews)=>{
    try{
      

      
        const {data} = await axios.post(`/api/v1/reviews/addReview`,review,rating, product,user,imagesReviews,{ withCredentials: true})
    
        return data
    }
    catch(err){
        console.log(err)
    }

 



}


export const getAllProductsShop = async()=>{
    try{
      

    
        const {data} = await axios.get('/api/v1/products/getAllProductsshop')
    
        return data
    }
    catch(err){
        console.log(err)
    }

 


}


export const getAllProductsSeller = async()=>{
    try{
      

    
        const {data} = await axios.get('/api/v1/products/getAllProductsSeller')
    
        return data
    }
    catch(err){
        console.log(err)
    }

 


}





export const getMyShops = async () =>{
    try{
      
        const {data} = await axios.get('/api/v1/shops/getMyShops')
    
        return data
    }
    catch(err){
        console.log(err)
    }

 

}


export const createEvent = async(event)=>{
    try{
      
        const {data} = await axios.post('/api/v1/events/createEvent',event,{ withCredentials: true})
    
        return data
    }
    catch(err){
        console.log(err)
    }

 

}

export const getEvent =async(shop) =>{
    try{
      
        console.log(shop);
        const {data} = await axios.get(`/api/v1/events/getEvent/${shop}`)
    
        return data
    }
    catch(err){
        console.log(err)
    } 


}

export const getAllEventsSeller = async()=>{
    try{
      
        const {data} = await axios.get('/api/v1/events/myEvents')
    
        return data
    }
    catch(err){
        console.log(err)
    } 
}

 

    export const getAllEvents = async()=>{
        try{
            const {data} = await axios.get('/api/v1/events/getAllEvents')
    
            return data
        }
        catch(err){
            console.log(err)
        }

        }
    




export const getAllEventsShop = async()=>{

}


export const getMe = async()=>{
    try{
        const {data} = await axios.get('/api/v1/users/getMe')

        return data
    }
    catch(err){
        console.log(err)
    }

    

}


export const updatePhoto = async(photo)=>{
    try{

console.log(photo);
        const {data} = await axios.patch('/api/v1/users/updateMyphoto',photo,{withCredentials:true})

        return data
    }
    
    catch(err){
        console.log(err)
    }


}

export const udpdatInfoUser= async(name,email)=>{
    try{


           const {data} = await axios.patch('/api/v1/users/updateMe',name,email,{withCredentials:true})
   
           return data
       }
       
       catch(err){
           console.log(err)
       }
   

}

export const udpdatMyPassword= async(passwordCurrent,password,passwordConfirm)=>{


    try{


           const {data} = await axios.patch('/api/v1/users/updateMyPassword',passwordCurrent,password,passwordConfirm,{withCredentials:true})
   
           return data
       }
       
       catch(err){
           console.log(err)
       }
   

}

export const updateAdress = async(city, address1,address2) =>{


    try{

        


        const {data} = await axios.patch('/api/v1/users/updateMyAddress',city,address1,address2,{withCredentials:true})

        return data
    }
    
    catch(err){
        console.log(err)
    }



}



export const processPayment = async (cartItens)=>{
    try{


        const {data} = await axios.post('/api/v1/payments/processPayment',cartItens)

        return data
    }
    
    catch(err){
        console.log(err)
    }



}


export const createOrder = async(order) =>{
    try{


        const {data} = await axios.post('/api/v1/orders/createOrder',order,{ withCredentials: true})

        return data
    }
    
    catch(err){
        console.log(err)
    }



}

export const getMyOrders = async() =>{
    try{
        const {data} = await axios.get('/api/v1/orders/myOrders')

        return data
    }
    catch(err){
        console.log(err)
    }



}

export const getAllOrdersAdmin = async()=>{
    try{
        const {data} = await axios.get('/api/v1/orders/getAllOrders')

        return data
    }
    catch(err){
        console.log(err)
    }


}

export const getUser = async(id)=>{
    try{
        
        const {data} = await axios.get(`/api/v1/users/getUser/${id}`)

        return data

    }catch(err){
        console.log(err)

    }
}


export const updateOrderStatusAdmin = async(id)=>{

   
 const{idOrder} =id

 console.log(idOrder);
    try{
        const {data} = await axios.patch(`/api/v1/orders/updateStatusOrder/${idOrder}`, {withCredentials:true})
        return data;
    }catch(err){
        console.log(err)
    }
}


export const getAllShopsAdmin = async ()=>{

    try{
        const {data} = await axios.get("/api/v1/shops/getAllShops");
        return data
    }
    catch(err){
        console.log(err)
    }
}


export const  sendNotificaction = async(message,type,id)=>{

    try{
        const {data} = await axios.post('/api/v1/notications/sendNotificaction' ,message,type,id, {withCredentials:true});
        return data
    }
    catch(err){
        console.log(err)
    }

}

export const  getAllNotificactionsUSer = async()=>{
    try{
        const {data} = await axios.get('/api/v1/notications/getAllnotificationsUser');
        return data
    }
    catch(err){
        console.log(err)
    }

}


export const updateStatusShop = async(id) =>{
    try{
        const {data} = await axios.patch(`/api/v1/shops/updateStatus/${id}`, {withCredentials:true});
        return data
    }
    catch(err){
        console.log(err)
    }

}



export const deleteShop = async(id) =>{
    try{
        const {data} = await axios.delete(`/api/v1/shops/deleteShop/${id}`);
        return data
    }
    catch(err){
        console.log(err)
    }

}

export const getShop = async(shopId)=>{

    const {id} = shopId;
    try{
        const {data} = await axios.get(`/api/v1/shops/getInfoShop/${id}`);
        return data
    }
    catch(err){
        console.log(err)
    }

}


export const getAllUsers = async(numberItemPerPage,currentPage)=>{

    try{
        const {data} = await axios.get(`/api/v1/users/getAllUsers/?page=${currentPage}`);
        return data
    }
    catch(err){
        console.log(err)
    }

}


export const deleteUser = async(idUser)=>{
    const {id} = idUser;
    try{
        const {data} = await axios.delete(`/api/v1/users/deleteUser/${id}`);
        return data
    }
    catch(err){
        console.log(err)
    }
} 


export const updateRoleUser = async(id)=>{
    try{
        const {data} = await axios.patch(`/api/v1/users/updateRole/${id}`,{withCredentials:true});
        return data
    }
    catch(err){
        console.log(err)
    }

    
}


