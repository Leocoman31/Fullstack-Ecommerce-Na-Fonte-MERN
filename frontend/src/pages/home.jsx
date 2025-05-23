import ListAllProducts from "../components/Shopping/ListAllProducts"
import Hero from "../components/UI/Hero"
import { useGetAllProducts } from "../hooks/useGetAllProducts"
import Spinner from '../components/UI/Spinner'
import { useFeaturesProducts } from "../hooks/useFeaturesProducts"
import { useGetSpecialProducts } from "../hooks/useGetSpecialProducts"
import ListOfertProducts from "../components/Shopping/ListOfferProducts"
import { useIsAuthenticadUser } from "../hooks/useIsAuthenticadUser"
import ListEventProducts from "../components/Shopping/ListEventProducts"
import { useGetAllEvents } from "../hooks/useGetAllEvents"
import CardUs from "../components/UI/cardUs"
import { useContextModal } from "../context/contextModel"
import ModalCart from "../components/UI/ModalCart"
import CardUsSlider from "../components/UI/cardUsHero"
import { useGetRecentsProducts } from "../hooks/useGetRecentsProduct"
import { useTopProducts } from "../hooks/useTopProducts"


function HomePage() {
    const{isLoading,data:featuresProducts} = useFeaturesProducts();
    const{isLoading:isGetingSpecialProducts,specialProducts} = useGetSpecialProducts();
    const{isLoading:isverify, data} = useIsAuthenticadUser();
    const{handleModelCart,
        openModelCart} = useContextModal();
   const{isLoading:isgetingEvents, data:eventsList} = useGetAllEvents();
   const{isLoading:isRecentProducts, reProducts} =useGetRecentsProducts()
   const{isLoading:isLoadingTopProducts, productTop, error} = useTopProducts()

    if(isLoading  || isgetingEvents || isRecentProducts || isLoadingTopProducts){
        return <Spinner/>
    }






  
  return (
    <div >
        <Hero/>
        <main>
            <section id="container-main " className="mx-16">
       


               
                <section id="features-products" className="mx-4 my-8">
                    <h1 className="text-lg  text-[1.5rem] my-2 text-gray-900">
                        Recentes Adicionados
                    </h1>

                    <ListAllProducts products={reProducts}/>

                </section>

                {eventsList.events.length >0 &&  <section id="features-products" className="mx-4 my-8">
                    <h1 className="text-lg  text-[1.5rem] my-2 text-gray-900">
                        Promoções em Alta
                    </h1>

                    <ListEventProducts  eventsList={eventsList}/>

                </section>}


                 
                <section id="top-products" className="mx-4 my-8">
                    <h1 className="text-lg  text-[1.5rem] my-2 text-gray-900">
                        Productos Top 10
                    </h1>

                
                        
                        
                        <ListAllProducts products={productTop}/> 
                  
                    
                    
                    

                  

                </section>

                <CardUsSlider/>

            

                

                
               


               {/* <section id="offer-special" className="mx-4 my-8">

                <h1 className="text-lg  text-[1.5rem] my-2 text-gray-900 ">
                        Ofertas Especiais
                    </h1>

                   

                    <div >
                        <div>
                            
                        <ListOfertProducts products={specialProducts}/>
                        </div>
                        
                       

                    </div>

                    </section>*/
               }

                
                <section id="recomendad" className="mx-4 my-8">
                <h1 className="text-lg  text-[1.5rem] my-2 text-gray-900">
                        Recomendados
                    </h1>
                
                    <ListAllProducts products={featuresProducts}/>

                </section>

                
   

            </section>


        </main>
       
        <CardUs/>
    </div>
  )
}

export default HomePage