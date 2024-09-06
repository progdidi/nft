import './digestSection.scss';

const DigestSection = () => {
    return ( 
        <div className="digest__info">
            <h3 className="digest__info-title section__title">Join our weekly digest</h3>
            <p className="digest__info-text">Get exclusive promotions & updates straight to your inbox.</p>
            <form action="" className="digest-form">
                <input type="text" className="digest-form__input" placeholder='Enter your email here'/>
                <button className="digest-form__btn purple-btn"> <p>Subscribe</p> </button>
            </form>
        </div>
     );
}
 
export default DigestSection;