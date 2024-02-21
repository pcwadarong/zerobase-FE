export const createDom = (parent, child, className, properties) => {
    if (!parent) {
        console.error("Parent element is null or undefined");
        return null; // 혹은 다른 처리를 수행하거나 함수를 종료할 수 있음
    }
    
    const newElement = document.createElement(`${child}`);
    parent.appendChild(newElement);

    if (className != ''){
        newElement.classList.add(`${className}`);
    }
    if (properties && typeof properties === 'object') {
        for (const prop in properties) {
            if (Object.hasOwnProperty.call(properties, prop)) {
                newElement[prop] = properties[prop];
            }
        }
    }
    
    return newElement;
};