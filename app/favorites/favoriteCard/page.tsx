import React from "react";

// import activeFavorite from '@/components/images/activeFacouriteLight.svg';    
// import notActiveFavorite from '@/components/images/notActiveFavoriteLight.svg'
import { useTheme } from "@/components/theme/ThemeContext";
interface FavoriteCardProps {
  isFavorite: boolean;
  onClick: () => void;
}
const activeFavorite = "/images/activeFacouriteLight.svg";
const notActiveFavorite = "/images/notActiveFavoriteLight.svg";

const FavoriteCard:React.FC<FavoriteCardProps> = ({ isFavorite, onClick }) => {
    const icon = isFavorite ? activeFavorite : notActiveFavorite;
    const {theme}= useTheme()

    return (
        <div onClick={onClick} className="w-full flex flex-row  cursor-pointer">
            <img
                src={icon}
                alt="Favorite"
                className="w-8 h-8 mt-4 "
            />
            {!isFavorite && (
                <p className={`rounded mt-5 w-[200px] text-center h-[30px] ${theme === 'dark' ? 'hover:text-[rgb(210,6,6)]' : 'hover:text-[rgb(200,10,10)]'}`}>
                    Add to favorites
                </p>
            )}
            {isFavorite && (
                <p className={`rounded mt-4 w-[200px] text-center h-[30px] ${theme === 'dark' ? 'hover:text-[rgb(210,6,6)]' : 'hover:text-[rgb(200,10,10)]'}`}>
                    Remove from favorites
                </p>
            )}
        </div>
      
    );
};

export default FavoriteCard;
