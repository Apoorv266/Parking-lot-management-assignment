import React from 'react'
 import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastComponent = () => <ToastContainer autoClose={1000}/>

export const toastFunc = (str) => toast.success(str);

export const errorToastFunc = (str) => toast.error(str);