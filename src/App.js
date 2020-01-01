import React from 'react';

function Food(props) {
  return (
    <div>
      <h1>I like {props.name}</h1>
      <img src={props.img} alt={props.name} />
    </div>
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "https://w.namu.la/s/0a449a69efd3d28ffad5d87ee192b19d7b447ad3d9c110d92932818e028e931e12231c581d622a3188673d9d807a7ed79046ef144fe9c6ab900aa4e698a944d42eec64c823755a11c8e415fa0ce1c8508da332d2dd46b28e2e57551e112c388c6f02b234bcea05fbcfb54df7ae1adca4"
  },
  {
    id: 2,
    name: "bibimbap",
    image: "https://w.namu.la/s/2da09c13310e9cc9f352dcf99005a6c97f54bc7827723e5c3cb47e739f045251e6df742529ad42ec2c7c2456fea4c55508759d8859a3d038eafb99a87794037c724f1719ace370e1c3a2bbe6986915b9f24ba05e4c7a054a6244a9cf223a084da66782b9568369b68f21a414424e9fe5"
  },
  {
    id: 3,
    name: "samgiopsal",
    image: "https://w.namu.la/s/cb69adb56d05e243ad090736320dae4a32711295e3c83c6311498f7397008fb5e5f810911f02b5f2611e5399424eb672d0366f47453943b318420caf00e3617d3026ebf061a866de482b5fe318a499cbf7b383299b9d1bc411388fd7fdac2e5b15d4ae4fa08d2b3b6ff98e6a5c6b8241"
  },
  {
    id: 4,
    name: "donkasu",
    image: "https://w.namu.la/s/de004f02080e8355a89a6f62cc1698f812b0f4cf8abae0ff13e0c05d6d022640f12c355196ead9d99139e118751b38093123537517daaa72ffba1ff6f0ffd404400b75a8634ddd275f62b62a4f8c7adc33d0d0ebc06367c828183466455e8b03cb5d21c29e5cc04d9c509fdf5bd64e1b"
  }
];

// function RenderFood(dish) {
//   return <Food key={dish.id} name={dish.name} img={dish.image} />
//}

function App() {
  return (
    <div>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} img={dish.image} />
      ))}
    </div>
  );
}

export default App;