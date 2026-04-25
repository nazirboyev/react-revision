function CounterApp() {
    return(
        <>
            <div className="count-container">
                <div className="header-count">
                    <i className="icon" class="fa-solid fa-cart-shopping"></i>
                    <h1 className="items-number">0</h1>
                    <h3>Items</h3>
                </div>
                <div className="body-count">
                    <button className="refresh-btn"><i class="fa-solid fa-rotate"></i></button>
                    <button className="refresh2-btn "><i class="fa-solid fa-arrows-spin"></i></button>    
                </div>
                <div className="legs-count">
                    <h1 className="Zero">Zero</h1>
                    <button className="bnt-1"><i class="fa-solid fa-circle-plus"></i></button>
                    <button className="bnt-2"><i class="fa-solid fa-circle-minus"></i></button>
                    <button className="bnt-3"><i class="fa-solid fa-trash-can"></i></button>
                </div>
            </div>
        </>
    )
}

export default CounterApp;

