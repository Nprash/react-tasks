import React from 'react'

const Collectnames = (props) => {
    return (
            <tr>
                <td>{1}</td>
                <td>{props.Name}</td>
                <td>{props.Email}</td>
                <td>{props.MobileNumber}</td>
                <td>{props.dateofbirth}</td>
            </tr>
    )
}

export default Collectnames;
