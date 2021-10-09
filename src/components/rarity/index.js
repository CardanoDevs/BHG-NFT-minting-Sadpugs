import "./style.scss"

import { Raritys } from "constants/index"

import BRONZE from "resources/categories/1.png"
import SILVER from "resources/categories/2.png"
import GOLD from "resources/categories/5.png"
import HOF from "resources/categories/3.png"
import MASTERCARD from "resources/categories/4.png"

import ARTWORK_ROADMAP_2 from "resources/artworks/Learn_Banner_Transparent.png"

const generateRarity = () =>
  Raritys.map((data, index) => (
    <div key={index} className="rarity-diagram-item flex flex-column">
      <div className="rarity-diagram-item-progress flex flex-column">
        <div
          className={`rarity-diagram-item-progress-bar-${data.title.toLowerCase()}`}
        ></div>
        <div className="rarity-diagram-item-progress-comment">
          {data.comment}
        </div>
      </div>
      <span>{data.title}</span>
    </div>
  ))

const Rarity = () => (
  <div className="rarity flex flex-column">
    <div className="rarity-ranking flex flex-column">
      <span>Rarity</span>
 
    </div>
    <div className="rarity-classes flex">
      <div className="flex flex-column">
        <img className="bronze" src={BRONZE} alt="bronze" />
        <span>Kitty</span>
      </div>
      <div className="flex flex-column">
        <img className="silver" src={SILVER} alt="silver" />
        <span>Clooney</span>
      </div>
      <div className="flex flex-column">
        <img className="gold" src={GOLD} alt="gold" />
        <span>Matcha</span>
      </div>
      <div className="flex flex-column">
        <img className="hof" src={HOF} alt="hall of fame" />
        <span>Butters</span>
      </div>
      <div className="flex flex-column">
        <img className="mastercard" src={MASTERCARD} alt="mastercard" />
        <span>Gandalf</span>
      </div>
    </div>

    <div className="rarity-ranking-comment">
        There are 95 traits that were hand drawn by our artist. Then, the hand drawn traits were put into a generator. From the generator 10,000 Pugs are available for minting.
      </div>
   
  </div>
)

export default Rarity
