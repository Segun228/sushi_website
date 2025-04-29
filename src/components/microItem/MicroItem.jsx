import "./microItem.css"
const MicroItem = ({item}) => {
    return ( 
    <>
        <div className="microItem__wrapper">
            <img src={item.image} alt="small image of susha" className="microItemImage" />
            <div className="microItem__infoBlock">
                <div className="microItemTitle">{item.title}</div>
                <div className="microItemMacros">{item.macros}</div>
                <div className="microItem__priceBlock">
                    <div className="microItem__buttonBlock">
                        <div className="micro_button increment"><span className="inner_paragraf">+</span></div>
                        <div className="micro_button microItem__quantityBlock"><span className="inner_paragraf inner_paragraf_scaled">2</span></div>
                        <div className="micro_button decrement"><span className="inner_paragraf">-</span></div>
                    </div>
                    <div className="microItem__Price">{item.price}₽</div>
                </div>
            </div>
        </div>
    </>);
}
export default MicroItem;