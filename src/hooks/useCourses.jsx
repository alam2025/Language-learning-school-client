import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxioseSequre";
import useAuth from "./useAuth";

const useCourses=()=>{
      const {loading,user}=useAuth()
      const [axiosSecure]=useAxiosSecure()
      const {data: courses=[],refetch}=useQuery({
            queryKey:['course'],
            enabled:!loading && !!user?.email && !!localStorage.getItem("access_token"),
            queryFn:async()=>{
                  const res= await axiosSecure.get('/classes');
                  return res.data;
            }
      })
      return [courses,refetch]

}

export default useCourses;