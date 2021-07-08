import React, { useState } from "react";

const Carpim =()=>{
    
    const [num, setNum] = useState('0'); //iki elemanli arry.. ilki parantez icindeki sayi ikincisi fonksiyon.. sayiyi degistirecek fonksiyon
    // if (num!='Sayi Giriniz!'){
    //     console.log(num);
    //     let n=num.toString();
    //     console.log(n);
    //     console.log(typeof(n));
    
    // };
    const num1=num;
    function carp(){
        // if (num==0){
        //     num=('')
        // }
        // console.log('nummer1 is',num1);
        setNum('Ikinci Sayiyi Giriniz!');
        // num=('')
        // console.log('ilk sayi',num1);
        
        // console.log('yeni sayi',num)
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
            <button onClick={()=>setNum(()=>num+'1')}>1</button> 
            {/* num=0 ? setNum=(''): */}
            <button onClick={()=>setNum(()=>num+'2')}>2</button>
            <button onClick={()=>setNum(()=>num+'3')}>3</button><br/>
            <button onClick={()=>setNum(()=>num+'4')}>4</button>
            <button onClick={()=>setNum(()=>num+'5')}>5</button>
            <button onClick={()=>setNum(()=>num+'6')}>6</button><br/>
            <button onClick={()=>setNum(()=>num+'7')}>7</button>
            <button onClick={()=>setNum(()=>num+'8')}>8</button>
            <button onClick={()=>setNum(()=>num+'9')}>9</button><br/>
            <button onClick={()=>setNum(()=>num+'0')}>0</button>
            <button onClick={()=>carp()}>*</button>
            <button onClick={()=>esit()}>=</button>
            <h3></h3>
        </div>
    )
}

export default Carpim;