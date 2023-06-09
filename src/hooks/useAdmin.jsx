import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioseSequre";

const useAdmin=()=>{
      const {user}=useAuth()
      const [axiosSecure]=useAxiosSecure()

      const {data: isAdmin=[],isLoading:isAdminLoading}=useQuery({
            queryKey:['isAdmin',user?.email],
            queryFn:async()=>{
                  const res= axiosSecure.get(`/users/admin/${user?.email}`);
                  return (res.data);
            }
      })
      return [isAdmin, isAdminLoading]
}

export default useAdmin;