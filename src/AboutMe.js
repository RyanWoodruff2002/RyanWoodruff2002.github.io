import React from "react";

function aboutMe() {
    return (
        <div className="w-screen h-screen grid grid-rows-2 md:grid-cols-2 text-[#00272F] text-2xl">

            <div className="w-full h-full bg-[#1F7A8C] centered md:h-screen">
                <p>
                    image
                </p>
            </div>
            
            <div className="w-full h-full bg-black-800 centered md:h-screen">
                <p className="w-5/6">
                    I recently graduated from Flatiron's software engineering program. I create web apps using a JavaScript and React front-end with a Ruby on Rails back-end. 
                <br/>
                <br/>
                    After graduating high school I pursued a computer science degree at Jamestown Community College. From there I decided to further my education with a faster-paced bootcamp. After some careful consideration I decided Flatiron was the best choice for me.
                <br/>
                <br/>
                    During my time at Jamestown Community College I learned Python, Java, computer hardware & system software, intro to networking, data structures, systems analysis, and database management.
                <br/>
                <br/>
                    During my time at Flatiron I worked on several projects as a team and as an individual where I learned; JavaScript, React, Ruby, SQLite, Ruby on Rails, PostgreSQL, Tailwind, and Bootstrap. 
                <br/>
                <br/>
                    My goal now is to continue growing and learning new technologies through a career as a full stack developer.
                </p>
            </div>

        </div>
    )
}

export default aboutMe