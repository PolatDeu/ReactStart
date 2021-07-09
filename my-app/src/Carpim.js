import React, { useState } from "react";


let num1;
let num2;
const Carpim =()=>{
      
    const [num, setNum] = useState('0'); //iki elemanli arry.. ilki parantez icindeki sayi ikincisi fonksiyon.. sayiyi degistirecek fonksiyon
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
        console.log(num1, typeof num1);
        // document.getElementById(gosterge).value
        setNum('')
        // setNum('Ikinci Sayiyi Giriniz!');
        // console.log('ilk sayi',num1);
        
        // console.log('yeni sayi',num)
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
        
            let sonuc=parseInt(num1)*parseInt(num2);
            console.log(typeof num2);
            setNum(sonuc);
        
    }
    
    return(
        <div>
            <h1>Carpim</h1>
            <h1 id="gosterge">{num}</h1>
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
                return num+'3'})}>3</button><br/>
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
                return num+'6'})}>6</button><br/>
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
                return num+'9'})}>9</button><br/>
            <button onClick={()=>setNum(()=>num+'0')}>0</button>
            <button onClick={()=>carp()}>*</button>
            <button onClick={()=>esit()}>=</button>
            <h3></h3>
        </div>
    )
}

export default Carpim;