import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";

const useEnroll=()=>{
      const {user,loading}=useAuth()
      const token = localStorage.getItem('access_token');
      const {data : enrolls=[],refetch}=useQuery({
            queryKey:['enroll',user?.email],
            enabled:!loading && !!user?.email && !!localStorage.getItem("access_token"),
            queryFn:async()=>{
                  const res= await fetch(`http://localhost:3000/enrollCourse?email=${user?.email}`,{
                        headers:{
                              authorization: `Bearer ${token}`
                        }
                  });
                  return res.json()
            }
      })
      return [enrolls,refetch]
}

export default useEnroll;