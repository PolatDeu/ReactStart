import React, { useState } from "react";


let num1;
let num2;
let num3;
let numr;
let num7;
let eksisonuc;
let toplam;
let num8;
let num9;
let bolumsonucu;
const Carpim =()=>{
      
    const [num, setNum] = useState('0'); //iki elemanli arry.. ilki parantez icindeki sayi ikincisi fonksiyon.. sayiyi degistirecek fonksiyon
    const [numr, setNumr] = useState('0'); //iki elemanli arry.. ilki parantez icindeki sayi ikincisi fonksiyon.. sayiyi degistirecek fonksiyon
    // if (num!='Sayi Giriniz!'){
    //     console.log(num);
    //     let n=num.toString();
    //     console.log(n);
    //     console.log(typeof(n));
    
    // };
    
    function carp(){
        // if (num==0){
        //     num=('')
        // }
        // console.log('nummer1 is',num1);
        // setNum('Ikinci Sayiyi Giriniz!');
        // num=('')
        num1= num;
        console.log('numaram',num1)
        // document.getElementById(gosterge).value
        
        num8='';
        // num3=num1*num;
        // console.log('yeni numaram',num);
        // let sonuc1=num1*num;
        // console.log(sonuc1);
        // console.log(num1, typeof num1);
        setNum('0');
        num7='';
        setNumr(num1+'*');
        // setNum('Ikinci Sayiyi Giriniz!');
        // console.log('ilk sayi',num1);
        
        // console.log('yeni sayi',num)
    }
    function eksik(){
        num7=num;
        num8='';
        num9='';
        setNum('0')
     }
    function toplama(){
        num8=num;
        num7='';
        num9='';
        setNum('0')
     }
    function bolum(){
        num9=num;
        num7='';
        num8='';
        setNum('0')
     }
    function esit(){
        console.log(typeof num1, num1);
        
        // console.log('eski sayi',num1)
        // num2=num1*num;
        // console.log('toplam is',num2);
        // setNum(num2);
        num2=num;
        console.log(typeof num2, num2);
        console.log(num2);
        if(num7!=''){
            eksisonuc=parseInt(num7)-parseInt(num2);
            setNum(eksisonuc);
            console.log(eksisonuc)
        }else if (num8!='') {
            toplam=parseInt(num8)+parseInt(num2);
            setNum(toplam)

        }else if (num9!=''){
            bolumsonucu=parseInt(num9)/parseInt(num2);
            setNum(bolumsonucu)
        } else{
            console.log('sonucumuz',eksisonuc);
            let sonuc=parseInt(num1)*parseInt(num2);
            console.log(typeof num2);
            setNum(sonuc);
        }
    }
    
    return(
        <div>
            <h1>Carpim</h1>
            <h1 id="gosterge">{num}</h1>
            {/* <h1 id="gosterg">{numr}</h1> */}
            <button onClick={()=>setNum(0)}>C</button> 
            <button onClick={()=>setNum(()=>{
                if((num=='') || (num=='(') || (num=='0')){
                    return '(';
                }else 
                return num+')'})}>()</button>
                <button onClick={()=>setNum('')}>%</button>
                <button onClick={()=>setNum('')}>/</button><br/>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'1';
                }else 
                return num+'1'})}>1</button> 
            {/* num=0 ? setNum=(''): */}
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'2';
                }else 
                return num+'2'})}>2</button>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'3';
                }else 
                return num+'3'})}>3</button>
                <button onClick={()=>carp()}>*</button><br/>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'4';
                }else 
                return num+'4'})}>4</button>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'5';
                }else 
                return num+'5'})}>5</button>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'6';
                }else 
                return num+'6'})}>6</button>
                <button onClick={()=>eksik()}>-</button><br/>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'7';
                }else 
                return num+'7'})}>7</button>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'8';
                }else 
                return num+'8'})}>8</button>
            <button onClick={()=>setNum(()=>{
                if(num==0){
                    return ''+'9';
                }else 
                return num+'9'})}>9</button>
                <button onClick={()=>toplama()}>+</button><br/>
            <button onClick={()=>setNum(()=>num+'0')}>0</button>
            <button onClick={()=>carp()}>*</button>
            <button onClick={()=>esit()}>=</button>
            <button onClick={()=>bolum()}>/</button>
            <h3></h3>
        </div>
    )
}

export default Carpim;