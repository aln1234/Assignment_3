import React from 'react';
import {useForm} from "react-hook-form"
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';



const schema = yup
  .object()
  .shape({
    firstname: yup.string().required(),
    lastname: yup.string().required(),
    address:  yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number("Phone Number must be a positive integer").positive().integer().required("Phone number must be a valid number"),
    picture:yup.mixed()
    .test('required', "You need to provide a file", (value) =>{
        return value && value.length
      } )
      .test("fileSize", "The file is too large", (value, context) => {
        return value && value[0] && value[0].size <= 200000;
      }),
    file:yup.mixed()
      .test('required', "You need to provide a file", (value) =>{
          return value && value.length
        } )
        .test("fileSize", "The file is too large", (value, context) => {
          return value && value[0] && value[0].size <= 200000;
        })
       ,
    })

  


function form() {
    const {register,handleSubmit,formState: { errors },} = useForm({
        resolver: yupResolver(schema),
    });
    const onSubmit =(data) => console.log(data);
    console.log(errors)

  return (
    <>
    <div>
      <div className="md:grid md:grid-cols-3 md:gap-6">
        <div className="md:col-span-1">
          <div className="px-4 sm:px-0">
            <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
            <p className="mt-1 text-sm text-gray-600">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form  method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="shadow sm:rounded-md sm:overflow-hidden">
              <div className="px-4 py-5 bg-white space-y-6 sm:p-6">
                  
              <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                      First name
                    </label>
                    <input
                      type="text"
                      name="firstname"
                      id="first-name"
                      autoComplete="given-name"
                      {...register('firstname')}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                    
                    {errors.firstname && <p  className='text-red-500'>{errors.firstname.message}</p>}
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Last name
                    </label>
                    <input
                      type="text"
                      name="lastname"
                      id="last-name"
                      autoComplete="family-name"
                      {...register('lastname')}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                       {errors.lastname && <p  className='text-red-500'>{errors.lastname.message}</p>}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium py-2 px-2  text-gray-700">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      id="last-name"
                      {...register('address')}
                      autoComplete="family-name"
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 py-2 px-2  block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                     {errors.address && <p  className='text-red-500'>{errors.address.message}</p>}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <input
                      type="text"
                      name="email"
                      id="last-name"
                     
                      {...register('email')}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                     {errors.email && <p  className='text-red-500'>{errors.email.message}</p>}
                  </div>
                  <div className="col-span-6 sm:col-span-3">
                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                     Phone Number
                    </label>
                    <input
                      type="number"
                      name="phone"
                      id="last-name"
                     
                      {...register('phone')}
                      className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full py-2 px-2 shadow-sm sm:text-sm border-gray-300 rounded-md"
                    />
                     {errors.phone && <p  className='text-red-500'>Phone Number must be a valid number</p>}
                  </div>


            

                <div>
                  <label className="block text-sm font-medium text-gray-700">Photo</label>
                  <div className="mt-1 flex items-center">
                    <span className="inline-block h-12 w-12 rounded-full overflow-hidden bg-gray-100">
                      <svg className="h-full w-full text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </span>
                    <button
                      type="button"
                      className="ml-5 bg-white py-2 px-3 border border-gray-300 rounded-md shadow-sm text-sm leading-4 font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                    <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 "
                        >
                          <span>Upload a file</span>
                          <input id="file-upload" {...register('picture')} name="picture" type="file"  />
                        </label>
                    </button>
              
                  </div>
                  {errors.picture && <p  className='text-red-500'>{errors.picture.message}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700">CV</label>
                  <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-gray-400"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-gray-600">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                        >
                          <span>Upload a file</span>
                          <input id="file-upload"   {...register('file')} name="file" type="file" className='px-4 py-4' />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-gray-500"> JPG, PDF up to 10MB</p>
                    </div>
                    
                    
                  </div>
                  {errors.picture && <p  className='text-red-500'>{errors.picture.message}</p>}
                </div>
              </div>
              <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>

    <div className="hidden sm:block" aria-hidden="true">
      <div className="py-5">
        <div className="border-t border-gray-200" />
      </div>
    </div>


  </>
  );
}

export default form;
