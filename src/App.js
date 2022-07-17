import React from 'react';
import './App.css';
import Button from "./Components/Button";
import Product from "./Components/Product";
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';
import Tile from "./Components/Tile";

function App() {
    return (
        <>  <h1>Handbags & Purses</h1>
            <nav>
                <Button
                    type="button"
                    title="to the collection"
                />
                <Button type="button"
                        title="shop all bags"
                />
                <Button
                    type="button"
                    disabled="false"
                    title="pre-orders"
                />
            </nav>

            <main>
                <Product
                    label="Best seller"
                    image={bag_1}
                    title="The handy bag"
                    price="400"
                />
                <Product
                    label="Best seller"
                    image={bag_2}
                    title="The stylish bag"
                    price="250"
                />
                <Product
                    label="New collection"
                    image={bag_3}
                    title="The simple bag"
                    price="300"
                />
                <Product
                    label="New collection"
                    image={bag_4}
                    title="The trendy bag"
                    price="150"
                />
            </main>

            <footer>
                <Tile title="The brand">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A consectetur deserunt earum magni
                        mollitia, odio rerum tempora tempore unde velit!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis, facilis!</p>
                </Tile>

                <Tile
                    img={brand}
                    description="Brand"
                />
                <Tile
                    img={our_story}
                    description="Photo of our self"
                />

                <Tile title="Our Story">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam consequatur dolore fugit nesciunt
                    nostrum rerum.</p>
                </Tile>
            </footer>
        </>
    );
}

export default App;



