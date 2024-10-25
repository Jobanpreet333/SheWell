import React from 'react'
import Pads from '../pads.png'
import Tampons from '../tampons.png'
import Inter from '../inter.png'
import Disc from '../discs.png'
import Cup from '../cups.png'
import Panty from '../panties.png'
import Sponge from '../sponges.png'
function Menstraul() {
  return (
    <>
      <div className='product'>
        <h1>Period Products</h1>
        <h4>Period products come in various forms to manage menstruation, offering different levels of comfort, convenience, and environmental impact. Here's a comprehensive overview of the most common period products:</h4>


        <h2> 1. Sanitary Pads (Menstrual Pads)</h2>
        <img id='product' src={Pads} alt="" />
        <h3>Description: <h4>Absorbent layers worn in underwear to catch menstrual flow.</h4></h3>
        <h3>Types:</h3>

        <h3>Disposable pads : <h4>Single-use, usually made from cotton, synthetic fibers, and plastics.</h4></h3>
        <h3>Reusable cloth pads : <h4>Washable and eco-friendly alternatives, often made from cotton or bamboo.</h4></h3>
        <h3>Sizes and Absorbency</h3>
        <h3><h4>Ranges from panty liners (for light flow or spotting) to overnight pads (for heavy flow).</h4></h3>
        <h3><h4>Wings or adhesives help secure the pad in place.</h4></h3>
        <h3>Advantages : </h3>
        <h3><h4>Easy to use, widely available.</h4></h3>
        <h3><h4> No internal insertion required.</h4></h3>
        <h3>Drawbacks : </h3>
        <h3><h4>Disposables can contribute to environmental waste.</h4></h3>
        <h3><h4>May cause discomfort if worn for extended periods.</h4></h3>
        <h3><h4></h4></h3>
        <h3><h4></h4></h3>

        <h2>2.Tampons</h2>
<img id='product'src={Tampons} alt="" />
        <h3>Description : <h4>Small, cylindrical products inserted into the vagina to absorb menstrual flow internally.</h4></h3>
        <h3>
          Types:
        </h3>
        <h3>Applicator tampons : <h4> Come with a plastic or cardboard applicator for easier insertion.</h4></h3>
        <h3>Non-applicator tampons : <h4> Require insertion using fingers.</h4></h3>
        <h3>Organic tampons : <h4>Made from organic cotton, free of synthetic materials.</h4></h3>
        <h3>Sizes and Absorbency : </h3>
        <h4>Range from light to super or ultra for different flow levels.</h4>
        <h4>Must be changed every 4-8 hours to prevent toxic shock syndrome (TSS).</h4>
        <h3>Advantages : </h3>
        <h4>Discreet, allows for activities like swimming.</h4>
        <h4>Provides a more "active" option for menstruation.</h4>
        <h3>Drawbacks : </h3>
        <h4> Risk of TSS if left in for too long.</h4>
        <h4>Some may find insertion uncomfortable or difficult.</h4>

        <h2>3.Menstrual Cups</h2>
        <img id='product' src={Cup} alt="" />
        <h3>Description : <h4>A flexible, bell-shaped silicone or rubber cup inserted into the vagina to collect menstrual blood.</h4></h3>
        <h3>Types : </h3>
        <h3>Reusable menstrual cups : <h4>Cleaned and reused each cycle (can last for up to 10 years).</h4></h3>
        <h3>Disposable menstrual cups : <h4> Single-use cups available in some markets.</h4></h3>
        <h3>Sizes : </h3>
        <h3><h4>Typically comes in two sizes: one for women who have given birth and another for those who haven't.</h4></h3>

        <h3>4.Advantages : </h3>
        <h4> Eco-friendly and cost-effective in the long term.</h4>
        <h4>Can be worn for up to 12 hours.</h4>
        <h4>Doesn't cause dryness or disrupt vaginal pH balance.</h4>

        <h3>Drawbacks : </h3>
        <h4>Initial learning curve for insertion and removal.</h4>
        <h4>May require cleaning or emptying in public bathrooms, which can be inconvenient.</h4>

        <h2>5.Menstrual Discs</h2>
        <img id='product' src={Disc} alt="" />
        <h3>Description : <h4> A flexible disc-shaped product placed at the vaginal fornix (near the cervix) to collect menstrual flow.</h4></h3>
        <h3>Types : </h3>
        <h3>Disposable menstrual discs : <h4> Single-use, typically made of plastic.</h4></h3>
        <h3>Reusable menstrual discs : <h4> Made of medical-grade silicone and can be washed and reused.</h4></h3>

        <h3>Advantages : </h3>
        <h4> Can be worn up to 12 hours.</h4>
        <h4>Some designs allow for mess-free intercourse during menstruation.</h4>
        <h4> Less chance of leakage for some users compared to cups or tampons.</h4>

        <h3>Drwabacks : </h3>
        <h4>Can be tricky to insert or remove.</h4>
        <h4> May not be as readily available as other products.
        </h4>

        <h2>6.Period Underwear : </h2>
<img id='product' src={Panty} alt="" />
        <h3>Description  :<h4>Specially designed underwear with absorbent layers to catch menstrual flow without the need for additional products like pads or tampons.</h4></h3>
        <h3>Types : </h3>
        <h4> Different styles and absorbency levels for light, medium, or heavy flow.</h4>
        <h4> Brands like Thinx, Modibodi, and Knix are popular in this category.</h4>

        <h3>Advantages : </h3>
        <h4>Reusable and eco-friendly.
        </h4>
        <h4>Comfortable and discreet</h4>
        <h4> Can be worn alone or as backup with other products.</h4>
        <h3>Drawbacks : </h3>
        <h4>Requires washing after each use.</h4>
        <h4>Higher initial cost compared to disposable products.
        </h4>

        <h2>7.Sponges (Menstrual Sponges)</h2>
        <img id='product' src={Sponge} alt="" />
        <h3>Description : </h3>
        <h4>Natural or synthetic sponges inserted into the vagina to absorb menstrual blood.</h4>
        <h3>Types : </h3>
        <h3>Natural sea sponges :<h4>Harvested from the ocean, washable, and reusable</h4></h3>
        <h3>Synthetic sponges : <h4> Manufactured versions, sometimes disposable.</h4></h3>

        <h3>Advantages : </h3>
        <h4>Eco-friendly if using reusable options.</h4>
        <h4> Can be worn during sex (in some cases) without being felt</h4>

        <h3>Drwabacks : </h3>
        <h4> Difficult to clean thoroughly, which can raise infection concerns.</h4>
        <h4> May not be widely available.</h4>
      

      
      <h2>8.Interlabial Pads</h2>
      <img id='product' src={Inter} alt="" />
      <h3>Description : </h3>
      <h4>Small, absorbent pads worn between the labia to catch light flow or act as a backup for menstrual cups or tampons.</h4>
      <h3>Advantages : </h3>
      <h4>Can prevent leaks for heavy flows.</h4>
      <h4>Discreet and comfortable.</h4>

      <h2> Considerations When Choosing Period Products:</h2>
      <h3><h4></h4></h3>
      <h3>1. Comfort: <h4>Some people prefer internal options like tampons or cups, while others feel more comfortable with external products like pads or period underwear.</h4></h3>
      <h3>2. Flow Intensity: <h4>Different products offer varying absorbency levels. You may need different products for light vs. heavy flow days.</h4></h3>
      <h3>3. Activity Level:<h4> Swimming, sports, or other activities may be more comfortable with tampons, cups, or discs.</h4></h3>
      <h3>4. Environmental Impact: <h4>Reusable products (menstrual cups, cloth pads, period underwear) are more eco-friendly than disposable options.</h4></h3>
      <h3>5. Cost: <h4>While disposables (pads, tampons) may have a lower initial cost, reusable products can save money over time.</h4></h3>
      <h3>6. Health and Allergies: <h4>Some people may be sensitive to chemicals in disposable products. Organic or reusable options may be more suitable.</h4></h3>
      <h3>7. Accessibility: <h4>Not all period products are available in every region, and some may require online purchases.</h4></h3>

      <h2>Emerging Trends in Period Products:</h2>
      <h4>Sustainable and eco-friendly options are growing in popularity, including reusable menstrual cups, discs, and cloth pads.</h4>
      <h4>Organic products: There is increasing demand for organic cotton tampons and pads that are free from harmful chemicals.</h4>
      <h4>Tech-enabled solutions: Period tracking apps and wearable technology, such as period underwear with integrated tracking features, are evolving in the market.</h4>

     
      </div>
    </>
  )
}

export default Menstraul