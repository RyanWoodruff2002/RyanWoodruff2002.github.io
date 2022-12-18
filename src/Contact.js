import React, {useState} from "react";

function Contact() {

    const email = 'ryanwoodruff2002@gmail.com'

    const [copy, setCopy] = useState(false)

    function handleCopy() {
        navigator.clipboard.writeText(email)
        setCopy(true)
        console.log('test')
    }

    return (
                <div className="flex">
                    <div className="m-auto pt-64">
                        <a className="text-xl centered mx-auto text-[#1F7A8C] no-underline hover:underline ..." target="_blank" href="https://www.linkedin.com/in/ryan-woodruff-99295b246/" >Linkedin</a>
                        <br/>
                        <br/>
                        <a className="text-[#1F7A8C] text-xl centered mx-auto no-underline hover:underline ..." target="_blank" href="https://github.com/RyanWoodruff2002" >GitHub</a>
                        <br/>
                        <br/>
                        <a className="text-xl centered mx-auto text-[#1F7A8C] no-underline hover:underline ..." target="_blank" href="https://medium.com/@ryanwoodruff2002" >Technical Blog</a>
                        <br/>
                        <br/>
                        <p className="text-xl centered mx-auto">
                            {'Email: ryanwoodruff2002@gmail.com  '}
                            <button className="mx-5 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-[#1F7A8C] to-[#043A45] group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => {handleCopy()}}>
                                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                    {copy ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
                                </span>
                            </button>
                        </p>
                        <br/>
                        <br/>
                        <p className="text-xl centered mx-auto">Phone #: (814) 596-2385</p>
                    </div>
                </div>
    )
}

export default Contact