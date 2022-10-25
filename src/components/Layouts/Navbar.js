import React, { Component } from 'react';
import logo from '../../images/logo.gif'

class Navbar extends Component {
    render() {
        const scrollPosition = 0;
        const navItems = [
            { title: "Home", to: "/" },
            { title: "About", to: "/about" },
            { title: "Our Work", to: "/work" },
            { title: "Service", to: "/service" },
        ]
        return (
            <div className="">
                <div className={`w-full flex items-center justify-between px-4 lg:px-20 py-3   fixed z-5 navbar ${scrollPosition === 0 ? '' : ' bg-white filter drop-shadow-lg '}`}>
                    <div className='flex items-center justify-between'>
                        <img
                            class="md:h-10 h-8"
                            src={logo}
                            alt="Logo.gif"
                        />
                        <div className={`uppercase md:text-base text-sm font-bold ${scrollPosition === 0 ? 'text-primary' : 'text-secondary '}`}>
                            DIGI
                        </div>
                    </div>
                    <div className='hidden w-full lg:block md:w-auto'>

                        <ul className='flex flex-col p-4 mt-4 md:flex-row md:space-x-12 md:mt-0 items-center'>
                            <div className={`flex items-center space-x-12 py-2 pr-4 pl-3 text-xs hover:text-secondary md:p-0  ${scrollPosition === 0 ? 'text-primary' : 'text-secondary '}`}>{navItems.map((i, n) => (<li key={n}>{i.title}</li>))}</div>

                            <div>
                                <button
                                    class="bg-primary px-6 py-2 rounded-full text-white text-xs"
                                >
                                    Contact
                                </button>
                            </div>
                        </ul>
                    </div>

                </div>

            </div>
        );
    }
}

export default Navbar;