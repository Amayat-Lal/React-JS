import React from 'react'

function Card({ username = "Amayat Lal", role = "Frontend Developer", image = "https://i0.wp.com/www.appdemovideos.com/wp-content/uploads/2017/02/photo_39424_20150718.jpg?w=970&ssl=1" }) {
    // console.log(props)
    return (
        <div>
            <figure className="md:flex bg-slate-100 rounded-xl p-8 md:p-0 mb-8 dark:bg-slate-800">
                <img className="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto"
                    src={image} alt="image" width="384" height="512" />
                <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                    <blockquote>
                        <p className="text-lg font-medium">
                            “Tailwind CSS is the only framework that I've seen scale on large teams. It’s easy to customize, adapts to any design, and the build size is tiny.”
                        </p>
                    </blockquote>
                    <figcaption className="font-medium">
                        <div className="text-sky-500 dark:text-sky-400">
                            {username}
                        </div>
                        <div className="text-slate-700 dark:text-slate-500">
                            {role}
                        </div>
                    </figcaption>
                </div>
            </figure>
        </div>
    )
}

export default Card