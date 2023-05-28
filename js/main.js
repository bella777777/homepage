// Define the content for each menu item
const contentMap = {
  home: `
    <h2>Home</h2>
    <p>Welcome to the homepage!</p>
    <p>Check out my Instagram!</p>
    <img src="img/instagram.png" style="width: 50%; height: auto;" alt="Instagram QR code"/>
  `,
  introduction: `
    <h2>Introduction</h2>
    <div style="display: flex; justify-content: center;">
      <img src="img/profile.jpg" style="width: 400px; height: 400px;" alt="Profile Picture"/>
    </div>
    <p>나는 벨라입니다. AI 아티스트이며, 인스타그램에서 활발한 활동을 하고 있습니다.</p>
    <p>제 작품들을 통해 기술과 예술이 어떻게 결합될 수 있는지를 보여줍니다.</p>
    <p>인스타그램을 통해 제 작품을 공유하고, 창조적인 생각을 공유하는 커뮤니티를 구축하고 있습니다.</p>
    <p>또한, 다양한 인플루언서로부터 영감을 받아 제 작품을 더욱 풍부하게 만들어갑니다.</p>
    <p>인스타그램 팔로우를 통해 제 창조적인 여정을 함께 해주세요!</p>
  `,
  portfolio: '<h2>Portfolio</h2><p>Check out my projects and work samples.</p>',
  gallery: `
    <h2>Gallery</h2>
    <img src="img/1.png" style="width: 100%; height: auto; margin-bottom: 15px;" alt="Gallery image 1"/>
    <img src="img/2.png" style="width: 100%; height: auto; margin-bottom: 15px;" alt="Gallery image 2"/>
    <img src="img/3.png" style="width: 100%; height: auto; margin-bottom: 15px;" alt="Gallery image 3"/>
    <img src="img/4.png" style="width: 100%; height: auto; margin-bottom: 15px;" alt="Gallery image 4"/>
  `,
  sns: '<h2>SNS</h2><p>Connect with me on social media.</p>',
}

// Function to load content dynamically based on menu item
function loadContent(page) {
  const contentDiv = document.getElementById('content')
  contentDiv.innerHTML = contentMap[page]
}

// Initial page load
loadContent('home')
