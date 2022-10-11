import React, { useState } from "react";
import Member from "../pages/memberPage"
import { LoginForm } from '../components/LoginForm'
import { RegisterForm } from '../components/RegisterForm'

const Modal = () => {
  const [showModal, setShowModal] = useState(false);
  const [isLogin, setIsLogin] = useState('Login')
  return (
    <>
      <button
        className="bg-primary hover:bg-primary-darker text-white active:bg-blue-500 
      font-bold px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Login
      </button>
      {showModal ? (
        <>
          <div className="flex justify-center items-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t ">
                  
                  <button
                    className="bg-transparent border-0 text-black float-right"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="text-black opacity-7 h-6 w-6 text-xl block bg-gray-400 py-0 rounded-full">
                      x
                    </span>
                  </button>
                </div>
                <div className="relative p-6 flex-auto">

                <div className='w-full p-8 lg:w-1/2'>
            {/*<h2 className='text-2xl font-semibold text-gray-600 text-center'>
            {brand}
            </h2>*/}
            <a
              onClick={() => {
                setIsLogin(!isLogin)
              }}
              className='flex items-center justify-center mt-4 text-white rounded-lg shadow-md hover:bg-gray-100'
            >
              <h1 className='px-4 py-3 w-5/6 text-center text-gray-600 font-bold'>
                {isLogin ? 'Become Member' : 'Back to Login'}
              </h1>
            </a>
            <div className='mt-4 flex items-center justify-between'>
              <span className='border-b border-red-700 w-1/5 lg:w-1/4'></span>
              <a
                href='#'
                className='text-xs text-center text-gray-500 uppercase'
              >
                {isLogin ? 'Login' : 'Register'}
              </a>
              <span className='border-b w-1/5 border-red-700 lg:w-1/4'></span>
            </div>
            {isLogin ? (
              <LoginForm />
            ) : (
              <RegisterForm />
            )}
          </div>
                  
                </div>
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Close
                  </button>
                  <button
                    className="text-white bg-yellow-500 active:bg-yellow-700 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default Modal;