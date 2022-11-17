import styles from './fooditem.module.css';
function FoodItem(props) {
    function foodOrderHandler(){
        if(props.price >=150){
            console.log('Your Order', props.name, 'placed successfully', "\n", "plz pay", props.price, "Rupees")
        }else{
            console.log('Your Order', props.name, 'placed successfully!',"\n","order price is :", props.price, "Rupees", "\n", "40 Rupees minimum delivery charge is applicable!", "plz pay", props.price + 40, "Rupees")
        }
    }
    return (
        <div className={styles.foodcard} onClick={foodOrderHandler}>
            <div className={styles.foodcardhead}>
                <img src={props.image} alt="veg burger" className={styles.foodcardimg} />
                <p className={props.ratings >=4.2 ? "must-try" :"d-none" }>Must Try</p>
            </div>
            <div className="name-rating">
            <h4>{props.name}</h4>
            <p>⭐{props.ratings}</p>
            </div>
            <p>{props.description}</p>
            <p>Rs. <span>{props.price}</span></p>
        </div>
    )
}

export default FoodItem;