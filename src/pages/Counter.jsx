import { useEffect, useState } from "react";

function CounterApp() {
  const [items, setItems] = useState(0);
  const [counters, setCounters] = useState([
    { id: 1, count: 0, added: false },
    { id: 2, count: 0, added: false },
    { id: 3, count: 0, added: false },
    { id: 4, count: 0, added: false },
  ]);

  const plus = (id) => {
    let newCounters = counters.map((c) => {
      if (c.id == id) {
        c.count++;
        if (!c.added) c.added = true;
      }
      return c;
    });

    setCounters(newCounters);
  };

  const minus = (id) => {
    let newCounters = counters.map((c) => {
      if (c.id == id && c.count > 0) {
        c.count--;
      }
      if (c.id == id && c.count == 0) {
        c.added = false;
      }
      return c;
    });

    setCounters(newCounters);
  };

  const deleteCounter = (id) => {
    let filteredCounters = counters.filter((c) => c.id != id);

    setCounters(filteredCounters);
  };

  useEffect(() => {
    let count = 0;
    counters.forEach((c) => {
      if (c.count > 0) {
        count++;
      }

      setItems(count);
    });
  }, [counters]);

  return (
    <>
      <div className="container wrap-counter">
        <h1>
          <i class="fa-solid fa-cart-shopping"></i>
          <span className="counter-items">{items}</span> Items
        </h1>
        <div className="m-10">
          <i class="fa-solid fa-arrows-rotate"></i>
          <i class="fa-solid fa-recycle"></i>
        </div>
        <div>
          {counters.map((c) => {
            return (
              <div key={c.id}>
                <span
                  className={`count btn  ${c.count == 0 ? "btn-warning" : "btn-info"}`}
                >
                  {c.count == 0 ? "Zero" : c.count}
                </span>
                <button onClick={() => plus(c.id)} className="btn btn-start">
                  +
                </button>
                <button onClick={() => minus(c.id)} className="btn btn-stop">
                  -
                </button>
                <i
                  class="fa-solid fa-trash"
                  onClick={() => deleteCounter(c.id)}
                ></i>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default CounterApp;
