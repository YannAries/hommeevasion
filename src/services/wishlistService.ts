import api from "./api";
import { urlConst } from "../utilities/constants";

export const wishlistService = {
  getWishlistById,
  getWishlistByUser,
  removeFromWishlist,
  addToWishlist,
};

function getWishlistById(id: string) {
  return api.get(urlConst.WISHLIST + `/${id}?_expand=product&_expand=user`);
}

function getWishlistByUser(userId: string) {
  return api.get(
    urlConst.WISHLIST + `?userId=${userId}&_expand=product&_expand=user`
  );
}

function addToWishlist(data: any) {
  return api
    .post(urlConst.WISHLIST, data)
    .then((res) => getWishlistById(res.data.id));
}

function removeFromWishlist(id: number) {
  return api.delete(urlConst.WISHLIST + `/${id}`);
}
