import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioseSequre";

const useCart = () => {
      const [axiosSecure]=useAxiosSecure()
      const { user, loading } = useAuth()
      
      const { data: selectedCourse = [], refetch } = useQuery({
            queryKey: ['selectedCart', user?.email],
            enabled: !loading && !!user?.email && !!localStorage.getItem("access_token"),
            queryFn: async () => {
                  const res= await axiosSecure.get(`/selectCourse?email=${user?.email}`);
                  return res.data;
            }
      })
      return [selectedCourse, refetch]
}

export default useCart;