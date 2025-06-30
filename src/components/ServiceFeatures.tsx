import React from "react";

import TrophyIcon from "../assets/icons/trophy.svg";
import GuaranteeIcon from "../assets/icons/guarantee.svg";
import ShippingIcon from "../assets/icons/shipping.svg";
import CustomerSupportIcon from "../assets/icons/customer-support.svg";

interface FeatureItemProps {
  icon: string;
  title: string;
  description: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start gap-y-1 lg:gap-x-[0.625rem] w-full px-2 py-2 text-center lg:text-left">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-8 h-8 sm:w-14 sm:h-8 lg:w-[3.75rem] lg:h-[3.75rem] flex-shrink-0"
      />
      <div>
        <h3 className="text-[#242424] font-poppins text-base sm:text-lg lg:text-[1rem] font-semibold leading-tight whitespace-nowrap">
          {title}
        </h3>
        <p className="text-[#898989] font-poppins text-sm sm:text-base lg:text-[0.7rem] font-medium leading-snug whitespace-nowrap">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceFeatures: React.FC = () => {
  return (
    <div className="w-full py-[6.25rem] px-4 md:px-8 flex-shrink-0 bg-[#FAF3EA]">
      <div className="container mx-auto grid grid-cols-2 lg:grid-cols-4 gap-y-8 md:gap-y-12 gap-x-4 md:gap-x-8 justify-items-center">
        <FeatureItem
          icon={TrophyIcon}
          title="High Quality"
          description="crafted from top materials"
        />
        <FeatureItem
          icon={GuaranteeIcon}
          title="Warranty Protection"
          description="Over 2 years"
        />
        <FeatureItem
          icon={ShippingIcon}
          title="Free Shipping"
          description="Order over 150 $"
        />
        <FeatureItem
          icon={CustomerSupportIcon}
          title="24 / 7 Support"
          description="Dedicated support"
        />
      </div>
    </div>
  );
};

export default ServiceFeatures;
