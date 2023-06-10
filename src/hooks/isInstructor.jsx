import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxioseSequre";


const isInstructor=()=>{
      const {user,loading}=useAuth()
      const [axiosSecure]=useAxiosSecure()

      const {data: itInstructor=[],isLoading:itInstructorLoading,refetch}=useQuery({
            queryKey:['isInstructor',user?.email],
            enabled:!loading && !!user?.email && !!localStorage.getItem("access_token"),
            queryFn:async()=>{
                  const res=await axiosSecure.get(`/users/instructor/${user?.email}`);
                  return (res.data.instructor);
            }
      })
      return [itInstructor, itInstructorLoading,refetch]
}

export default isInstructor;