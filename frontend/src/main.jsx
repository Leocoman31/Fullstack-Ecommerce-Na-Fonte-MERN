
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { Toaster } from "react-hot-toast"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools"
import {Provider} from 'react-redux'

import './index.css'
import App from './App.jsx'
import { ModalProvider } from './context/contextModel.jsx';
import { store } from './store/storeCart.js';



const queryClient =new QueryClient({
  defaultOptions:{
    queries:{
      staleTime:0
    },

  },
});

createRoot(document.getElementById('root')).render(
  <>


<QueryClientProvider client={queryClient}>
<ReactQueryDevtools initialIsOpen={false}/>
    <BrowserRouter>
    <ModalProvider>
    <Provider store={store}>
    <App />
    </Provider>
    </ModalProvider>
    
    </BrowserRouter>
    </QueryClientProvider >
    
    <Toaster position="top-center" gutter={12} containerStyle={{margin:"8px"}}
    toastOptions={{
      sucess:{
        duration:8000,
      },
      error:{
        duration:5000,
      },
      style:{
        fontSize:"16px",
        maxWidth:"500px",
        padding:"16px 24px",
        background:"#03090c",
        color:"#fff",


      },
    }}
    />

</>
   
    
  

)
