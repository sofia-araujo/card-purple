import './Data.css'

const Data = ({data, name}) => {
    return(
            <div className='data-div'>
                <span>{data}</span>
                <span className='name-data'>{name}</span>
            </div>
    )
}

export default Data