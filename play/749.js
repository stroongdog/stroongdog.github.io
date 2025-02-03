(function() {
    function initCustomText() {
      const gameBar = document.querySelector('.game-bar');
      if (!gameBar) {
        console.error("Game bar element not found.");
        return;
      }
  
      const customTextElement = document.createElement('div');
      customTextElement.id = 'customTextForGame749';
  
      customTextElement.style.textAlign = 'center';
      customTextElement.style.marginBottom = '10px';
      customTextElement.style.fontSize = '1.2rem';
      customTextElement.style.color = '#ffffff';
  
      customTextElement.textContent = 'The visual captcha on roblox does NOT work but the audio one should. If it isnt make sure you have your volume up high and wait after you press the play button!';
  
      gameBar.insertAdjacentElement('beforebegin', customTextElement);
    }
  
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initCustomText);
    } else {
      initCustomText();
    }
  })();  