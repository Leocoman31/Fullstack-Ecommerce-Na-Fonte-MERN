import React, { useContext } from 'react'
import { createContext,useState } from 'react'

  const ContextModal = createContext();


    function ModalProvider ({children})
    {
      const [openQuickViewProd, setOpenQuickViewPro] = useState(false);
      const [openAuth, setopenAuth] = useState(false);
      const [openSideBar, setOpenSideBar] = useState(false);
      const [openSideBarSeller, setOpenSideBarSeller] = useState(false);
      const [openSideBarAdmin, setOpenSideBarAdmin] = useState(false);
      const [openModalProduct, setOpenModalProdut] = useState(false);
      const[showModelShop,setShowModelShop] = useState(false);

      const[openModalUser, setOpenModalUser] = useState(false);
       const [deleteShow,setDeleteShow] = useState(false);
       const[botaoConfirm,setBotaoConfirm]=useState(false);
       const [openModalEditProduct, setOpenModalEditProduct] = useState(false);
       const [openModalConfirmUserRole, setOpenModalConfirmUserRole] = useState(false);
       const[deleteUserShow, setDeleteUserShow] = useState(false);
       const[openModelCart, setOpenModelCart] = useState(false);
       const[openModelOrderDetail, setOpenMOdelOrderDetail] = useState(false);
       const[openModelShopDetail, setOpenModelShopDetail] = useState(false);
       const[openModelUserDetail, setOpenModelUserDetail] = useState(false);
       const[openModelProductDetail, setOpenModelProductDetail] = useState(false);
       const[openModelEventDetail, setOpenModelEventDetail] = useState(false);
       
       

      function handleQuickViewProd (){
        setOpenQuickViewPro (()=>!openQuickViewProd)
      }


        function handleModelEventDetails(){
          setOpenModelEventDetail(() => !openModelEventDetail)
        }
  
      

      function handleModelUserDetails(){
        setOpenModelUserDetail(() => !openModelUserDetail)
      }

      function handleModelProductDetails(){
        setOpenModelProductDetail(() => !openModelProductDetail)
      }

      function handleSideBarSeller(){
        setOpenSideBarSeller(() => !openSideBarSeller)
      }


     function handleModelShopDetails(){
      setOpenModelShopDetail(()=>!openModelShopDetail)

     }
     

      function handleModelOrderDetails (){
        setOpenMOdelOrderDetail (()=>!openModelOrderDetail)

      }


      function handleModelShop(){
        setShowModelShop(()=>!showModelShop)

      }

      function handleModelCart (){
        setOpenModelCart (()=>!openModelCart)

      }


      function handleDeleteUserConfirm(){
        setDeleteUserShow(()=>!deleteUserShow);

     }
     function handlebotaoConfirmUserRole(){
      setOpenModalConfirmUserRole(()=>!openModalConfirmUserRole);

   }

       function handlebotaoConfirm(){
         setBotaoConfirm(()=>!botaoConfirm);

      }

      function handleEditProduct(){
        setOpenModalEditProduct(()=>!openModalEditProduct);

     }


      function handleDeleteConfirm(){
        setDeleteShow(()=>!deleteShow);

      }
      function handleSideBarUser(){
        setOpenModalUser(() => !openModalUser)

      }

      function handleModalNewProduct(){
        setOpenModalProdut (()=>!openModalProduct)

      }


      function handleAuthModel (){
        setopenAuth (()=>!openAuth)

      }


      function handleSideBar (){
        setOpenSideBar(() => !openSideBar)
      }


      
      function handleSideBarAdmin (){
        setOpenSideBarAdmin(() => !openSideBarAdmin)
      }


   
        
    
  return (
    <ContextModal.Provider value={{
      openQuickViewProd,
      handleQuickViewProd,
      openAuth,
      handleAuthModel,
      handleSideBar,
      openSideBar,
      openModalProduct,
      handleModalNewProduct,
      openSideBarAdmin,
      handleSideBarAdmin,
      openModalUser,
      handleSideBarUser,
      handleDeleteConfirm,
      deleteShow,
      handleEditProduct,
      openModalEditProduct,
      handlebotaoConfirmUserRole,
      openModalConfirmUserRole,
      deleteUserShow,
      handleDeleteUserConfirm,
      handleModelCart,
      openModelCart,
      showModelShop,
      handleModelShop,
      handleModelOrderDetails,
      openModelOrderDetail,
      handleModelShopDetails,
      openModelShopDetail,
      handleModelUserDetails,
      openModelUserDetail,
      openModelProductDetail,
      handleModelProductDetails,
      openModelEventDetail,
      handleModelEventDetails,
      handleSideBarSeller,
      openSideBarSeller








    

    }}>
      {children}

    </ContextModal.Provider>
  )
}

function useContextModal(){
  const context = useContext(ContextModal);
  if(context === undefined) throw new Error("O contexto nao deve ser usado aqui");

  return context;
}

export {useContextModal,ModalProvider}
