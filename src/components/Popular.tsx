
import { cards_list } from "./children/ProductLists";
import { star_fill,star_line,heart,like,dislike } from "../assets/Shareimg";
import Tab_shop from "./children/Tab_shop";
const Popular = () => {

  
  const Line_stars = () => (
    <img src={star_line} alt="star" />
  );
  const Fill_stars = () => (
    <img src={star_fill} alt="star" />
  );
  const create_list = (n: number): string[] => {
    let list = new Array<string>();

    for (let i = 0; i < n; i++) {
      list.push("fl");
    }

    for (let i = 0; i < 5 - n; i++) {
      list.push("ln");
    }

    return list;
  };
  
     
    
      
  return (
    <section className='section mt-8'>
        <span className="main_pre_title">our products</span>
        <span className="main_title">POPULAR PRODUCTS</span>
        <div className="section_block">
            {cards_list.map((card,index)=>(
                <div className="pop_card group" key={index}>
                    <div className="like group-hover:translate-x-16 ">
                      <button className="like_btn"><img className="w-8" src={like} alt="like" /></button>
                      <button className="dislike_btn"><img className="w-8" src={dislike} alt="dislike" /></button>
                    </div>
                    <button className="heart_btn group-hover:-translate-x-16"><img src={heart} alt="heart" /></button>                    <img className="h-32" src={card.IMG} alt={card.NAME} />
                    <span className="text-lg">{card.NAME}</span>
                    {/*===========rate==========*/}
                    <div className="rate">
                      {create_list(card.RATE).map((elm, index) => {
                        if (elm === "fl") return <Fill_stars key={index} />;
                        else return <Line_stars key={index} />;
                      })}
                    </div>
                    <div className="flexcenter gap-5">
                        <span className="text-xl text-green-500 font-semibold">{card.PRICE}</span>
                        <button className="card_btn" onClick={()=>Tab_shop(card.IMG,card.NAME,card.PRICE)}>add to cart</button>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Popular