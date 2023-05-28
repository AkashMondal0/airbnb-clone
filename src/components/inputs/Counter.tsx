'use Client'
import React, { useCallback } from 'react'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'

interface CounterProps {
    title: string
    value: number
    onChange: (value: number) => void
    subtitle: string
}

const Counter = ({
    title,
    value,
    onChange,
    subtitle
}: CounterProps) => {

    const onAdd = useCallback(() => {
        onChange(value + 1)
    }, [value, onChange])

    const onReduce = useCallback(() => {
        if (value === 1) {
            return
        }
        onChange(value - 1)
    }, [value, onChange])

    return (
        <div className='flex flex-row items-center justify-between'>
            <div className='flex flex-col'>
                <div className='font-medium'>
                    {title}
                </div>
                <div className='text-gray-600 font-light w-80'>
                    {subtitle}
                </div>
            </div>

            <div className='flex flex-row items-center gap-4'>
                <button
                    onClick={onReduce}
                    className='w-10 h-10 rounded-full hover:opacity-80 transition border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer'>
                    <AiOutlineMinus />
                </button>
            </div>
            <div className='font-light text-xl text-neutral-600'>
                {value}
            </div>
            <div className='flex flex-row items-center gap-4'>
                <button
                    onClick={onAdd}
                    className='w-10 h-10 rounded-full hover:opacity-80 transition border-[1px] border-neutral-400 flex items-center justify-center text-neutral-600 cursor-pointer'>
                    <AiOutlinePlus />
                </button>
            </div>
        </div>
    )
}

export default Counter