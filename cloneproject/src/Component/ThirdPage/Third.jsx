import './Third.css'
function Third(){
    return(
        <>
        <div className="row main-third">
            <div className=" third-info col-lg-6">
                <div><img src="https://assetscdn1.paytm.com/images/catalog/view/310944/1697527183231.png" height="80px" alt="" /></div> <br />
                <div>
                    <h1 className='third-head1'>India's Most-loved <br /> Payments App</h1> <br />
                    <h4>Recharge & pay bills, book flights & movie tickets, <br /> invest in stocks & mutual funds, and do a lot more.</h4> <br />
                    <button type="button" class="btn btn-outline-dark downbtn">Download Paytm App 📈💰</button>
                </div>
            </div>
            <div className="col-lg-6">
                
                    <img className='third-img' src="https://assetscdn1.paytm.com/images/catalog/view_item/850762/1715933362922.png" height={600} alt="" />
                
            </div>
        </div>
        </>
    )
}

export default Third