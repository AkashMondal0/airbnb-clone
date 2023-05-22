'use client'
import React, { useCallback } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar'
import MenuItem from './MenuItem'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'

const UserMenu = () => {
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()
    const [isOpen, setIsOpen] = React.useState(false)
    const toggle = useCallback(() => setIsOpen((isOpen) => !isOpen), [])
    return (
        <div className='relative'>
            <div className=' flex flex-row items-center gap-3'>
                <div onClick={() => { }}
                    className='
            hidden
            md:block
            text-sm
            font-semibold
            py-3
            px-4
            rounded-full
            hover:bg-neutral-100
            transition
            cursor-pointer
            '>
                    Airbnb your home
                </div>
                <div onClick={toggle}
                    className='
            p-4
            md:px-2
            md:py-1
            border-[1px]
            border-neutral-200
            flex
            flex-row
            items-center
            gap-3
            rounded-full
            cursor-pointer
            hover:shadow-md
            transition
            '>
                    <AiOutlineMenu />
                    <div className='hidden md:block'>
                        <Avatar />
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='
            absolute
            rounded-xl
            shadow-md
            w-[40vw]
            md:w-3/4
            bg-white
            overflow-hidden
            right-0
            top-12
            text-sm
            '>
                    <div className='flex flex-col cursor-pointer'>
                        <>
                            <MenuItem label='Sign In' onClick={loginModal.open} />
                            <MenuItem label='Sign Up' onClick={registerModal.open} />
                        </>
                    </div>
                </div>
            )}
        </div>
    )
}

export default UserMenu