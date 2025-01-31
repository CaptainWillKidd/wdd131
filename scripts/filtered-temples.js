document.addEventListener("DOMContentLoaded", function() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;

    const lastModified = document.lastModified;
    document.getElementById("lastmodified").textContent = `Last Modified: ${lastModified}`;

    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navigation");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    const temples = [
        {
          templeName: "Aba Nigeria",
          location: "Aba, Nigeria",
          dedicated: "2005, August, 7",
          area: 11500,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
          templeName: "Manti Utah",
          location: "Manti, Utah, United States",
          dedicated: "1888, May, 21",
          area: 74792,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
          templeName: "Payson Utah",
          location: "Payson, Utah, United States",
          dedicated: "2015, June, 7",
          area: 96630,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
          templeName: "Yigo Guam",
          location: "Yigo, Guam",
          dedicated: "2020, May, 2",
          area: 6861,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
          templeName: "Washington D.C.",
          location: "Kensington, Maryland, United States",
          dedicated: "1974, November, 19",
          area: 156558,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
          templeName: "Lima Perú",
          location: "Lima, Perú",
          dedicated: "1986, January, 10",
          area: 9600,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
          templeName: "Mexico City Mexico",
          location: "Mexico City, Mexico",
          dedicated: "1983, December, 2",
          area: 116642,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
          templeName: "Salt Lake City Utah",
          location: "Salt Lake City, Utah, United States",
          dedicated: "1893, April, 6",
          area: 253015,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/salt-lake-city-utah/2018/400x250/slctemple5.jpg"
        },
        {
          templeName: "Tokyo Japan",
          location: "Tokyo, Japan",
          dedicated: "1980, October, 27",
          area: 107688,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/200x320/tokyo_japan_temple-evening.jpeg"
        },
        {
          templeName: "Rome Italy",
          location: "Rome, Italy",
          dedicated: "2019, March, 10",
          area: 40000,
          imageUrl:
          "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/2019/400x250/4-Rome-Temple-2160935.jpg"
        },
        {
            templeName: "São Paulo Brazil",
            location: "São Paulo, Brazil",
            dedicated: "1978, October, 30",
            area: 49717,
            imageUrl:
            "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/400x250/sao-paulo-brazil-temple-lds-756468-wallpaper.jpg"
        }
      ];

      const templeCardsContainer = document.getElementById("temple-cards");

      temples.forEach(temple => {
          const card = document.createElement("div");
          card.className = "temple-card";
  
          const img = document.createElement("img");
          img.src = temple.imageUrl;
          img.alt = temple.Templename;
          img.loading = "lazy";
  
          const name = document.createElement("h3");
          name.textContent = temple.Templename;
  
          const location = document.createElement("p");
          location.textContent = `Location: ${temple.location}`;
  
          const dedicated = document.createElement("p");
          dedicated.textContent = `Dedicated: ${temple.dedicated}`;
  
          const area = document.createElement("p");
          area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`; 
  
          card.appendChild(img);
          card.appendChild(name);
          card.appendChild(location);
          card.appendChild(dedicated);
          card.appendChild(area);
  
          templeCardsContainer.appendChild(card);
      });
    
      function filterTemples(criteria) {
        const filtered = temples.filter(temple => {
            const year = parseInt(temple.dedicated.split(',')[0]);
            
            switch(criteria) {
                case 'old':
                    return year < 1900;
                case 'new':
                    return year > 2000;
                case 'large':
                    return temple.area > 90000;
                case 'small':
                    return temple.area < 10000;
                default: // home
                    return true;
            }
        });
        
        renderFilteredTemples(filtered);

        function renderFilteredTemples(filteredTemples) {
            templeCardsContainer.innerHTML = '';
        
            filteredTemples.forEach(temple => {
                const card = document.createElement("div");
                card.className = "temple-card";
        
                const img = document.createElement("img");
                img.src = temple.imageUrl;
                img.alt = temple.templeName;
                img.loading = "lazy";
        
                const name = document.createElement("h3");
                name.textContent = temple.templeName;
        
                const location = document.createElement("p");
                location.textContent = `Location: ${temple.location}`;
        
                const dedicated = document.createElement("p");
                dedicated.textContent = `Dedicated: ${temple.dedicated}`;
        
                const area = document.createElement("p");
                area.textContent = `Size: ${temple.area.toLocaleString()} sq ft`;
        
                card.appendChild(img);
                card.appendChild(name);
                card.appendChild(location);
                card.appendChild(dedicated);
                card.appendChild(area);
        
                templeCardsContainer.appendChild(card);
            });

            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault(); 
                    
                    const criteria = e.target.getAttribute('href').toLowerCase();
            
                    filterTemples(criteria);
            
                    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
            
                    e.target.classList.add('active');
                });
            });
        }
    }

    filterTemples('home');
    document.querySelector('[href="home"]').classList.add('active');
});


