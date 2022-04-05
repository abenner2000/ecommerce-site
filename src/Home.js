import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className = "home">
        <div className = "home__container">
            <img 
                className = "home__image"
                src = "https://i.pinimg.com/736x/af/9d/df/af9ddf68c60c1c0a4fa5f192e3182df1.jpg"
                alt = ""
            />
            <div className = "home__row">
              <Product 
                id = "1"
                title = "Pololu 3pi Robot" 
                image = "https://tse2.mm.bing.net/th?id=OIP.jlI8Ng5yxe_qwbrFSK38IwHaF7&pid=Api&P=0&w=204&h=164"
                price = {95.99}
                rating = {5}
              />
              <Product
                id = "2"
                title = "ESP 32"
                image = "https://m.media-amazon.com/images/I/51ALH4nJNyL.jpg"
                price = {8.99}
                rating = {5}
              />
            </div>
            <div className = "home__row">
              <Product
                id = "3"
                title = "FRDM-KL25Z Board"
                image = "https://os.mbed.com/media/cache/platforms/FRDM-KL25Z1_vRpCh79.jpg.250x250_q85.jpg"
                price = {19.99}
                rating = {5}
               />
            </div>
            <div className = "home__row">
              <Product 
                id = "4"
                title = "Basys3 Development Board"
                image = "https://cdn11.bigcommerce.com/s-7gavg/images/stencil/1280x1280/products/106/5610/Basys-3-1__42962.1594936409.1280.1280__22030.1602869940.386.513__54227.1612742748.png?c=2"
                price = {119.99}
                rating = {3}
              />
              <Product 
                id = "5"
                title = "Texas Instruments - Launchpad"
                image = "https://m.media-amazon.com/images/I/310d9DYzPQL.jpg"
                price = {29.99}
                rating = {4}
              />
              <Product 
                id = "6"
                title = "AWS DeepRacer"
                image = "https://techcrunch.com/wp-content/uploads/2021/04/Screen-Shot-2021-04-27-at-11.08.13-AM.jpg?w=730&crop=1"
                price = {349.99}
                rating = {4}
              />
            </div>
        </div>
    </div>
  )
}

export default Home