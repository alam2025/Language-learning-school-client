import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioseSequre";
// import LoadingSpinner from "../pages/Shared/LoadingSpinner";

const useEnroll=()=>{
      const [axiosSecure]=useAxiosSecure()
      const {user,loading}=useAuth()
      
      // const token = localStorage.getItem('access_token');
      const {data : enrolls=[],refetch}=useQuery({
            queryKey:['enroll',user?.email],
            enabled:!loading && !!user?.email && !!localStorage.getItem("access_token"),
            queryFn:async()=>{
                  const res= await axiosSecure.get(`/enrolls?email=${user?.email}`)
                  return res.data
            }
      })
      return [enrolls,refetch]
}

export default useEnroll;