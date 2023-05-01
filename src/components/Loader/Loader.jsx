import { ThreeDots  } from  'react-loader-spinner'

const Loader = () => {
    return (
        <>
            <div className="position-absolute top-50 start-50 translate-middle">
                <ThreeDots height="150" width="150" radius="9" color="#C70039" ariaLabel="three-dots-loading" wrapperStyle={{}} wrapperClassName="" visible={true} />
            </div> 
        </>
    )
}


export default Loader