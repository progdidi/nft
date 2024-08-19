import './createAccPage.scss';

//images
import create from './create.png';

const CreateAccPage = () => {
    return ( 
        <div className="create-acc">
            <div className="container">
                <div className="create-acc__inner">
                    <div className="create-acc__media">
                        <img src={create} alt="" className="create-acc__media-img" />
                    </div>

                    <div className="create-acc__info">
                        <h2 className="create-acc__info-title page__title">Create account</h2>
                        <p className="create-acc__info-text">Welcome! enter your details and start creating, collecting and selling NFTs.</p>
                        <form action="" className="create-acc__form">
                            <input type="text" className="create-acc__form-input" placeholder="Username"/>
                            <input type="mail" className="create-acc__form-input" placeholder="Email Address"/>
                            <input type="password" className="create-acc__form-input" placeholder="Password"/>
                            <input type="password" className="create-acc__form-input" placeholder="Confirm Password"/>
                            <button className="create-acc__form-btn purple-btn">Create account</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default CreateAccPage;