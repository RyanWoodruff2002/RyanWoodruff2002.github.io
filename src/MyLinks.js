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
            // <div className="grid justify-items-center items-center h-screen">
                <ul className="grid justify-items-center items-center">
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <br/>
                    <p className="text-xl">Linkedin: <a className="text-purple-700 no-underline hover:underline ..." target="_blank" href="https://www.linkedin.com/in/ryan-woodruff-99295b246/" >https://www.linkedin.com/in/ryan-woodruff-99295b246/</a></p>
                    <br/>
                    <br/>
                    <p className="text-xl">GitHub: <a className="text-purple-700 no-underline hover:underline ..." target="_blank" href="https://github.com/RyanWoodruff2002" >https://github.com/RyanWoodruff2002</a></p>
                    <br/>
                    <br/>
                    <p className="text-xl">Technical Blog: <a className="text-purple-700 no-underline hover:underline ..." target="_blank" href="https://medium.com/@ryanwoodruff2002" >https://medium.com/@ryanwoodruff2002</a></p>
                    <br/>
                    <br/>
                    <p className="text-xl">Resume: <a className="text-purple-700 no-underline hover:underline ..." target="_blank" href="https://docs.google.com/document/d/17KnkWZXcEuDx6dSomRPp4Cu37WaO0CgU7bF6WHBXX4k/edit?usp=sharing" >https://docs.google.com/document/d/17KnkWZXcEuDx6dSomRPp4Cu37WaO0CgU7b...</a></p>
                    <br/>
                    <br/>
                    <p className="text-xl">
                        {'Email: ryanwoodruff2002@gmail.com  '}
                        <button className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800" onClick={() => {handleCopy()}}>
                            <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                {copy ? 'Copied to Clipboard!' : 'Copy to Clipboard'}
                            </span>
                        </button>
                    </p>
                    <br/>
                    <br/>
                    <p className="text-xl">Phone #: (814) 596-2385</p>
                </ul>
            // </div>
    )
}

export default Contact