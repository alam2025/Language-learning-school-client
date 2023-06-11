import React from 'react';
import SectionTitle from '../../pages/Shared/SectionTitle';
import DataTable from 'react-data-table-component';
import useCourses from '../../hooks/useCourses';
import Table from './Table';
import useAuth from '../../hooks/useAuth';
import LoadingSpinner from '../../pages/Shared/LoadingSpinner';

const ManageCourse = () => {
      const {user,loading}=useAuth();

      const [courses,refetch] = useCourses()
      

      if(loading){
            return <LoadingSpinner/>
      }
      

      return (
            <div>
                  <SectionTitle heading={'manage courses'}></SectionTitle>

                  <div className=' my-container'>
                       <Table courses={courses} refetch={refetch}></Table>
                  </div>


            </div>
      );
};

export default ManageCourse;