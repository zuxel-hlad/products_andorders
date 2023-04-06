export const addDeltaXScroll = (element: string) => {
    const scrollableContainer = document.querySelector(element) as HTMLElement;
    
    if (scrollableContainer) {
        if (!scrollableContainer) return;
        let isMouseDown = false;
        let startX: number;
        const handleMousedown = (event: MouseEvent) => {
            isMouseDown = true;
            startX = event.clientX;
        };
        const handleMouseup = () => {
            isMouseDown = false;
        };

        const handleMousemove = (event: MouseEvent) => {
            if (isMouseDown) {
                let deltaX = startX - event.clientX;
                scrollableContainer.scrollLeft += deltaX;
                startX = event.clientX;
            }
        };
        scrollableContainer.addEventListener('mousedown', handleMousedown);

        document.addEventListener('mouseup', handleMouseup);

        scrollableContainer.addEventListener('mousemove', handleMousemove);
    }
};

export const removeDeltaXScroll = (element: string) => {
    const scrollableContainer = document.querySelector(element) as HTMLElement;

    if (scrollableContainer) {
        let isMouseDown = false;
        let startX: number;
        const handleMousedown = (event: MouseEvent) => {
            isMouseDown = true;
            startX = event.clientX;
        };
        const handleMouseup = () => {
            isMouseDown = false;
        };

        const handleMousemove = (event: MouseEvent) => {
            if (isMouseDown) {
                let deltaX = startX - event.clientX;
                scrollableContainer.scrollLeft += deltaX;
                startX = event.clientX;
            }
        };
        scrollableContainer.removeEventListener('mousedown', handleMousedown);

        document.removeEventListener('mouseup', handleMouseup);

        scrollableContainer.removeEventListener('mousemove', handleMousemove);
    }
};
