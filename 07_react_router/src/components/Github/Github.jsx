import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom' // This hook provides the value returned from your route loader.


const Github = () => {
    // Now, we want to call an API when our component is mounted.

    // let [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/tirth2014')
    //         .then(response => response.json())
    //         .then(userdata => {
    //             console.log('data fetched directly.');
    //             console.log(userdata);
    //             setData(userdata);

    //             // print all followers data
    //             fetch(userdata.followers_url)
    //                 .then(res => res.json())
    //                 .then(followersData => {
    //                     console.log(followersData);
    //                 })
    //         }
    //         )
    // }, [])
    

    // We can optimize API fetching process a little bit using loader.
    // It'll now, start fetching the data on event start like even if we just hover to Github navbar link 
    // then fetching will start.

    const data = useLoaderData() //  It will return the data from the nearest route on context.

    return (
        <div className='mx-auto max-w-screen-xl text-center bg-gray-700 text-white p-4 m-4 text-2xl'>
            <div>Github followers: {data.followers}
                <div>Github following: {data.following}
                </div>

                <div className='flex justify-center'>
                    <img src={data.avatar_url} alt="github profile picture" width={300} />
                </div>
            </div>
        </div>
    )
}

export default Github


export const githubInfoLoader = async() => {
    const response = await fetch('https://api.github.com/users/tirth2014')
    console.log('github data fetched......');
    return response.json()  // return a promise from which we can get data by doing .then
}




/*
The useEffect() hook is a React hook that allows you to perform side effects in your components. 
Side effects are actions that have an impact on the outside world, 
such as fetching data from an API or updating the DOM.

The useEffect() hook takes two arguments:

*The first argument: 
is a function that is called after the component mounts. This function can be used to perform side effects.

*The second argument:
(optional) is an array of dependencies. The useEffect() hook will only be called if the values in the array have changed. 
This allows you to control when the side effect is run.

The useEffect() hook is a powerful tool that allows you to perform side effects in your React components. 
By using the useEffect() hook, you can control when the side effect is run and you can prevent the side effect from being run unnecessarily.

Here are some additional examples of using the useEffect() hook:
 -> Updating the DOM
 -> Subscribing to events
 -> Calling an API
 -> Animating elements
 -> Cleaning up after an effect
*/