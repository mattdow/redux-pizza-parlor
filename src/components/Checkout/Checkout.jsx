import './Checkout.css'

function Checkout() {
    const pizzaArray = [];

    return (<>
        <h1>Step 3: Checkout</h1>
        <div className="customerInfo">
            <table className="customerTable">
                <tbody>
                    <tr>
                        <td>
                            Name <br />
                            Address <br />
                            City <br />
                        </td>
                        <td>
                            For Delivery / Carryout
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="pizzaDiv">
            <table className="pizzaTable">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>
                    {pizzaArray.map((item, i) => (<>
                        <tr>
                            <td>item.Pizza 1</td>
                            <td>item.Pizza cost</td>
                        </tr>
                    </>))}

                </tbody>
            </table>
        </div>
        <h3>Total: $500</h3>
        <button>Checkout</button>
    </>)
}
export default Checkout;