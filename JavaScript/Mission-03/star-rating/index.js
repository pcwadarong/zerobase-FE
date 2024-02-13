const StarRating = ($container) => {
    const maxRating = parseInt($container.dataset.maxRating);

    // 컨테이너 생성
    const starContainer = document.createElement('span');
    starContainer.className = "star-rating-container";

    // 최대 값에 맞춰 별 생성
    for (let i = 1; i <= maxRating; i++) {
        const starElement = document.createElement('i');
        starElement.className = "bx bxs-star";
        starContainer.appendChild(starElement);
    }
    $container.appendChild(starContainer);

    //이벤트 제어
    const handleStarInteraction = (event) => {
        const starElement = event.target.closest('.bx');
        if (!starElement) return;

        const stars = Array.from(starContainer.children);
        const rating = stars.indexOf(starElement) + 1;
        
        stars.forEach((star, index) => {
            const isSelected = rating > index;
            if (event.type === 'mouseover' && isSelected) {
                star.classList.add('hovered');
            } else if (event.type === 'mouseout') {
                star.classList.remove('hovered');
            } else if (event.type === 'click') {
                star.classList.toggle('selected', isSelected);
                const event = new CustomEvent('rating-change', {
                    detail: rating
                });
                $container.dispatchEvent(event);
            } 
        });
    };

    //이벤트 발생
    starContainer.addEventListener('mouseover', handleStarInteraction);
    starContainer.addEventListener('mouseout', handleStarInteraction);
    starContainer.addEventListener('click', handleStarInteraction);
};

export default StarRating;
