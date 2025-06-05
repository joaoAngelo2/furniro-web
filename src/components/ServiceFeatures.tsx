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
    <div className="flex items-center gap-[0.625rem]">
      <img
        src={icon}
        alt={`${title} icon`}
        className="w-[3.75rem] h-[3.75rem] flex-shrink-0"
      />
      <div>
        <h3 className="text-[#242424] font-poppins text-[1.5625rem] font-semibold leading-[150%]">
          {title}
        </h3>
        <p className="text-[#898989] font-poppins text-[1.25rem] font-medium leading-[150%]">
          {description}
        </p>
      </div>
    </div>
  );
};

const ServiceFeatures: React.FC = () => {
  return (
    <div className="flex w-full h-[16.875rem] py-[6.25rem] px-0 flex-col justify-between items-center flex-shrink-0 bg-[#FAF3EA] mx-auto">
      <div className="flex justify-between w-full px-[6.25rem]">
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
