import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioseSequre";

const useAdmin=()=>{
      const {user,loading}=useAuth()
      const [axiosSecure]=useAxiosSecure()

      const {data: isAdmin=[],isLoading:isAdminLoading}=useQuery({
            queryKey:['isAdmin',user?.email],
            enabled:!loading && !!user?.email && !!localStorage.getItem("access_token"),
            queryFn:async()=>{
                  const res=await axiosSecure.get(`/users/admin/${user?.email}`);
                  return (res.data.admin);
            }
      })
      return [isAdmin, isAdminLoading]
}

export default useAdmin;