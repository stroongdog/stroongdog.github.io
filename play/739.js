(function() {
    const maxPerformanceSettings = [
      ["ImperialUnitsEnabled", "false"],
      ["ResetHintEnabled", "false"],
      ["GhostCarEnabled", "false"], // *
      ["CockpitCameraToggle", "true"],
      ["CheckpointsPosition", "false"],
      ["TimerPosition", "false"],
      ["SpeedometerPosition", "false"],
      ["Language", "en-US"],
      ["CarShadowQuality", "0"], // *
      ["TrackShadowEnabled", "false"], // *
      ["CloudsEnabled", "false"], // *
      ["ParticlesEnabled", "false"], // *
      ["SkidmarksEnabled", "true"],
      ["RenderScale", "1"],
      ["Antialiasing", "false"], // **
      ["SoundEffectVolume", "1"],
      ["MusicVolume", "1"],
      ["CheckpointVolume", "1"]
    ];
  
    const styleElement = document.createElement("style");
    styleElement.innerHTML = `
      .set-max-performance-settings-btn {
        display: block;       /* Make button a block element */
        margin: 10px auto;    /* Center the button horizontally */
        padding: 6px 12px; 
        font-size: 13px; 
        font-weight: bold; 
        color: #ffffff; 
        background-color: #1e90ff; 
        border: none; 
        border-radius: 4px; 
        cursor: pointer;
      }
      .set-max-performance-settings-btn:hover {
        background-color: #006bd1;
      }
    `;
    document.head.appendChild(styleElement);
  
    const setMaxPerfSettingsBtn = document.createElement("button");
    setMaxPerfSettingsBtn.classList.add("set-max-performance-settings-btn");
    setMaxPerfSettingsBtn.textContent = "Max Performance";
  
    const gameBar = document.querySelector(".game-bar");
    if (gameBar && gameBar.parentNode) {
      gameBar.parentNode.insertBefore(setMaxPerfSettingsBtn, gameBar);
    } else {
      document.body.appendChild(setMaxPerfSettingsBtn);
    }

    setMaxPerfSettingsBtn.addEventListener("click", function() {
      localStorage.setItem("polytrack_v3_settings", JSON.stringify(maxPerformanceSettings));
      alert("Settings saved! The page will now refresh to enable changes. You can fine-tune them afterward.");
      location.reload();
    });
  })();