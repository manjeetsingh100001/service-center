import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { showOrders, changeOrder, sortOrder } from "../Redux/actions";

export const Orders = () => {
    //  Get all data when admin logs in and populate it
    // store it in redux

    // const [Data, setData] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("http://localhost:8080/orders")
            .then(res => res.json())
            .then(data => {
                dispatch(showOrders(data));
            });
    }, []);

    const data = useSelector(store => store.orders);

    const handleSort = (e) => {
        dispatch(sortOrder(e.target.value));
    }

    const handleAccept = (e) => {
        const costInput = prompt("Please enter the cost", null);
        const id = e.target.parentElement.parentElement.id;
        const postData = data.map((e) => {
            if (e.id == id) {
                e.status = "Pending";
                e.cost = Number(costInput);
                return e;
            }
            return e;
        });

        dispatch(changeOrder(postData));

        // console.log(postData)

        // fetch('http://localhost:8080/orders', {
        //     method: 'PATCH', // or 'PUT'
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(postData),
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log('Success:', data);
        //     })
        //     .catch((error) => {
        //         console.error('Error:', error);
        //     });


        // dispatch(changeOrder(id));
    }

    return (
        <div>
            <div>
                <div>
                    <select className="controls" name="progress" id="progress" onChange={handleSort}>
                        <option value="id">ID</option>
                        <option value="status">Status</option>
                        <option value="cost">Cost</option>
                    </select>
                </div>
                <table className="orders">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Problem</th>
                            <th>Client Name</th>
                            <th>Status</th>
                            <th>Cost</th>
                            <th>Change Status</th>
                            <th>Accept</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((e) => {
                            return (
                                <tr className="orders-row" key={e.id} id={e.id}>
                                    <td className="id">{e.id}</td>
                                    <td className="problem">{e.problem}</td>
                                    <td className="owner">{e.owner_name}</td>
                                    <td className="status">{e.status}</td>
                                    <td className="cost">
                                        {e.status === "Not Accepted" ?
                                            "-"
                                            : `$${e.cost}`}
                                    </td>
                                    <td className="change-status">
                                        {/* Show select dropdown only if status is Not Accepted */}
                                        {e.status !== "Not Accepted" ?
                                            <select className="changeStatus" name="changeStatus">
                                                <option value="Pending">Pending</option>
                                                <option value="In Progress">In Progress</option>
                                                <option value="Done">Done</option>
                                                <option value="Not Accepted">Not Accepted</option>
                                            </select>
                                            : null}

                                    </td>
                                    <td className="accept">
                                        {/* Show this button only if status is Not Accepted */}
                                        {/* on change make request to update it in db, and show changed status in table */}
                                        {e.status === "Not Accepted" ?
                                            <button
                                                onClick={handleAccept}>Accept</button>
                                            : null}

                                    </td>
                                </tr>
                            )
                        })}


                        {/* <tr className="orders-row">
                            <td className="id"></td>
                            <td className="problem"></td>
                            <td className="owner"></td>
                            <td className="status"></td>
                            <td className="cost"></td>
                            <td className="change-status">
                                <select className="changeStatus" name="changeStatus">
                                    <option value="Pending">Pending</option>
                                    <option value="In Progress">In Progress</option>
                                    <option value="Done">Done</option>
                                    <option value="Not Accepted">Not Accepted</option>
                                </select>
                            </td>
                            <td className="accept">
                                <button>Accept</button>
                            </td>
                        </tr> */}
                    </tbody>
                </table>
            </div>
        </div>
    );
};