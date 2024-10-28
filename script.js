// 모든 이미지 요소를 선택합니다.
const images = document.querySelectorAll('.image');

// 각 이미지에 클릭 이벤트 리스너를 추가합니다.
images.forEach(image => {
    // 원래 이미지 경로 저장
    image.dataset.originalSrc = image.src;

    image.addEventListener('click', function() {
        // 현재 이미지의 src를 새로운 이미지로 변경합니다.
        const openImage = this.getAttribute('data-open');
        this.src = openImage;
    
        // 이미지의 너비와 높이를 가져와서 중앙을 기준으로 위치를 계산합니다.
        const imageRect = this.getBoundingClientRect();
        const newLeft = imageRect.left + (imageRect.width / 2) - 1; // 2px 왼쪽으로 이동
    
        // 0.5초 후에 어두운 배경과 텍스트를 나타냅니다.
        setTimeout(() => {
            const overlay = document.getElementById('overlay');
            overlay.style.display = 'flex'; // 어두운 배경 표시

            // letter 이미지 선택
            const letterImage = document.getElementById('letterImage');
            const imageClass = this.classList[1]; // 이미지 클래스 (image1, image2 등)

            // 클릭된 이미지에 따른 편지 색상 설정
            const letterMap = {
                image1: "letter_gray.png",
                image2: "letter_blue.png",
                image3: "letter_gray.png",
                image4: "letter_sky.png",
                image5: "letter_gray.png",
                image6: "letter_blue.png",
                image7: "letter_sky.png",
                image8: "letter_sky.png",
                image9: "letter_gray.png",
                image10: "letter_blue.png",
                image11: "letter_navy.png",
                image12: "letter_sky.png",
                image13: "letter_sky.png",
                image14: "letter_navy.png",
                image15: "letter_gray.png",
                image16: "letter_navy.png",
                image17: "letter_sky.png",
                image18: "letter_gray.png",
                image19: "letter_gray.png",
                image20: "letter_navy.png",
                image21: "letter_blue.png"
            };

            // letter 이미지 설정
            letterImage.src = letterMap[imageClass]; // 해당 이미지로 설정
            letterImage.style.display = 'block'; // 편지 이미지 표시
            
            // 이미지에 따라 표시할 텍스트를 선택합니다.
            const textMap = {
                image1: "키 커지고 못 하게 된 게 너무 많지만 <br> 나 눈만 감으면 별을 볼 수 있게 되었네",
                image2: "투덜거림은 전염이 된다",
                image3: "나만이 나를 완성해",
                image4: "죽을 때까지 청춘일 거야",
                image5: "소원은 반드시 이루어져<br>못 믿겠지만",
                image6: "아름답지 말자",
                image7: "누군가가 나를 기다리고 있다",
                image8: "흐린 날을 기억해",
                image9: "너는 핑계가 통하지 않는 사람",
                image10: "이유 없는 소중함은 결코 흔치 않은 것",
                image11: "좋아해서 그랬어",
                image12: "마음은 형광등에도 타버려",
                image13: "나도 별인데",
                image14: "무결한 사람이 어디 있겠어요",
                image15: "서툴고 투박하므로 인생",
                image16: "네 입을 통한 말들은 사실이 된다<br>가짜가 아니게 된다",
                image17: "하지만 나아가야 해",
                image18: "사랑해 허상이래도",
                image19: "무지개를 보여줘",
                image20: "이해할 필요 없어",
                image21: "언젠가 모래의 일부가 될 수 있다면"
            };

            // 클릭된 이미지에 따른 텍스트 업데이트
            const textKey = imageClass.replace('image', ''); // 'image'를 제거하여 숫자만 추출
            document.querySelector('.letter-text').innerHTML = textMap[`image${textKey}`]; // 텍스트 설정
            document.querySelector('.letter-text').style.display = 'block'; // 텍스트 표시
        }, 500); // 0.5초 대기
    });
});

function closeOverlay() {
    const overlay = document.getElementById('overlay');
    overlay.style.display = 'none'; // 어두운 배경 숨기기

    // letter 이미지 및 텍스트 숨기기
    const letterImages = document.querySelectorAll('.letter');
    letterImages.forEach(img => img.style.display = 'none');

    const letterText = document.querySelector('.letter-text');
    letterText.style.display = 'none'; // 텍스트 숨기기

    // 모든 이미지를 원래 이미지로 되돌리기
    images.forEach(image => {
        image.src = image.dataset.originalSrc; // 원래 이미지로 변경
    });
}
