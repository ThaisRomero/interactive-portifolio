import { useEffect, useState } from 'react'

export function useTyping(
    words: string[],
    typingSpeed = 90,
    deletingSpeed = 45,
    pause = 1800
) {
    const [text, setText] = useState('')
    const [wordIndex, setWordIndex] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)

    useEffect(() => {

        const currentWord = words[wordIndex]

        if (!currentWord) return

        let delay = isDeleting
            ? deletingSpeed
            : typingSpeed

        if (!isDeleting && text === currentWord) {
            delay = pause
        }

        const timeout = setTimeout(() => {

            if (!isDeleting && text === currentWord) {

                setIsDeleting(true)

            } else if (isDeleting && text === '') {

                setIsDeleting(false)
                setWordIndex(prev => (prev + 1) % words.length)

            } else {

                setText(
                    currentWord.substring(
                        0,
                        text.length + (isDeleting ? -1 : 1)
                    )
                )

            }

        }, delay)

        return () => clearTimeout(timeout)

    }, [
        text,
        wordIndex,
        isDeleting,
        words,
        typingSpeed,
        deletingSpeed,
        pause
    ])

    return text
}