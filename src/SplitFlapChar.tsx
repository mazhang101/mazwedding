import React, { useState, useEffect, useRef, FC } from 'react';
import type { SplitFlapCharProps } from './types';
import { FLIP_DURATION_MS, CHAR_STAGGER_DELAY } from './constants';

/**
 * Core component for a single animated split-flap character.
 * isFieldReady indicates if the current character belongs to the field that is actively animating.
 */
const SplitFlapChar: FC<SplitFlapCharProps> = ({ char, charIndex, isFieldReady, isStatusCell, transientClass }) => {
    const [isFinal, setIsFinal] = useState<boolean>(false);
    const charRef = useRef<HTMLDivElement>(null);
    // Use non-breaking space for blank characters to maintain width
    const displayChar: string = char === ' ' ? '\u00a0' : char.toUpperCase();

    // Animation logic
    useEffect(() => {
        // Only trigger if the field is ready AND this character hasn't been set yet
        if (isFieldReady && !isFinal) {
            // Delay is based on index within the field
            const delay: number = charIndex * CHAR_STAGGER_DELAY;

            // Flag to conditionally apply the color class
            const applyColor = isStatusCell && transientClass;

            const flipTimeout = setTimeout(() => {
                const flapElement = charRef.current?.querySelector('.flap') as HTMLDivElement | null;
                if (flapElement) {

                    if (applyColor) {
                        // Apply color class to both the cell container and the flap just before the flip
                        charRef.current?.classList.add(transientClass);
                        flapElement.classList.add(transientClass);
                    }

                    // 1. Start the flip
                    flapElement.classList.add('flipping');

                    // 2. Character Swap (at 90deg rotation)
                    setTimeout(() => {
                        flapElement.textContent = displayChar;

                        // 3. Complete the flip
                        flapElement.style.transform = 'rotateX(0deg)';
                        flapElement.style.transition = 'transform 0s';

                        setIsFinal(true);

                    }, FLIP_DURATION_MS);

                    // 4. Reset transitions
                    setTimeout(() => {
                        flapElement.classList.remove('flipping');
                        flapElement.style.transition = `transform ${FLIP_DURATION_MS}ms ease-out`;

                        // We intentionally DO NOT remove the color class here
                        // if 'applyColor' is true, ensuring it remains visible
                        // after the animation is finished.

                    }, FLIP_DURATION_MS + 50);
                }
            }, delay);

            return () => clearTimeout(flipTimeout);
        }
    }, [isFieldReady, isFinal, charIndex, displayChar, isStatusCell, transientClass]);

    const initialFlapContent: string = ' ';

    return (
        <div
            ref={charRef}
            className={`char-cell`}
            data-char={displayChar}
        >
            <div className="flap" style={{ transitionDuration: `${FLIP_DURATION_MS}ms` }}>
                {isFinal ? displayChar : initialFlapContent}
            </div>
        </div>
    );
};

export default SplitFlapChar;
