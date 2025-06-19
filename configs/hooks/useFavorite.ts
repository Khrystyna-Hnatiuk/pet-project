import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
// import { addFavorite, removeFavorite } from "";
import {
  addFavorite,
  removeFavorite,
} from "@/lib/store/features/favorites/favoritesSlice";
import { AppDispatch, RootState } from "@/lib/store";

interface IProduct {
    id:number;
    title:string;
    category:string;
    ingredients:string[];
    instructions:string;
    time: string;
    image:string;
}
const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

const useFavorites = () => {
  const dispatch = useDispatch<AppDispatch>();
  const favorites :IProduct[] = useTypedSelector((state) => state.favorites.items);

  const isFavorite = (product: IProduct) :boolean=> {
    return favorites.some((item) => item.id === product.id);
  };

  const toggleFavorite = (product: IProduct): void => {
    if (isFavorite(product)) {
      dispatch(removeFavorite(product.id));
    } else {
      dispatch(addFavorite(product));
    }
  };
  return { isFavorite, toggleFavorite };
};
export default useFavorites;
