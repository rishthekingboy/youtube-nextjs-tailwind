import React from 'react'
import { FiMenu } from 'react-icons/fi';
import { AiOutlineSearch } from "react-icons/ai";
import { BsFillMicFill, BsThreeDotsVertical } from "react-icons/bs"
import { IoAppsSharp } from 'react-icons/io5';

const Nav = () => {
    return (
        <div className={'bg-zinc-800 px-8 py-6 flex items-center justify-between'}>
            <div className="flex items-center">
                <div>
                    <FiMenu className={"text-2xl"} />
                </div>
                <div className={'ml-3 text-bold'}>YouTube</div>
            </div>
            <div className={"mx-3"}>
                <div className={'flex items-center'}>
                    <input
                        type={"text"}
                        placeholder="Search"
                        className={'border-zinc-600 border-2 outline-none bg-zinc-900 p-2'}
                    />
                    <span className={'px-3 py-2 border-zinc-600 border bg-zinc-600'}>
                        <AiOutlineSearch
                            className={'text-2xl'}
                        />
                    </span>
                    <span className={"bg-zinc-900 p-2 border  border-zinc-900 rounded-full mx-3"}>
                        <BsFillMicFill
                            className={"text-2xl"}
                        />
                    </span>
                </div>


            </div>
            <div className={'flex items-center'}>
                <div>
                    <IoAppsSharp
                        className={"text-2xl"}
                    />
                </div>
                <div className={'mx-2'}>
                    <BsThreeDotsVertical
                        className={"text-2xl"}
                    />
                </div>
                <div className={'tex-md border border-blue-500 py-2 px-3'}>
                    SIGN IN
                </div>
            </div>
        </div>
    )
}

export default Nav
