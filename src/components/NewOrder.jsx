import { useState } from 'react';
import { useSelector } from 'react-redux';

export const NewOrder = () => {
    const userData = useSelector(store => store.userDetails);
    // Get data of only this user. store it in redux
    // GET /orders?owner_name=john will give you all order of user john
    //  on submit click create a new order, new order has status `Not Accepted`
    const [FormData, setFormData] = useState({
        problem: null,
        owner_name: userData.username,
        brand: null
    });

    const handleChange = (e) => {
        setFormData({
            ...FormData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div>
            <div className="form">
                <input
                    onChange={handleChange}
                    className="new-problem"
                    type="text"
                    name="problem"
                    placeholder="Enter problem"
                />
                {/* This input is readonly, it's coming from redux */}
                <input
                    onChange={handleChange}
                    value={userData.username} // populating the name field
                    className="owner-name"
                    type="text"
                    name="owner_name"
                    placeholder="yourname"
                    readOnly
                />
                <input
                    onChange={handleChange}
                    className="brand"
                    type="text"
                    name="brand"
                    placeholder="Enter brand name"
                />
                {/* Create new problem, show it in below form immediately */}
                <button className="submit">submit</button>
            </div>

            <div className="pastOrders">
                {/* this button filters the data below. */}
                {/* it's just a toggle of redux state something like `showUnfinished`  */}
                <button className="filter">
                    {/* Text should change like:   Show {showUnfinished ? "all" : "Only unfinished"} */}
                </button>

                {/* Here create a div for every oreder, filter them before based on `showUnfinished` */}
                <div className="past-orders">
                    <span className="id"></span>. <span className="problem"></span>{" "}
                    <span className="cost">
                        {/* if status is not accepted then keep it empty otherwise show cost like $1234 */}
                    </span>
                    <p className="status">Status: </p>
                    <hr />
                </div>
            </div>
        </div>
    );
};