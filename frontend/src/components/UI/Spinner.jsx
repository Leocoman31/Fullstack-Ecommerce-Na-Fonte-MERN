

function Spinner() {
  return (
    <div className="bg-gray-50 fixed top-0 left-0 w-[100%] h-[100vh]
 z-[1000] transition-all duration-[0.5]">
      <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]  px-[3.2rem] py-[4rem]
    transition-all duration-1000">


      <div className= "border-10 border-gray-50 border-t-sky-500 rounded-[50%] w-[200px] h-[200px] animate-spin ">
        

      </div>



      </div>
    </div>
  )
}

export default Spinner