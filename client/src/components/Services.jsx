import { BsShieldFillCheck } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { RiHeart2Fill } from "react-icons/ri";

const ServiceCard = ({ color, title, icon, subtitle }) => (
    <div className="flex flex-row justify-start items-start p-3 m-2 cursor-pointer hover:shadow-xl">
      <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`}>
        {icon}
      </div>
      <div className="ml-5 flex flex-col flex-1">
        <h3 className="mt-2 text-white text-lg">{title}</h3>
      </div>
    </div>
  );
  

const Services = () => {
    return(
        <div className="flex w-full justify-center items-center gradient-bg-services">
            <div className="flex mf:flex-row flex-center justify-between mt:p-20 py-12 px-4">
                <div className="flex-1 flex flex-col justify-center items-center">
                <ServiceCard
          color="bg-[#2952E3]"
          title="Security Guaranteed"
          icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-[#8945F8]"
          title="Best Exchange Rates"
          icon={<BiSearchAlt fontSize={21} className="text-white" />}
        />
        <ServiceCard
          color="bg-[#F84550]"
          title="Fast Transactions"
          icon={<RiHeart2Fill fontSize={21} className="text-white" />}
        />
                </div>
            </div>
        </div>
    );
}
export default Services;