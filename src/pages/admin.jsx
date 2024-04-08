import React from 'react'

const admin = () => {
    return (
        <div className="flex container-md justify-between sm:ml-56  px-4 sm:pt-20">
            <div className="container-md w-full bg-white rounded-md p-5">
                <h2 className='text-center bg-slate-200 text-xl'>Admin</h2>
                <div class="flex flex-col">
                    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                            <div class="overflow-scroll min-h-24">
                                <table
                                    class="min-w-full text-left text-sm font-light text-surface text-black">
                                    <thead
                                        class="w-full border-neutral-200 font-medium dark:border-white/10 background-green">
                                        <tr>
                                            <th scope="col" class="px-6 py-4">#</th>
                                            <th scope="col" class="px-6 py-4">First</th>
                                            <th scope="col" class="px-6 py-4">Last</th>
                                            <th scope="col" class="px-6 py-4">Handle</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr class="border-b border-neutral-200 dark:border-white/10">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">1</td>
                                            <td class="whitespace-nowrap px-6 py-4">Mark</td>
                                            <td class="whitespace-nowrap px-6 py-4">Otto</td>
                                            <td class="whitespace-nowrap px-6 py-4">@mdo</td>
                                        </tr>
                                        <tr class="border-b border-neutral-200 dark:border-white/10">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                            <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                            <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                            <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                        </tr>
                                        <tr class="border-b border-neutral-200 dark:border-white/10">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                            <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                            <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                            <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                        </tr>
                                        <tr class="border-b border-neutral-200 dark:border-white/10">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">2</td>
                                            <td class="whitespace-nowrap px-6 py-4">Jacob</td>
                                            <td class="whitespace-nowrap px-6 py-4">Thornton</td>
                                            <td class="whitespace-nowrap px-6 py-4">@fat</td>
                                        </tr>
                                        <tr class="border-b border-neutral-200 dark:border-white/10">
                                            <td class="whitespace-nowrap px-6 py-4 font-medium">3</td>
                                            <td class="whitespace-nowrap px-6 py-4">Larry</td>
                                            <td class="whitespace-nowrap px-6 py-4">Wild</td>
                                            <td class="whitespace-nowrap px-6 py-4">@twitter</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default admin