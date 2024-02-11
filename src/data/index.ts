import cupcake1 from "../assets/images/cupcake.png";
import cupcake2 from "../assets/images/cupcake Visneli.png";
import cupcake3 from "../assets/images/brovni.png";
import cupcake4 from "../assets/images/caske.png";
import cupcake5 from "../assets/images/cupcake vanilli.png";
import cupcake6 from "../assets/images/cupcakebrovni.png";
import ekler1 from "../assets/images/ekler1.jpg"
import ekler2 from "../assets/images/ekler2.jpg"
import ekler3 from "../assets/images/ekler3.avif"
import ekler4 from "../assets/images/ekler4.avif"
import ekler5 from "../assets/images/ekler5.avif"
import makaron1 from "../assets/images/makaron1.jpg"
import makaron2 from "../assets/images/makaron2.jpg"
import makaron3 from "../assets/images/makaron3.jpg"
import makaron4 from "../assets/images/makaron4.jpg"
import makaron5 from "../assets/images/makaron5.jpg"
import muffin1 from "../assets/images/muffin1.jpg"
import muffin2 from "../assets/images/muffin2.jpg"
import muffin3 from "../assets/images/muffin3.jpg"
import donut1 from "../assets/images/donut1.jpg"
import donut2 from "../assets/images/donut2.jpg"
import donut3 from "../assets/images/donut3.jpg"
import donut4 from "../assets/images/donut4.jpg"





export interface productDataType{
    id:number,
    title:string,
    price:number,
    description:string,
    category:string,
    image:string
    date?:string,
    quantity?: number;
}


export const productData:productDataType[] =[
    {id:1,title:"Cupcake(vanilli)",price:3,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"cupcake",image:cupcake1},
    {id:2,title:"Cupcake(vişnəli)",price:4,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"cupcake",image:cupcake2},
    {id:3,date:"new",title:"Cupcake(bizetli)",price:6,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"cupcake",image:cupcake3},
    {id:4,title:"Cupcake(karamelli)",price:2,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"cupcake",image:cupcake4},
    {id:5,title:"Cupcake(şokoladlı)",price:6,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"cupcake",image:cupcake5},
    {id:6,title:"Cupcake(kremli)",price:7,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"cupcake",image:cupcake6},
    
    {id:7,title:"Ekler(klassik)",price:3,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"ekler",image:ekler1},
    {id:8,title:"Ekler(şokoladlı)",price:5,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"ekler",image:ekler2},
    {id:9,title:"Ekler(vanilli)",price:3,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"ekler",image:ekler3},
    {id:10,date:"new",title:"Ekler(kremli)",price:8,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"ekler",image:ekler4},
    {id:11,title:"Ekler(fıstıqlı)",price:9,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"ekler",image:ekler5},
   
    {id:12,title:"Makaron(üzümlü)",price:3,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"makaron",image:makaron1},
    {id:13,title:"Makaron(şokoladlı)",price:4,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"makaron",image:makaron2},
    {id:14,title:"Makaron(limonlu)",price:5,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"makaron",image:makaron3},
    {id:15,title:"Makaron(vanilli)",price:7,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"makaron",image:makaron4},
    {id:16,title:"Makaron(kremli)",price:9,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"makaron",image:makaron5},

    {id:17,title:"Maffin(kremli)",price:3,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"maffin",image:muffin1},
    {id:18,date:"new",title:"Maffin(şokoladlı)",price:2,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"maffin",image:muffin2},
    {id:19,title:"Maffin(vanilli)",price:2,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"maffin",image:muffin3},

    {id:20,title:"Ponçik(meyvəli)",price:3,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"donut",image:donut1},
    {id:21,title:"Ponçik(kremli)",price:5,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"donut",image:donut2},
    {id:22,title:"Ponçik(vanilli)",price:4,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"donut",image:donut3},
    {id:23,title:"Ponçik(şokoladlı)",price:2,description:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. "
    ,category:"donut",image:donut4},
    


]




