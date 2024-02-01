
import { useState} from 'react';
import ReactDOM from 'react-dom';

 let list_add=Array()
const Tab_shop = (url: string, name: string, price: string) => {
    const  tab = document.querySelector(".shop_tab") ;
    const  fullshop=document.querySelector(".shopnum");
    const  shop_number=Number(document.querySelector(".shopnum")?.innerHTML);
    const montant = document.querySelector(".cal_price");
    let pr=Number(montant?.innerHTML);

    let newmont: number | undefined;
    const newmontStr = price.slice(1);
    newmont = Number(newmontStr);
    pr+=newmont;
    if(montant)montant.innerHTML=`${pr}`
    const Row = () => {
      /*========minus===========*/
        const Add=(nm:string)=>{
            const element = document.getElementById(nm);
            if (element && montant) {
                const f=Number(element.innerText)+1 ;
                pr+=newmont;
                montant.innerHTML=`${pr}`
                element.innerText=`${f}`;
            }}
      /*========minus===========*/
            const Minus=(nm:string)=>{
                const element = document.getElementById(nm);
                if (element &&montant) {
                    const f=Number(element.innerText)-1 ;
                    pr-=newmont;
                    montant.innerHTML=`${pr}`;
                    if (f>0) element.innerText=`${f}`; 
                    if (f==0) Remove(nm)  ;
                    
                }}
       /*=========remove items==============*/
       const Remove = (nm: string) => {
            const elm = Number(document.getElementById(nm)?.innerHTML);
            const element = document.getElementById(nm + "s");
            if(element && element.parentNode )  element.parentNode.removeChild(element);
            list_add=list_add.filter(elm =>elm !==nm);
            //pr-=newmont*(elm);
           if(montant) montant.innerHTML=`${Number(montant.innerHTML)-(newmont*elm)}`;
           if(fullshop) fullshop.innerHTML=`${shop_number}`
        }
  
      /*====================return component===============*/
         if  (list_add.includes(name)) {
            const element = document.getElementById(name);
            if (element) {
                const f=Number(element.innerText)+1 ;
                element.innerText=`${f}`;
            }
            return null;
         }
        else {
        list_add.push(name);
        if(fullshop) fullshop.innerHTML=`${shop_number+1}`
        return(
            <tr className='row' id={name+"s"}>
            <td className='colum'><img className="col_img" src={url} alt="img" /></td>
            <td className='colum'>{name}</td>
            <td className='colum'><button onClick={()=>Add(name)} className='add_btn'>+</button></td>
            <td className="colum" id={name} >1</td>
            <td className='colum '><button  onClick={()=>Minus(name)} className='add_btn'>-</button></td>
            <td className='colum'>{price}</td>
            <td className='colum'><button onClick={()=>Remove(name)} className='remove_btn'>x</button></td>
        </tr>
           )
      }
    };

    if (tab) {
        const rowElement = <Row />;
        const tableBody = document.createElement("tbody");
        ReactDOM.render(rowElement, tableBody, () => {
            if (tab) {
                tab.appendChild(tableBody);
            }
        });
    }

}

export default Tab_shop;
