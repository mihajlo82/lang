import { useState, useEffect, useRef } from 'react'
import { USE_ACTIVE_DEFAULT_TYPES } from '../../types/default_types';

const useActive = ({ itemData, setOnSuccess }) => {
    const [text, setText] = useState('');
    const [isMobile, setIsMobile] = useState(false);
    const [showCounters, setShowCounter] = useState(false);
    const inputRef = useRef();

    useEffect(() => {
        if (window.innerWidth <= 380) setIsMobile(true)
        else setIsMobile(false);
    }, [])

    useEffect(() => {
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 380) setIsMobile(true)
            else setIsMobile(false);
        })
    }, [])

    const checkIsGuessed = () => {
        const lowerText = text.toLowerCase();
        if (lowerText.trim() === itemData?.english) {
            inputRef.current.value = '';
            setText('');
            setOnSuccess(prev => !prev);
        }
    }

    useEffect(() => checkIsGuessed(), [text])

    return { inputRef, text, setText, showCounters, setShowCounter, isMobile }
}

export default useActive;

useActive.defaultProps = USE_ACTIVE_DEFAULT_TYPES;