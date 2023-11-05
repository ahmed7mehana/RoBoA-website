// assets
import homePageImg from "../assets/home-page.svg";
import homePageIllustation from "../assets/hero-illustration.svg";
import downloadIcon from "../assets/download-btn-icon.svg";

// components
import { Button } from "../components";

// framer-motion
import { motion } from "framer-motion";

// utils
import { transition } from "../utils/transition";
import { fadeIn, scale } from "../utils/variants";
import { Link } from "react-scroll";
import { useState } from "react";
import { collection, addDoc } from "firebase/firestore"; 
import { db } from "../firebaseConfig";

const Admin = () => {
//boycott
const [boycottT, setboycottT] =useState('')
const [boycottI, setboycottI] =useState('')

//replace
const [boycottT1, setboycottT1] =useState('')
const [boycottI1, setboycottI1] =useState('')
const [boycottT2, setboycottT2] =useState('')
const [boycottI2, setboycottI2] =useState('')
const [boycottT3, setboycottT3] =useState('')
const [boycottI3, setboycottI3] =useState('')
const [boycottT4, setboycottT4] =useState('')
const [boycottI4, setboycottI4] =useState('')



//companys--------------
    //title
const [companyT, setcompanyT] =useState('')
    //image
const [companyI, setcompanyI] =useState('')
   //reson-->why we will boycott this 
const [companyR, setcompanyR] =useState('')


const Company={
  title:companyT,
  image:companyI,
  Reson:companyR
}

const boycott ={
    title:boycottT,
    image:boycottI
}
const alternate=[
    {
        title:boycottT1,
        image:boycottI1
    },
    {
        title:boycottT2,
        image:boycottI2
    },
    {
        title:boycottT3,
        image:boycottI3
    },
    {
        title:boycottT4,
        image:boycottI4
    },
]


//Add (producs) to firebase
const productRef = collection(db,"Product")
const handlepress = async()=>{
   await addDoc(productRef,{boycott,alternate})
   setboycottT("")
   setboycottI("")
   setboycottT1("")
   setboycottI1("")
   setboycottT2("")
   setboycottI2("")
   setboycottT3("")
   setboycottI3("")
   setboycottT4("")
   setboycottI4("")
 }
 const CompanyRef = collection(db,"Company")
const handlepressComp = async()=>{
   await addDoc(CompanyRef,{Company})
setcompanyI("")
setcompanyR("")
setcompanyT("")
 }


 const [showProd, setShowProd] =useState(false)
 const [showComp, setShowComp] =useState(false)

 const [valid, setValid] =useState('')
 const [showvalid, setShowValid] =useState(true)

 const handleprod =()=>{
  setShowProd(true)
  setShowComp(false)
  setShowValid(false)
 }
const handlecomp =()=>{
  setShowProd(false)
  setShowComp(true)
  setShowValid(false)
 }



const pass =process.env.password
console.log(pass)
return (
    <>
    <div
      id="home"
      className="min-h-screen flex items-center justify-center relative flex flex-col"
      style={{
        background: `url(${homePageImg})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >

{showvalid?(
  <motion.div
  variants={fadeIn("up")}
  transition={transition()}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  className="my-12 m-auto flex flex-col sm:flex-row items-center gap-6 justify-center "
>
  <input type="text" value={valid} onChange={(e)=>setValid(e.currentTarget.value)} placeholder="what is the best enmie ?" className=" text-center  p-2 rounded-lg"/>

</motion.div>
):""}



   {valid === "ahmed-1516-2000"?(
  <motion.div
  variants={fadeIn("up")}
  transition={transition()}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false }}
  className="my-12 m-auto flex flex-col sm:flex-row items-center gap-6 justify-center "
>

  <Button  onClick={()=>{handleprod()}}>Add Product</Button>

  <Button  onClick={()=>{handlecomp()}}>Add company</Button>

</motion.div>
   ):""}




{showProd?(
 <>
  <div
    className=" flex flex-col 
      xl:flex-row xl:justify-between items-center  gap-12 w-full m-auto"
  >
    <div className="w-full  ">
          <div className="flex flex-col justify-center m-auto flex-wrap ">
            <div className="flex flex-col ">
                <label className="text-[20px] font-bold text-white text-center">المنتج تحت مقاطعه</label>
            <input value={boycottT} onChange={(e)=>setboycottT(e.currentTarget.value)} placeholder=" اسم منتج المقاطعه" type="text" className="p-2  text-center flex-1 rounded-lg mb-2"/>
            <input value={boycottI} onChange={(e)=>setboycottI(e.currentTarget.value)} placeholder="(link) صوره له" type="text" className="p-2 flex-1 text-center  rounded-lg mb-2"/>
            </div>
            <div className="flex flex-col">
                <label className="text-[20px] font-bold text-white text-center mt-5 mb-5"> المنتجات البديله </label>
                <div  className="flex flex-row flex-wrap justify-center ">
            <div className="flex flex-col m-2 justify-center">
            <label className="text-[18px] font-bold text-white text-center "> 1</label>
            <input value={boycottT1} onChange={(e)=>setboycottT1(e.currentTarget.value)}  placeholder=" اسم منتج البديل" type="text" className="text-center p-2 rounded-lg mb-2"/>
            <input value={boycottI1} onChange={(e)=>setboycottI1(e.currentTarget.value)}  placeholder="(link) صوره له" type="text" className="p-2 rounded-lg text-center mb-2"/>
            </div>
            <div className="flex flex-col m-2 justify-center">
            <label className="text-[18px] font-bold text-white text-center "> 2</label>
            <input value={boycottT2} onChange={(e)=>setboycottT2(e.currentTarget.value)}  placeholder=" اسم منتج البديل" type="text" className="text-center p-2 rounded-lg mb-2"/>
            <input value={boycottI2} onChange={(e)=>setboycottI2(e.currentTarget.value)}  placeholder="(link) صوره له" type="text" className="p-2 rounded-lg text-center mb-2"/>
            </div>
            <div className="flex flex-col m-2 justify-center">
            <label className="text-[18px] font-bold text-white text-center "> 3</label>
            <input value={boycottT3} onChange={(e)=>setboycottT3(e.currentTarget.value)}  placeholder=" اسم منتج البديل" type="text" className="text-center p-2 rounded-lg mb-2"/>
            <input value={boycottI3} onChange={(e)=>setboycottI3(e.currentTarget.value)}  placeholder="(link) صوره له" type="text" className="p-2 rounded-lg text-center mb-2"/>
            </div>
            <div className="flex flex-col m-2 justify-center">
            <label className="text-[18px] font-bold text-white text-center "> 4</label>
            <input value={boycottT4} onChange={(e)=>setboycottT4(e.currentTarget.value)}  placeholder=" اسم منتج البديل" type="text" className="text-center p-2 rounded-lg mb-2"/>
            <input value={boycottI4} onChange={(e)=>setboycottI4(e.currentTarget.value)}  placeholder="(link) صوره له" type="text" className="p-2 rounded-lg text-center mb-2"/>
            </div>
                </div>

            </div>
          </div>


      <motion.div
        variants={fadeIn("up")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="my-12 m-auto flex flex-col sm:flex-row items-center gap-6 justify-center "
      >
<Link to='projects' smooth >
        <Button  onClick={()=>{handlepress()}}>Done</Button>
</Link>
      </motion.div>
    </div>

    <motion.img
      variants={scale()}
      transition={transition()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      src={homePageIllustation}
      alt=""
      className="max-w-full sm:max-w-[401px]"
    />
  </div>
  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-divider" />
 </>
):""}
{showComp?(
  <>
    <div
    className=" flex flex-col 
      xl:flex-row xl:justify-between items-center  gap-12 w-full m-auto"
  >
    <div className="w-full  ">
          <div className="flex flex-col justify-center m-auto flex-wrap ">
            <div className="flex flex-col ">
                <label className="text-[20px] font-bold text-white text-center">  شركات للمقاطعه افلام وغيرو   </label>
            <input value={companyT} onChange={(e)=>setcompanyT(e.currentTarget.value)} placeholder=" اسم الشركه ؟؟ دييزني , شاهد  " type="text" className="p-2  text-center flex-1 rounded-lg mb-2"/>
            <input value={companyI} onChange={(e)=>setcompanyI(e.currentTarget.value)} placeholder=" اللوجو بتاع الشركه او صوره له عباره عن لينك (نسخ عنوان الصوره) " type="text" className="p-2 flex-1 text-center  rounded-lg mb-2"/>
            <input value={companyR} onChange={(e)=>setcompanyR(e.currentTarget.value)} placeholder=" سبب مقطاعه الشركه دي " type="text" className="p-2 flex-1 text-center  rounded-lg mb-2"/>
            </div>
  
          </div>


      <motion.div
        variants={fadeIn("up")}
        transition={transition()}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="my-12 m-auto flex flex-col sm:flex-row items-center gap-6 justify-center "
      >
<Link to='projects' smooth >
        <Button  onClick={()=>{handlepressComp()}}>Done</Button>
</Link>
      </motion.div>
    </div>

    <motion.img
      variants={scale()}
      transition={transition()}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false }}
      src={homePageIllustation}
      alt=""
      className="max-w-full sm:max-w-[401px]"
    />
  </div>
  </>
):""}


    </div>

    </>
  );
};

export default Admin;
