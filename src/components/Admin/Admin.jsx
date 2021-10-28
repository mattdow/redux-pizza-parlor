import './Admin.css';


function Admin() {
    
    const allCustomerReducer = [];

    return (<>
        <table className="adminTable">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
            </thead>
            <tbody>
                {allCustomerReducer.map((person, i) => (
                    <tr>
                        <td>person.name</td>
                        <td>person.Time from SQL</td>
                        <td>person.Pickup/Delivery</td>
                        <td>person.TotalCost</td>
                    </tr>
                ))}

            </tbody>
        </table>
    </>)
}

export default Admin;