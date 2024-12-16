import './Landing.css'
function Landing() {
    return (
        <>
            <div className="mainLand">
                <div className="landing">
                    <div>
                        <div class="paytm-img"><img src="https://paytmtravel-images-akamai.paytm.com/icons/Paytm_Travel_Logo.svg" height="20px" alt="" /></div>

                        <div className='container mt-3 pb-5'>
                            <div className='item mt-5'>
                                <p>From <h3>DEL</h3><p>Delhi</p></p>
                                <p>Special Fares(Optional)</p>
                            </div>
                            <div className='item mt-5'>
                                <p>To <h3>BOM</h3><p>Mumbai, Maharashtra</p></p>
                                <button type="button" class="btn btn-outline-info roundbtn">Armed Forces</button>
                            </div>
                            <div className='item mt-5'>
                                <p>Departure Date <h3>19 DEC 24</h3><p>Thursday</p></p>
                                <button type="button" class="btn btn-outline-info roundbtn">Students</button>

                            </div>
                            <div className='item mt-5'>
                                <p>Travellers and Cabbin Class <h3>1 Traveller</h3><p>Economy</p></p>
                                <button type="button" class="btn btn-outline-info roundbtn">Senior Citizen</button>

                            </div>
                            <div className='item mt-5'>
                                <button type="button" class="btn btn-info searchbtn">Search Flights</button>

                            </div>

                        </div>


                        {/* second div start */}

                        <div className='container containerTwo mt-3 pb-5'>
                            <div className='item mt-5'>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2698103/8552011565932277.jpg" height="250px" alt="" />
                            </div>
                            <div className='item mt-5'>
                                <img src="https://assetscdn1.paytm.com/images/catalog/view_item/1799116/1728377300975.png" height="250px" alt="" />
                            </div>
                            <div className='item mt-5'>
                               <img src="https://assetscdn1.paytm.com/images/catalog/view_item/2701353/1731579742271.jpg" height="250px" alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Landing