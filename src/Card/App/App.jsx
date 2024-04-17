import Info from '../Info/Info'
import Img from '../Img/Img'
import image from '../../../images/image-header-desktop.jpg'
import './App.css'
const App = () => {
    return(
        <article className='card-main'>
        <Info 
        text='Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.'
        border='8px 0px 0px 8px'
        />
        <Img image={image}/>
        </article>
    )
}

export default App