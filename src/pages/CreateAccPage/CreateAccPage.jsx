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
                            <div className="create-acc__form-input user">
                                <input type="text" placeholder="Username" />
                            </div>

                            <div className="create-acc__form-input mail">
                                <input type="mail" placeholder="Email Address"/>
                            </div>

                            <div className="create-acc__form-input password">
                                <input type="password" placeholder="Password"/>
                            </div>

                            <div className="create-acc__form-input password">
                                 <input type="password" placeholder="Confirm Password"/>
                            </div>       

                            <button className="create-acc__form-btn purple-btn">Create account</button>
                        </form>
                    </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default CreateAccPage;