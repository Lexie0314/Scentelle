import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from "react-redux";

import { 
  getProductById, 
  getProducts, 
  getProductsByCategory,
  updateProductInFirestore,
  login,
  register,
  getUserInfo,
  updateUserInfo,
  logout,
} from "../api";

export const useProducts = () => {
  const { data, isLoading } = useQuery({
    queryKey: ['products'],
    queryFn: getProducts
  });
  return { data, isLoading };
};

export const useProductsByCategory = (category) => {
  const { data, isLoading } = useQuery({
    queryKey: ['products', category],
    queryFn: () => getProductsByCategory(category),
  });
  return { data, isLoading };
};

export const useProductById = (productId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['product', productId],
    queryFn: () => getProductById(productId),
  });
  return { data, isLoading };
};

export const updateProducts = (productId) => {
  const { data, isLoading } = useQuery({
    queryKey: ['updateProduct', productId],
    queryFn: () => updateProductInFirestore(productId),
  });
  return { data, isLoading };
};

export const useUserInfo = () => {
  const userInfo = useQuery({
    queryKey: ["uid"],
    queryFn: getUserInfo,
    initialData: {},
  });
  console.log(userInfo?.data, 'useUserInfo');
  return userInfo;
};

export const useSignInWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uid"] });
    },
  });
};

export const useRegisterWithEmailPassword = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: register,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uid"] });
    },
  });
};

export const useUpdateProfile = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: updateUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uid"] });
    },
  });
};

export const useLogout = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: logout,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["uid"] });
    },
  });
};
