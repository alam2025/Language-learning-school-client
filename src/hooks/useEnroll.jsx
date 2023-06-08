import { useQuery } from "@tanstack/react-query"

const useEnroll=()=>{
      const {data : enrolls=[],refetch}=useQuery({
            queryKey:['enroll'],
            queryFn:async()=>{
                  const res= await fetch('http://localhost:3000/enrollCourse');
                  return res.json()
            }
      })
      return [enrolls,refetch]
}

export default useEnroll;