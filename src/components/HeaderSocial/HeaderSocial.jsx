import {SOCIAL_ITEMS} from "./constants.jsx";
import {SocialList} from "./Styles.jsx";

export const HeaderSocial = ({className}) => {
    return (
        <SocialList className={className}>
           {SOCIAL_ITEMS.map((item, id) => (
               <li key={item.id}>
                   <a href={item.href}>
                       <img src={item.icon} alt="icon"/>
                   </a>
               </li>
           ))}
        </SocialList>
    )
}