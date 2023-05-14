import React from 'react';
import './App.css';
import Button from "./assets/components/Button/Button";
import Article from "./assets/components/Article/Article";
import bag_1 from "./assets/bag_1.png"
import bag_2 from "./assets/bag_2.png"
import bag_3 from "./assets/bag_3.png"
import bag_4 from "./assets/bag_4.png"
import Tiles from "./assets/components/tiles/Tiles"
import brand from "./assets/brand.png"
import ourStory from "./assets/our_story.png"


function App() {
    return (
        <>
            <h1>Handbags & Purses</h1>
            <nav>

                <Button
                    buttonType="button"
                    isDisabled={false}
                > to the collection </Button>

                <Button
                    buttonType="button"
                    isDisabled={false}
                >shop all bags </Button>

                <Button
                    buttonType="button"
                    isDisabled={true}
                >pre-orders </Button>

            </nav>
            <main>
                <Article
                    label="Best seller"
                    image={bag_1}
                    title="the handy bag"
                    price="€400,-"
                />

                <Article
                    label="Best seller"
                    image={bag_2}
                    title="the stylish bag"
                    price="250,-"
                />

                <Article
                    label="New collection"
                    image={bag_3}
                    title="the simple bag"
                    price="300,-"
                />

                <Article
                    label="New collection"
                    image={bag_4}
                    title="the trendy bag"
                    price="250,-"
                />

            </main>
            <footer>
                <Tiles>
                    <h2>Our Brand</h2>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                    and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                    leap into electronic typesetting</p>
                </Tiles>
                <Tiles>
                    <img src={brand}/>
                </Tiles>
                <Tiles>
                    <img src={ourStory}/>

                </Tiles>
                <Tiles>
                    <h2>Our Story</h2>
                    <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book. It has survived not only five centuries, but also the
                        leap into electronic typesetting</p>

                </Tiles>
            </footer>

        </>
    );
}

export default App;



