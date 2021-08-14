import React from "react";

class ClassComponent extends React.Component {
    constructor(props){
        super(props);
        this.state={surname:'Yilmazt'}
    }
    render(){
        const style = {
            color: 'black',
            backgroundcolor: 'blue',
            padding:15,
            fontSize: 20
        }
        return(
            <div className="wrapper">
                <h1>
                wayASDF
                </h1>
                <p>Class Component</p>
                <p>Mein Name is hk {this.props.name} {this.state.surname}</p>
                <iframe src="https://www.samanyoluhaber.com/"></iframe>
                <a href="https://www.ebay.de/itm/353257495964?hash=item523fc99d9c:g:dMMAAOSwNf5gz7tK"></a>
                <a href="https://www.ebay.de/itm/353257495964?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20170511121231%26meid%3D49eda3b96b0d4e9cac5003e794482fef%26pid%3D100675%26rk%3D2%26rkt%3D15%26sd%3D254764200259%26itm%3D353257495964%26pmt%3D1%26noa%3D1%26pg%3D2380057&_trksid=p2380057.c100675.m4236&_trkparms=pageci%3A8d804a3c-fae2-11eb-bcfa-763374bc042b%7Cparentrq%3A36e60a6f17b0aaf5db8a3673ffe677cc%7Ciid%3A1" target="_blank" >Skoda</a>
                <a href="https://www.ebay.de/itm/353257495964?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20170511121231%26meid%3D49eda3b96b0d4e9cac5003e794482fef%26pid%3D100675%26rk%3D2%26rkt%3D15%26sd%3D254764200259%26itm%3D353257495964%26pmt%3D1%26noa%3D1%26pg%3D2380057&_trksid=p2380057.c100675.m4236&_trkparms=pageci%3A8d804a3c-fae2-11eb-bcfa-763374bc042b%7Cparentrq%3A36e60a6f17b0aaf5db8a3673ffe677cc%7Ciid%3A1" target="_parent" >Skoda2</a>
                <a style={style} href="https://www.ebay.de/itm/353257495964?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20170511121231%26meid%3D49eda3b96b0d4e9cac5003e794482fef%26pid%3D100675%26rk%3D2%26rkt%3D15%26sd%3D254764200259%26itm%3D353257495964%26pmt%3D1%26noa%3D1%26pg%3D2380057&_trksid=p2380057.c100675.m4236&_trkparms=pageci%3A8d804a3c-fae2-11eb-bcfa-763374bc042b%7Cparentrq%3A36e60a6f17b0aaf5db8a3673ffe677cc%7Ciid%3A1" target="_self" >Skoda3</a>
                <a href="https://www.ebay.de/itm/353257495964?_trkparms=aid%3D111001%26algo%3DREC.SEED%26ao%3D1%26asc%3D20170511121231%26meid%3D49eda3b96b0d4e9cac5003e794482fef%26pid%3D100675%26rk%3D2%26rkt%3D15%26sd%3D254764200259%26itm%3D353257495964%26pmt%3D1%26noa%3D1%26pg%3D2380057&_trksid=p2380057.c100675.m4236&_trkparms=pageci%3A8d804a3c-fae2-11eb-bcfa-763374bc042b%7Cparentrq%3A36e60a6f17b0aaf5db8a3673ffe677cc%7Ciid%3A1" target="_top" >Skoda4</a>
                
            </div>
        )
    }
}
export default ClassComponent;