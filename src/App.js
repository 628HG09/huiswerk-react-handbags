import React from 'react';
import './App.css';
import Button from './components/Button'
import Product from './components/Product';
import Tile from "./components/Tile";

import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"

import brand1 from "./assets/brand.png"
import story from "./assets/our_story.png"

function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    isDisabled={false}
                    clickHandler={() => console.log("to the collection cons")}
                >
                    to the collection </Button>

                <Button
                    isDisabled={false}
                    clickHandler={() => console.log("shop all bags cons")}
                > shop all bags </Button>

                <Button
                    isDisabled={true}
                    clickHandler={() => console.log("pre-orders cons")}
                > pre-orders </Button>

            </nav>
            <main>
                <Product
                    redlabel="Best Seller"
                    image={bag_1}
                    name="The Handy bag"
                    price={400}
                />

                <Product
                    redlabel="Best Seller"
                    image={bag_2}
                    name="The stylish bag"
                    price={250}
                />

                <Product
                    redlabel="New collection"
                    image={bag_3}
                    name="The simple bag"
                    price={300}
                />

                <Product
                    redlabel="New collection"
                    image={bag_4}
                    name="The trendy bag"
                    price={150}
                />
            </main>
            <footer>
                <Tile
                    titletile="the brand"
                    paragraph1="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi ea earum esse, facere"
                    paragraph2="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi ea earum esse, facere"
                />
                <Tile
                    img={brand1} caption="hallo"
                />
                <Tile
                    img={story} caption="hallo2"
                />
                <Tile
                    titletile="our story"
                    paragraph1="lLorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus commodi ea earum esse, facere facilis itaque minima necessitatibus qua"
                />
            </footer>
        </>
    );
}

export default App;



