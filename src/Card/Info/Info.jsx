import './Info.css'
import Data from '../Data/Data'
const Info = ({text}) => {
    return(
        <div className='info' >
        <h1>Get <span className='insights'>insights</span> that help your business grow.</h1>
        <p>{text}</p>
        <div className='data'>
         <Data 
         data='10K+'
         name='COMPANIES'
         />
         <Data 
         data='314'
         name='TEMPLATES'
         />
         <Data 
         data='12M+'
         name='QUERIES'
         />
        </div>
        </div>
    )
}

export default Info