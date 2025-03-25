
const Footer = () => {
    return (
    <div>
        <section className="row  mt-4 footer-background-color">
            <div className="col-md-4 text-left text-light">
                <h5 className="p-2 text-center text-info">About Us</h5>
                <p className="text-dark">This department is responsible for aligning and implementing state department policies at the county level, organizing and coordinating agricultural trade fairs, exhibitions and shows, developing and disseminating appropriate technologies, capacity building, providing field extension services and advisory services. .</p>
                <br/>
            </div>
            <div className="col-md-4 text-light">
                <h5 className="p-2 text-center text-info">Reach Us Out</h5>
                <input className="form-control" type="email" placeholder="Enter your email"/>
                <br/>
                <textarea className="form-control" rows="7" placeholder="Leave a comment"></textarea>
                <br/>
                <input type="submit" value="Send Message" className="btn btn-primary"/>
            </div>
            <div className="col-md-4 ">
                <h4 className="text-center text-info">Connect With Us</h4>
                <br/>
                <a href="https://facebook.com">
                <img src="images/fb.png" alt="" className="socialspictures"/>
                </a>
                <a href="https://instagram.com">
                <img src="images/ig.png" alt="" className="socialspictures"/>
                </a>
                <p className="text-dark">You can reach us here at Telaviv Agrics through our socials.One of them is through our instagram page,if not so one can also reach us through facebook or even twitter or in modern so newly reffered X.</p>
            </div>
        </section>
        <footer className="text-white text-center p-2 mt-2 bootom-footer">
                <h5>Developed by Telvin Muthwa &copy; 2025.All rights reserved</h5>
        </footer>
    </div>
    );
    }
     
   
    export default Footer;
