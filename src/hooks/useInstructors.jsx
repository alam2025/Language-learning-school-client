import { useQuery } from "@tanstack/react-query"

const useInstructors=()=>{
      const {data: instructors=[], refetch}= useQuery({
            queryKey:['instructors'],
            queryFn:async()=>{
                  const res= await fetch('/instructors.json');
                  return res.json()
            }
      })
      return [instructors, refetch];
}

export default useInstructors;