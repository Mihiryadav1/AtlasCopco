import React from 'react'
import { Link } from 'react-router-dom'
const sidebar = () => {
    return (
        <>
            <div className="sidebar">
                <aside id="default-sidebar" class="fixed left-0 top-16 z-40 w-56 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">

                    <div class="h-full px-3 py-4 overflow-y-auto bg-white">
                        <ul class="space-y-10 font-medium">

                            <li>
                                <a href="#" class="flex items-center p-2 sidebar-links rounded-lg hover:text-white group sidebar-links">
                                    <svg class="flex-shrink-0 w-5 h-5 sidebar-links transition duration-75 dark:text-green-900 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">

                                        <Link to="/admin">Registered User</Link>
                                    </span>
                                </a>
                            </li>

                            <li>
                                <a href="#" class="flex items-center p-2 text-green-900 rounded-lg hover:text-white sidebar-links group">
                                    <svg class="flex-shrink-0 w-5 h-5 sidebar-links transition duration-75 dark:text-green-900 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">

                                        <Link to="#">Create Dataset</Link>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2 text-green-900 rounded-lg hover:text-white sidebar-links group">
                                    <svg class="flex-shrink-0 w-5 h-5 sidebar-links transition duration-75 dark:text-green-900 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">

                                        <Link to="/roles"> Roles</Link>
                                    </span>
                                </a>
                            </li>
                            <li>
                                <a href="#" class="flex items-center p-2 text-green-900 rounded-lg hover:text-white sidebar-links group">
                                    <svg class="flex-shrink-0 w-5 h-5 sidebar-links transition duration-75 dark:text-green-900 group-hover:text-white dark:group-hover:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                                        <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                                        <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                                    </svg>
                                    <span class="flex-1 ms-3 whitespace-nowrap">
                                        <Link to="/"> Log Out</Link>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    )
}

export default sidebar