
import './global.css'
import ProductImage from './components/ProductImage'
import ProductDesc from './components/ProductDesc'
import FeaturedList from './components/FeaturedList'
import Testimonials from './components/Testimonials'
import WhatsappBtn from './components/WhatsappBtn'
import Footer from './components/Footer'
import Wrapper from './components/Wrapper'
// import Slider from './components/Slider'
import Btn from './components/Btn'
import PricingTable from './components/PricingTable'
import Gallery from './components/Gallery'
import Faq from './components/Faq'
import StarRating from './components/StarRating'

function App() {

  return (
    <>
    <div className='bg-gray-100'>
    <ProductImage />
    <Wrapper>
    <ProductDesc />
    <FeaturedList />
    <Gallery url={''} alt={''} caption={''} />
    <PricingTable />
    <WhatsappBtn 
    message={"Halo, mohon info untuk daftar les di Sigmath"}
    btnText={"Chat Sekarang via WhatsApp"}
    />
    <StarRating />
    <Testimonials images={[]}  />
    <Faq />
    <p className='text-2xl text-center'>Ingin anak betah belajar karena ada yang mendampingi? Yuk Gabung sekarang juga!</p>
    <StarRating />
    <Btn anchorId={'join'} label={'Daftar Klik Disini'}/>
    </Wrapper>
    <Footer />
    </div>
    </>
  )
}

export default App
