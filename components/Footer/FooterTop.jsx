import Icon from "../Icon"

function FooterTop() {
  return (
    <div className="flex justify-center items-center py-8 mobile:hidden">

      <div className="flex items-center gap-10">
        <Icon iconType="bi" iconName="BiLogoVisa" iconColor="text-neutral-900" classname="text-6xl"/>
        <Icon iconType="bi" iconName="BiLogoPaypal" iconColor="text-neutral-900" classname="text-6xl"/>
        <Icon iconType="si" iconName="SiApplepay" iconColor="text-neutral-900" classname="text-6xl"/>
        <Icon iconType="fa" iconName="FaGooglePay" iconColor="text-neutral-900" classname="text-6xl"/>
        <Icon iconType="fa" iconName="FaAmazonPay" iconColor="text-neutral-900" classname="text-6xl"/>
        <Icon iconType="fa" iconName="FaCcMastercard" iconColor="text-neutral-900" classname="text-6xl"/>
      </div>

    </div>
  )
}

export default FooterTop