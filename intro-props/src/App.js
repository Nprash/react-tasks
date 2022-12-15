import './App.css';
// import FirstComponent from "./components/FirstComponent"
import FoodItem from "./components/FoodItem";

let foodItems = [
  { name: "veg burger", price: 150, ratings: 4.4, img: "https://source.unsplash.com/1800x600/?burger", descr:"Signature veg burger with crispy patties, veggies & a tangy sauce" },
  { name: "veg pizza", price: 100, ratings: 4.1, img: "https://source.unsplash.com/1800x600/?pizza", descr:"You just can't say no to this loaded pizza that is topped with cheese and veg Manchurian balls." },
  { name: "Dosa", price: 90, ratings: 4.4, img: "https://source.unsplash.com/1800x600/?Dosa", descr:"Tawa- toasted, crispy and delicious dosa, folded in with masala & stuffed with mashed potatoes.Served with chutney and sambar." },
  { name: "Upma", price: 150, ratings: 3.9, img: "https://source.unsplash.com/1800x600/?Upma",descr:"Upma with chutney and batani curry." },
  { name: "Idly", price: 50, ratings: 4.2, img: "https://source.unsplash.com/1800x600/?breakfast",descr:"Traditional breakfast made out of steamed batter consisting of lentils and rice served with chutney + Sambar" }

];
function App() {
  return (
    <div >
      <h1 className="App"> Welcome to react master class</h1>
      <p className="subheading">click the card and watch it in console for the values</p>
      {/* <FirstComponent title = "CSS Master class" />
      <FirstComponent title="java script master class" /> */}
      <div className="container">
        <div className="sub-container">
          <span>used props without mapping its values or the array of objects/ giving individual values</span>
          <FoodItem name={foodItems[0].name} price={foodItems[0].price} ratings={foodItems[0].ratings} image={foodItems[0].img} description = {foodItems[0].descr} />
          <FoodItem name={foodItems[1].name} price={foodItems[1].price} ratings={foodItems[1].ratings} image={foodItems[1].img} description = {foodItems[1].descr}></FoodItem>
          <FoodItem name={foodItems[2].name} price={foodItems[2].price} ratings={foodItems[2].ratings} image={foodItems[2].img} description = {foodItems[2].descr}></FoodItem>
          <FoodItem name={foodItems[2].name} price={foodItems[2].price} ratings={foodItems[2].ratings} image={foodItems[2].img} description = {foodItems[2].descr}></FoodItem>
        </div>
        
        {
          foodItems.map((item) => {
            return (
              <FoodItem name={item.name} price={item.price} ratings={item.ratings} image={item.img} description={item.descr}/>
            )
          })
        }

 
      </div>

    </div>
  );
}

export default App;
