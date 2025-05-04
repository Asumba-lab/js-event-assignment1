// Event Handling
document.getElementById("colorBtn").addEventListener("click", () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEEAD', '#D4A5A5'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
  
  // Add a fun message
  const messages = [' Wow!', ' Beautiful!', ' Amazing!', ' Stunning!'];
  const randomMessage = messages[Math.floor(Math.random() * messages.length)];
  alert(randomMessage);
});

// Enhanced Hover Effect
document.getElementById("hoverText").addEventListener("mouseover", () => {
  const hoverText = document.getElementById("hoverText");
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFD166', '#96CEB4'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  
  hoverText.textContent = "You hovered over me!";
  hoverText.style.transform = "scale(1.2)";
  hoverText.style.background = `linear-gradient(45deg, ${randomColor}, ${colors[(colors.indexOf(randomColor) + 1) % colors.length]})`;
  hoverText.style.webkitBackgroundClip = "text";
  hoverText.style.backgroundClip = "text";
  hoverText.style.color = "transparent";
  hoverText.style.transition = "all 0.3s ease";
});

document.getElementById("hoverText").addEventListener("mouseout", () => {
  const hoverText = document.getElementById("hoverText");
  hoverText.textContent = "Hover over me!";
  hoverText.style.transform = "scale(1)";
  hoverText.style.background = "linear-gradient(45deg, #FF6B6B, #4ECDC4)";
  hoverText.style.webkitBackgroundClip = "text";
  hoverText.style.backgroundClip = "text";
  hoverText.style.color = "transparent";
});

document.getElementById("keyInput").addEventListener("keyup", (e) => {
  const keyOutput = document.getElementById("keyOutput");
  keyOutput.textContent = `You typed: ${e.key}`;
  
  // Add rainbow effect
  const colors = ['#FF0000', '#FF7F00', '#FFFF00', '#00FF00', '#0000FF', '#4B0082', '#8B00FF'];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  keyOutput.style.color = randomColor;
  keyOutput.style.fontSize = "1.2em";
  keyOutput.style.transition = "all 0.3s ease";
});

document.getElementById("secretBtn").addEventListener("dblclick", () => {
  // Create confetti effect
  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.className = 'confetti';
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.animationDuration = Math.random() * 3 + 2 + 's';
    confetti.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    document.body.appendChild(confetti);
    
    // Remove confetti after animation
    setTimeout(() => {
      confetti.remove();
    }, 5000);
  }
  
  alert("🎉 You found the secret double-click! 🎊");
});

// Slideshow
const images = [
  "https://picsum.photos/600/400?random=1",
  "https://picsum.photos/600/400?random=2",
  "https://picsum.photos/600/400?random=3"
];
let index = 0;
const slide = document.getElementById("slide");

// Auto-play slideshow
let slideshowInterval = setInterval(() => {
  index = (index + 1) % images.length;
  slide.src = images[index];
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.style.opacity = 1;
  }, 500);
}, 5000);

document.getElementById("next").addEventListener("click", () => {
  clearInterval(slideshowInterval);
  index = (index + 1) % images.length;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 500);
});

document.getElementById("prev").addEventListener("click", () => {
  clearInterval(slideshowInterval);
  index = (index - 1 + images.length) % images.length;
  slide.style.opacity = 0;
  setTimeout(() => {
    slide.src = images[index];
    slide.style.opacity = 1;
  }, 500);
});

// Tabs
const tabs = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(btn => {
  btn.addEventListener("click", () => {
    const tabId = btn.dataset.tab;
    
    // Add click animation
    btn.style.transform = "scale(0.95)";
    setTimeout(() => {
      btn.style.transform = "scale(1)";
    }, 200);
    
    // Update active states
    tabs.forEach(t => t.style.background = "#f0f0f0");
    btn.style.background = "#2193b0";
    btn.style.color = "white";
    
    contents.forEach(c => {
      c.style.opacity = 0;
      setTimeout(() => {
        c.classList.remove("active");
        c.style.opacity = 1;
      }, 300);
    });
    
    setTimeout(() => {
      document.getElementById(`tab-${tabId}`).classList.add("active");
    }, 300);
  });
});

// Form Validation
document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  let message = "";
  let icon = "";

  if (!name || !email || !password) {
    message = "⚠️ All fields are required!";
    icon = "❌";
  } else if (!email.includes("@") || !email.includes(".")) {
    message = "❌ Invalid email format!";
    icon = "❌";
  } else if (password.length < 8) {
    message = "🔐 Password must be at least 8 characters!";
    icon = "❌";
  } else {
    message = "✅ Form submitted successfully!";
    icon = "🎉";
    // Add celebration effect
    document.getElementById("contactForm").style.transform = "scale(0.95)";
    setTimeout(() => {
      document.getElementById("contactForm").style.transform = "scale(1)";
    }, 200);
  }

  feedback.textContent = message;
  feedback.style.opacity = 0;
  setTimeout(() => {
    feedback.style.opacity = 1;
  }, 100);
});

// Dark Mode Toggle
document.getElementById("darkModeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  
  // Save preference to localStorage
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode);
  
  // Add transition effect
  document.body.style.transition = "background 0.3s ease, color 0.3s ease";
});

// Check for saved preference
if (localStorage.getItem("darkMode") === "true") {
  document.body.classList.add("dark-mode");
}
  
