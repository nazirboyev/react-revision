import { useState } from "react";

function CounterApp() {
      const [count, setCount] = useState(0);

  const plus = () => setCount((prev) => prev + 1);

  const minus = () => {
    if (count > 0) {
      setCount((prev) => prev - 1);
    }
  };
    
    return(
        <>
            <div className="count-container wrap-counter">
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
                    <h1 className="Zero"><span >{count}</span></h1>
                    <span className="count">{count}</span>
                    <button onClick={() => plus()} className="bnt-1"><i class="fa-solid fa-circle-plus"></i></button>
                    <button onClick={() => minus()} className="bnt-2"><i class="fa-solid fa-circle-minus"></i></button>
                    <button className="bnt-3"><i class="fa-solid fa-trash-can"></i></button>
                </div>         
            </div>

        </>
    )
}

export default CounterApp;

