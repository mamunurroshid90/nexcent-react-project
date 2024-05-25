import React from "react";

const Service = () => {
  const services = [
    {
      id: 1,
      title: "Membership Organisations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
      icon: "/public/images/cart-icons/Icon1.png",
    },
    {
      id: 2,
      title: "National Associations",
      desc: "Our membership management software provides full automation of membership renewals and payments",
      icon: "/public/images/cart-icons/Icon2.png",
    },
    {
      id: 3,
      title: "Clubs And Groups",
      desc: "Our membership management software provides full automation of membership renewals and payments",
      icon: "/public/images/cart-icons/Icon3.png",
    },
  ];
  return (
    <div className=" md:px-14 px-4 py-16 max-w-screen-2xl mx-auto" id="service">
      <div className=" text-center my-8">
        <h2 className=" text-4xl text-neutralDGrey font-semibold mb-2">
          Our Clients
        </h2>
        <p className=" text-neutralGrey">
          We have been working with some Fortune 500+ clients
        </p>
        {/* company name */}
        <div className=" my-12 flex flex-wrap justify-between items-center gap-8">
          <img src="/images/company/company1.png" alt="company1" />
          <img src="/images/company/company2.png" alt="company2" />
          <img src="/images/company/company3.png" alt="company3" />
          <img src="/images/company/company4.png" alt="company4" />
          <img src="/images/company/company5.png" alt="company5" />
          <img src="/images/company/company6.png" alt="company6" />
          <img src="/images/company/company7.png" alt="company7" />
        </div>
      </div>

      {/* service card */}
      <div className=" mt-20 md:w-1/2 mx-auto text-center">
        <h2 className=" text-4xl text-neutralDGrey font-semibold mb-3">
          Manage your entire community in a single system
        </h2>
        <p className=" text-neutralGrey">Who is Nextcent suitable for?</p>
      </div>
      {/* cards */}
      <div className=" mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className=" px-4 py-8 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300 flex items-center justify-center"
          >
            <div className="">
              <div className=" bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
                <img className=" -ml-5" src={service.icon} alt="icon" />
              </div>
              <h4 className=" text-2xl text-neutralDGrey font-bold mb-2 px-2">
                {service.title}
              </h4>
              <p className=" text-sm text-neutralGrey">{service.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;
