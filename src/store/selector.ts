import { useSelector } from "react-redux";

export const useProductSeletor=()=>{
    return useSelector((state) => state)
}