
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function Hero() {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1 // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2 // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 3 // optional, default to 1.
    }
  };
 
  return (
    <div className="m-4 relative -z-10 ">
       
    <Carousel responsive={responsive}
    infinite={true}
    autoPlay={true}
    autoPlaySpeed={3000}
    removeArrowOnDeviceType={["tablet", "mobile"]}
      

 
    >
    <div className='mx-2'> <img src="https://res.cloudinary.com/dib1opete/image/upload/v1744584551/hero-left_y5ijta.jpg" className="rounded-xl"/></div>
    <div className='mx-2'><img src="https://res.cloudinary.com/dib1opete/image/upload/v1744584552/Welcome_aa0tiq.jpg" className="rounded-xl"/></div>
    <div className='mx-2'><img src="https://res.cloudinary.com/dib1opete/image/upload/v1744584551/tecno_lzeezj.jpg" className="rounded-xl"/></div>
    <div className='mx-2'><img src="https://res.cloudinary.com/dib1opete/image/upload/v1746005616/Camisa_Casual_Masculina_Com_Patchwork_Impresso_Tecido_Em_Xadrez_jmz2fv.jpg" className="rounded-xl"/></div>
    <div className='mx-2'><img src="https://res.cloudinary.com/dib1opete/image/upload/v1744585040/ESN_DESIGNER_WHEY_908G_F%C3%9CR_NUR_29_99_Hey_Protein-Fans_Wir_haben_einen_Knaller-Deal_f%C3%BCr_euch__ESN_Designer_Whey_908g_Deutschlands_beliebtestes_Whey_Protein_jetzt_f%C3%BCr_nur_29_99_statt_39_99_Das_bed_jgytfo.jpg" className="rounded-xl"/></div>
    <div className='mx-2'><img src="https://res.cloudinary.com/dib1opete/image/upload/v1744585258/Linda_mulher_loira_vestindo_roupas_casuais_e_sorrindo_para_a_c%C3%A2mera_segurando_um_computador___imagem_Premium_gerada_com_IA_wef3u3.jpg" className="rounded-xl"/></div>
    <div className='mx-2'><img src="https://res.cloudinary.com/dib1opete/image/upload/v1744971395/Air_jordan_shoes_s5nftr.jpg" className="rounded-xl"/></div>

    

  </Carousel>
      
    </div>
  )
}

export default Hero