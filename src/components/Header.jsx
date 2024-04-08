import React from 'react'

const Header = () => {
    return (
        <>
            <div className="flex fixed header-container h-16 container-lg min-w-full z-20 overflow-hidden">
                <div className="left w-56  flex justify-center items-center">
                    <img className="w-56 h-20" src="https://www.plantmachineryvehicles.com/cloud/2023/11/15/Atlas-Copco-new-branding-1-1024x388.jpg" alt="" />
                </div>
                <div className="right w-5/6 ">
                    <div className="flex gap-5 items-center">
                        <div>Welcome Ajay Sing</div>
                        <img className="w-10 h-10 rounded-full" src="https://launchwebsitedesign.com/wp-content/uploads/2017/09/josh-d-avatar.jpg" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Header