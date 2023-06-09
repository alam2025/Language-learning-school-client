import { useQuery } from "@tanstack/react-query"
import useAuth from "./useAuth";

const useInstructors=()=>{
      const {loading,user}=useAuth()
      const {data: instructors=[], refetch}= useQuery({
            queryKey:['instructors'],
            enabled:!loading ,
            queryFn:async()=>{
                  const res= await fetch('http://localhost:3000/instructors');
                  return res.json()
            }
      })
      return [instructors, refetch];
}

export default useInstructors;