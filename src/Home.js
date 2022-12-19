import React from "react";

function Home() {

    return (
        <div>
            <div className='bg-[#1F7A8C] pt-10 pb-10 grid grid-cols-2 gap-4'>
                <img className="flex mx-auto" src="https://scontent.fagc1-2.fna.fbcdn.net/v/t1.15752-9/319560121_667775771552533_6028710771680596005_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=Y2ee1ScU-NEAX9aPAbu&_nc_ht=scontent.fagc1-2.fna&oh=03_AdTnBmRrBKNBjDB8oSEBlTIkt2m29P_Esx2Hlha7dHC1Vg&oe=63C5FF61"></img>
                <p className="flex text-5xl centered text-white">HELLO, I’M RYAN WOODRUFF <br/> A FULL STACK DEVELOPER</p>
            </div>
            <div >
                <p className="text-xl p-10 text-[#00272F]">
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

export default Home