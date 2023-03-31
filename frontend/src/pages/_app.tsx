import { AppProps } from "next/app";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function App({ Component, pageProps }: AppProps) {
  return(
    <><Component {...pageProps} />
    <ToastContainer autoClose={3000} />
    </>
  ) 

}