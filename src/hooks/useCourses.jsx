import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxioseSequre";

const useCourses=()=>{
      const [axiosSecure]=useAxiosSecure()
      const {data: courses=[],refetch}=useQuery({
            queryKey:['course'],
            queryFn:async()=>{
                  const res= await axiosSecure.get('/classes');
                  return res.data;
            }
      })
      return [courses,refetch]

}

export default useCourses;