import React from 'react';

const Footer = () => {
    return (

        <div className="w-full">
            <div className="w-full flex flex-col md:flex-row gap-5 md:gap-0 bg-[#333] text-white font-thin">
                <div className="flex w-full md:w-1/2 mt-5 mb-5">
                    <div className="flex flex-col gap-3 justify-center items-start ml-20 w-1/2">
                        <a href={"#"}>Home</a>
                        <a href={"#search"}>Search</a>
                        <a href={"#information"}>Information</a>
                        <a href={"#create"}>Bring your pet</a>
                    </div>

                    <div className="flex flex-col gap-3 justify-center items-start w-1/2">
                        <a onClick={(e) => {
                            e.preventDefault();
                            alert('This section is currently on development')
                        }} href="">Donate</a>
                        <a onClick={(e) => {
                            e.preventDefault();
                            alert('This section is currently on development')
                        }} href="">Adoption centers</a>
                        <a onClick={(e) => {
                            e.preventDefault();
                            alert('This section is currently on development')
                        }} href="">Financials</a>
                        <a onClick={(e) => {
                            e.preventDefault();
                            alert('This section is currently on development')
                        }} href="">Partnership</a>
                    </div>
                </div>

                <div id='contacts' className="flex w-full md:w-1/2 justify-start md:justify-end">
                    <div className="flex flex-col gap-3 justify-center items-start md:items-end ml-20 md:ml-0 mr-20">
                        <div>CONTACTS</div>
                        <div>Email: alexkir2304@gmail.com</div>
                        <div>Phone: +79259430423</div>
                        <div>© All rights reserved</div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Footer;