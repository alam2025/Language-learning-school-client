import React, { useState } from 'react';
import DataTable from 'react-data-table-component';
import { ImCross } from "react-icons/im";

import { BsPencil } from "react-icons/bs";
import useAxiosSecure from '../../hooks/useAxioseSequre';

import Swal from 'sweetalert2';

import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';

const Table = ({ courses, refetch }) => {
      const { user } = useAuth();

      const [axiosSecure] = useAxiosSecure()
      const [modalInfo, setModalInfo] = useState('')

      const { register, handleSubmit, reset } = useForm();



      const onSubmit = (data) => {
            const feedback = data.textarea;


            axiosSecure.patch(`/admin/sendFeedback/${modalInfo._id}`, { feedback })
                  .then(res => {
                        if (res.data.modifiedCount) {
                              reset()
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Feedback has been delivered.',
                                    showConfirmButton: false,
                                    timer: 1500
                              })
                        }
                  })
      };

      const columns = [
            {
                  name: 'Image',
                  selector: row => <img className=' rounded-lg px-3 py-2' src={row.image} alt="" />,
                  sortable: true
            },
            {
                  name: 'Class Name',
                  selector: row => row.name,
                  sortable: true
            },
            {
                  name: 'Instructor Name',
                  selector: row => row.instructor,
                  sortable: true
            },
            {
                  name: 'Instructor Email',
                  selector: row => row.email,
                  sortable: true
            },
            {
                  name: 'Available Seats',
                  selector: row => row.available_seats,
                  sortable: true
            },
            {
                  name: 'Price',
                  selector: row => row.price,
                  sortable: true
            },
            {
                  name: 'Approve',
                  selector: row =>
                        <button disabled={row.status === 'Active' || row.status === 'Denied'} onClick={() => handleApprove(row)}
                              className={`btn btn-sm ${row.status === 'Active' ? ' btn-success' : ' btn-warning'} rounded-md  `}>
                              {row.status === 'Active' ? 'approve' : 'Pending'}
                        </button>,
                  sortable: true
            },
            {
                  name: 'Deny',
                  selector: row =>
                        <button onClick={() => handleDeny(row)}
                              disabled={row.status === 'Active' || row.status === 'Denied'} className={` btn btn-warning btn-sm`}>
                              {
                                    (row.status === 'Pending' || row.status === 'Active') ? <ImCross /> : 'Denied'
                              }
                        </button>,
                  sortable: true
            },

            {
                  name: 'Feedback',
                  selector: row => (
                        <button disabled={row.status === 'Active' || row.status === 'Pending'} onClick={() => {
                              window.my_modal_2.showModal();
                              setModalInfo(row)
                        }} className="btn btn-neutral btn-sm" >


                              <BsPencil />


                        </button>
                  ),
                  sortable: true
            },
            {
                  name: 'Action',
                  selector: row => (
                        <button onClick={() => handleDelete(row)}>DELETE</button>
                  )
            }



      ]

      const handleDelete = course => {
            Swal.fire({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  icon: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
                  if (result.isConfirmed) {
                        axiosSecure.delete(`/admin/deleteCourse/${course._id}`)
                        .then(res=>{
                              if(res.data.deletedCount > 0){
                                    refetch()
                                    Swal.fire({
                                          position: 'top-end',
                                          icon: 'success',
                                      
                                          title: 'Your work has been saved',
                                          showConfirmButton: false,
                                          timer: 1500
                                        })
                              }
                        })
                  }
            })
      }


      const handleApprove = course => {

            axiosSecure.patch(`/courseUpdate/admin/${course._id}`)
                  .then(res => {
                        if (res.data.modifiedCount > 0) {
                              refetch()
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Course has been Approved.',
                                    showConfirmButton: false,
                                    timer: 1500
                              })

                        }

                  })

      }

      const handleDeny = course => {
            axiosSecure.patch(`/courseDeny/admin/${course._id}`)
                  .then(res => {
                        if (res.data.modifiedCount > 0) {
                              refetch()
                              Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Course has been Denied',
                                    showConfirmButton: false,
                                    timer: 1500,
                                    
                              })

                        }

                  })
      }




      return (
            <>

                  <DataTable
                        columns={columns}
                        data={courses}
                        //      fixedHeader
                        pagination

                  />
                  <dialog id="my_modal_2" className="modal">
                        <form onSubmit={handleSubmit(onSubmit)} method="dialog" className="modal-box">
                              <div className="modal-content">
                                    <label htmlFor="textarea" className="block text-gray-700 font-bold mb-1">
                                          Textarea
                                    </label>
                                    <textarea
                                          id="textarea"
                                          name="textarea"
                                          className="w-full border border-gray-300 rounded-md px-3 py-2"
                                          {...register('textarea', { required: true })}
                                    ></textarea>

                              </div>


                              <button className=' bg-violet-600 px-6 py-2 rounded-md hover:bg-violet-950 text-white'>Send</button>
                        </form>
                        <form method="dialog" className="modal-backdrop">
                              <button>close</button>
                        </form>
                  </dialog>
            </>


      );
};

export default Table;