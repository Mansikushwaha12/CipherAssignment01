import React from "react";
import UserDetails from "./UserDetails";

const AllUserList = () => {

    let allUsers =[
        {
            name: "John", email: "john@email.com",
            phoneNumber: "+91-9387564341",
        },
        {name: "Tom", email: "tom@email.com" , phoneNumber: "+91-9639562750"}
    ];
// jsx array
    let array =[ <UserDetails user={allUsers[0]} />,
    <UserDetails user={allUsers[1]} />]

    return (
        <div>
            {/* <UserDetails user={allUsers[0]} />
            <UserDetails user={allUsers[1]} /> */}
            {array}
        </div>
    );

};

export default AllUserList;