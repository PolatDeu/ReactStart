import React, { useState } from "react";

const Carpim =()=>{
    
    const [num, setNum] = useState(''); //iki elemanli arry.. ilki parantez icindeki sayi ikincisi fonksiyon.. sayiyi degistirecek fonksiyon
    // if (num!='Sayi Giriniz!'){
    //     console.log(num);
    //     let n=num.toString();
    //     console.log(n);
    //     console.log(typeof(n));
    
    // };
    const num1=num;
    function carp(){
        
        console.log('nummer1 is',num1);
        setNum('Ikinci Sayiyi Giriniz!');
        console.log('ilk sayi',num1);
        
        console.log('yeni sayi',num)
    }
    function esit(){
        console.log('eski sayi',num1)
        let num2=num1*num;
        console.log('toplam is',num2);
        setNum(num2);
    }
    
    return(
        <div>
            <h1>Carpim</h1>
            <h1>{num}</h1>
            <button onClick={()=>setNum(1)}>1</button>
            <button onClick={()=>setNum(2)}>2</button>
            <button onClick={()=>setNum(3)}>3</button><br/>
            <button onClick={()=>setNum(4)}>4</button>
            <button onClick={()=>setNum(5)}>5</button>
            <button onClick={()=>setNum(6)}>6</button><br/>
            <button onClick={()=>setNum(7)}>7</button>
            <button onClick={()=>setNum(8)}>8</button>
            <button onClick={()=>setNum(9)}>9</button><br/>
            <button onClick={()=>setNum(0)}>0</button>
            <button onClick={()=>carp()}>*</button>
            <button onClick={()=>esit()}>=</button>
            <h3></h3>
        </div>
    )
}

export default Carpim;