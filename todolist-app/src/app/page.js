'use client'
import MainSectionlayout from "./mainSection/main_section"
import Head from "next/head";
import {useAuth} from './FireBase/auth';

export default function Home() {
// const auth = useAuth() 
    // if (!auth.user) {
    //     return (
    //           <>
    //             <Head>
    //               <title>Todo app</title>
    //               <meta name="description" content="Generated by create next app" />
    //             </Head>
    //             <div className='flex gap-5'>
    //               <span>
    //                 todo
    //               </span>
    //               <a
    //                 href="https://github.com/eaglementality/TODOLISTAPP"
    //                 aria-label="Link to github repo"
    //                 target="_blank"
    //                 rel="noreferrer"
    //               >
    //                 Github
    //               </a>
    //             </div>
    //             <div className='text-center border border-black mt-20'>
    //               <h2 >Sign in</h2>
    //               <button
    //               className='p-2 rounded-lg px-10 border border-black'
    //                 onClick={(e) => {
    //                   auth.signinWithGitHub();
    //                 }}
    //               >
    //                 Login with Github
    //               </button>
    //               <button
    //                 className='p-2 rounded-lg px-10 border border-black'
    //                 onClick={(e) => {
    //                   auth.signinWithGoogle();
    //                 }}
    //               >
    //                 Login with Gmail
    //               </button>
    //             </div>
    //           </>
    //         );
    //     }
    return(
        <>
        <MainSectionlayout/>
        </>)
   
}
