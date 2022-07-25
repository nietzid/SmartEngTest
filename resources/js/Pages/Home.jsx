import React from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline'
import { Link, Head } from '@inertiajs/inertia-react';
import './Home.css'

export default function Home(props) {
    return(
        <div>
            <Head title={props.title}/>
            <h1>Home</h1>
        </div>
            
    )
}