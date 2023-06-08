import React, { useState } from 'react';
import SectionBanner from '../Shared/SectionBanner';
import SectionTitle from '../Shared/SectionTitle';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useQuery } from '@tanstack/react-query';
import useCourses from '../../hooks/useCourses';
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard';
const Courses = () => {
      const [selectedCategory, setSelectedCategory] = useState([]);

      const [courses] = useCourses()
      const { data: categories = [] } = useQuery({
            queryKey: ['category'],
            queryFn: async () => {
                  const res = await fetch('/category.json');
                  return res.json()
            }
      })
      // console.log(courses);

      const handleTap = (category) => {
            // const clickItems = courses.filter(c => c.category === category);
            // console.log(clickItems);
            setSelectedCategory(category)
      }
      // const handleTabClick = (categoryName) => {
      //       console.log(categoryName);
      //       setSelectedCategory(categoryName);
      //     };
      return (
            <div>
                  <SectionBanner title={'Courses'} route={'Home | Courses'}></SectionBanner>

                  <SectionTitle heading={'choose your course'} subHeading={'Click on the language and select your desert courses'}></SectionTitle>

                  <div className=' my-container'>
                        <Tabs>
                              <div className=' flex justify-center items-center text-xl font-bold'>
                                    <TabList>
                                          {categories.map(category => <Tab onClick={() => handleTap(category.name)} key={category.id}>{category.name}</Tab>)}
                                    </TabList>
                              </div>

                              {categories.map(category => (
                                    <TabPanel key={category.id}>
                                          <div className='w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> 
                                                {courses.filter(course => course.category === category.name && course.status==='Active')
                                                      .map(course => <CourseCard key={course._id} course={course}></CourseCard>)}
                                          </div>
                                    </TabPanel>
                              ))}



                        </Tabs>


                  </div>
            </div>
      );
};

export default Courses;