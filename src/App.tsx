
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
import Facebook from './tracking/Facebook'

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
    <Testimonials images={[]}  />
    <p className='text-2xl pb-4 text-center'>Ingin anak betah belajar karena ada yang mendampingi? Yuk Gabung sekarang juga!</p>
    <Btn anchorId={'join'} label={'Daftar Klik Disini'}/>
    </Wrapper>
    <Footer />
    <Facebook />
    </div>
    </>
  )
}

export default App