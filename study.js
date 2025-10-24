
    const materials = [
      { title: "Physics Notes - Class 12", category: "12th Grade", desc: "Complete NCERT + Important Questions", file: "physics12.pdf", thumb: "img/NCRT.png" },
      { title: "Maths Formula Sheet", category: "11th Grade", desc: "Quick revision formulas", file: "maths11.pdf", thumb: "img/FORMULAS.png" },
      { title: "History Notes - Class 10", category: "10th Grade", desc: "Detailed chapter-wise notes", file: "history10.pdf", thumb: "img/NOTES.png" },
      { title: "Guitar Basics", category: "Music", desc: "Beginner-friendly music guide", file: "guitar.pdf", thumb: "img/MUSIC.png" },
      { title: "Spoken English Guide", category: "Language", desc: "Improve English speaking skills", file: "english.pdf", thumb: "img/SPEAKING.png" },
      { title: "Java Programming", category: "Programming", desc: "Learn Java with examples", file: "java.pdf", thumb: "img/java.png" },
      { title: "Python Basics", category: "Programming", desc: "Easy Python tutorial", file: "python.pdf", thumb: "img/python.png" },
      { title: "Chemistry Notes - Class 12", category: "12th Grade", desc: "Organic + Inorganic explained", file: "chemistry12.pdf", thumb: "img/ORGANIC INORGANIC.png" }
    ];

    const resultsGrid = document.getElementById("resultsGrid");
    const searchInput = document.getElementById("searchInput");
    const searchBtn = document.getElementById("searchBtn");
    const categoryBtns = document.querySelectorAll(".category-btn");
    const loadMoreBtn = document.getElementById("loadMoreBtn");

    let visibleCount = 4; // first 4 materials visible
    let currentCategory = "All";

    function renderMaterials() {
      resultsGrid.innerHTML = "";
      let filtered = materials.filter(item => 
        (currentCategory === "All" || item.category === currentCategory) &&
        item.title.toLowerCase().includes(searchInput.value.toLowerCase())
      );

      filtered.slice(0, visibleCount).forEach(item => {
        const card = document.createElement("div");
        card.className = "result-card";
        card.innerHTML = `
          <img src="${item.thumb}" alt="${item.title}" style="width:100%; border-radius:8px; margin-bottom:10px;">
          <h3>${item.title}</h3>
          <p>${item.desc}</p>
          <a href="${item.file}" download class="download-btn" style="display:inline-block; margin-top:10px; padding:8px 14px; background:#a8ff60; border-radius:6px; text-decoration:none; color:#000; font-weight:bold;">Download PDF</a>
        `;
        resultsGrid.appendChild(card);
      });

      // Show or hide Load More button
      if (visibleCount >= filtered.length) {
        loadMoreBtn.style.display = "none";
      } else {
        loadMoreBtn.style.display = "block";
      }
    }

    // Search
    searchBtn.addEventListener("click", renderMaterials);
    searchInput.addEventListener("keyup", renderMaterials);

    // Category filter
    categoryBtns.forEach(btn => {
      btn.addEventListener("click", () => {
        currentCategory = btn.dataset.category;
        visibleCount = 4;
        renderMaterials();
      });
    });

    // Load more
    loadMoreBtn.addEventListener("click", () => {
      visibleCount += 4;
      renderMaterials();
    });

    // Initial load
    renderMaterials();
  