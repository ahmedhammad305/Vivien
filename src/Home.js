import  Image2  from './image/image1.jpg'
// import ThirdHome from './ThirdHome'
import Footer from './Footer'
import User from './User'
import { Link } from 'react-scroll'
import image from './image/image2.jpg'
import img3 from'./image/image3.jpg'
import img4 from'./image/image4.jpg'
import img5 from'./image/image5.jpg'
import img6 from'./image/image6.jpg'
import img7 from'./image/image7.jpg'
import img8 from'./image/image8.jpg'
import img9 from'./image/image9.jpg'
import img10 from'./image/image11.jpg'

export default function Home(){
    return(
        <>
        <div  className="HomePage mt-5">
            <div style={{marginTop:'70px'}} className="container">
                <div style={{alignItems:'center', direction:'ltr'}} className="row">
                    <div className="col-12 col-md-6 col-lg-6 mb-3 hell ">
                        <img src={Image2} alt="" />
                    </div>
                    <div className='col-12 col-md-6 col-lg-6 mb-3 '>
                    <h1 style={{textAlign:'center'}}>vivien body milk</h1>
                        <p className='apear'>السعر قبل الخصم
                        <span style={{fontWeight:'bold', marginRight:'3px ', color:'black'}}>500
ج. م    </span></p>
                        <p className='apear'>السعر بعد الخصم
        <span style={{fontWeight:'bold', marginRight:'3px ', color:'black'}}>249ج.م</span>
</p>
                        <i></i>
                        <Link to="hero" spy={true} smooth={true} offset={50} duration={200}><button className='btn btn-dark bot'>اضغط هنا للشراء</button></Link>
                <h2 className='word  mt-3'> اول منتج مصري %100 Body milk</h2>
                    </div>
                </div>
            </div>
        </div>
        {/* <ThirdHome/> */}
        <div className="section">
            <div className="container">
                
                <div className="row">
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                            <img style={{width:'100%'}} src={image} alt=""/>
                            <div className='info'><p>حمض الهيالورونيك (hyaluronic acid): يعمل على ترطيب بشرتك بعمق ويساعد على تعزيز مرونتها ومقاومة الجفاف.
                            </p></div>
                            
                    
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img3} alt=""/>
                        <div className='info'> <p>النياسيناميد (niacinamide): هو فيتامين ب٣ الذى يساعد على ترطيب بشرتك وحمايتها من العوامل البيئية وتقليل الاحمرار والالتهاب كما يساعد على تفتيحها وتقليل التصبغات.
                        </p></div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img4} alt=""/>
                        <div className='info'><p>زيت بذور العنب (grapeseed oil): يساعد على تنعيم بشرتك وترطيبها، وتوحيد لونها.
                        </p></div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img5} alt=""/>
                        <div className='info'><p>زبدة الشيا (Shea butter): تمد بشرتك بالأحماض الدهنية التي تغذيها وترطبها.
                        </p></div>
                            
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img6} alt=""/>
                        <div className='info'><p>فيتامين هـ (vitamin E): يعمل كمضاد للأكسدة يحمي البشرة من عوامل التلف الداخلية والخارجية، ويقاوم تقدمها في العمر.
                        </p></div>
                            
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img7} alt=""/>
                        <div className='info'> <p>السيراميد (ceramide): مرطب قوي للبشرة، يخترق الخلايا، ويترك طبقة على الجسم من الخارج تحافظ على الترطيب.
                        </p></div>
                       
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img8} alt=""/>
                        <div className='info'>
                            <p> ستشعرين أن اللوشن يكسب بشرتك نعومة وترطيبًا جيداً، ومع الاستخدام المنتظم المستمر ستلاحظين أن بشرتك أصبحت أقل جفافًا</p>
                            </div>
                            
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img9} alt=""/>
                        <div className='info'> <p>حمض الهيالورونيك (hyaluronic acid): يعمل على ترطيب بشرتك بعمق ويساعد على تعزيز مرونتها ومقاومة الجفاف.
                        </p></div>
                    </div>
                    <div className="col-12 col-md-4 col-lg-4 mb-5">
                        <img style={{width:'100%'}} src={img10} alt=""/>
                        <div className='info'> <p>مع الاستخدام المنتظم المستمر ستلاحظين أن بشرتك أصبحت أقل جفافًا، وأصبحت أكثر ترطيبًا، وأقل عرضة للتشققات.</p></div>
                    </div>
                </div>
            </div>
        </div>
        <User/>
        <Footer/>
        </>
    )
};