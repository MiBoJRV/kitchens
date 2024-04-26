import SocialIcon_1 from '../../assets/images/facebook-circle.svg';
import SocialIcon_2 from '../../assets/images/tweeter-circle.svg';
import SocialIcon_3 from '../../assets/images/instagram-circle.svg';

export const FOOTER_ITEMS = [
    {
        id : 1,
        blockTitle: "About",
        items: [
            {title: "Shop", href: "#"},
            {title: "Plan My Kitchen", href: "#"},
            {title: "About Us", href: "#"},
            {title: "Gallery", href: "#"},
        ],
    },
    {
        id: 2,
        blockTitle: "Service",
        items: [
            {title: "FAQ", href: "#"},
            {title: "Contact", href: "#"},
            {title: "How to Buy", href: "#"},
            {title: "Downloads", href: "#"},
        ],
    },
    {
        id: 3,
        blockTitle: "Info",
        items: [
            {title: "Delivery", href: "#"},
            {title: "Terms", href: "#"},
            {title: "Privacy", href: "#"},
        ],
    },

    {
        id: 4,
        blockTitle: "Follow",
        classNames: "socials",
        items: [
            {icon: SocialIcon_1, href: "#"},
            {icon: SocialIcon_2, href: "#"},
            {icon: SocialIcon_3, href: "#"},
        ],
    },
];
