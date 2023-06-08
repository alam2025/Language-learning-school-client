import { useQuery } from "@tanstack/react-query";

const useCourses=()=>{
      const {data: courses=[],refetch}=useQuery({
            queryKey:['course'],
            queryFn:async()=>{
                  const res= await fetch('http://localhost:3000/classes');
                  return res.json();
            }
      })
      return [courses,refetch]

}

export default useCourses;