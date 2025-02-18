document.addEventListener("DOMContentLoaded", function() {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("currentyear").textContent = currentYear;
    document.getElementById("lastmodified").textContent = `Last Modified: ${document.lastModified}`;

    
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".navigation");
    hamburger.addEventListener("click", () => navMenu.classList.toggle("active"));

    
    if (document.getElementById('comment-form')) {
        document.getElementById('comment-form').addEventListener('submit', (e) => {
            e.preventDefault();
            const commentData = {
                user: document.getElementById('comment-user').value,
                text: document.getElementById('comment-text').value,
                date: new Date().toLocaleString()
            };
            
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            comments.push(commentData);
            localStorage.setItem('comments', JSON.stringify(comments));
            displayComments();
        });

        function displayComments() {
            const container = document.getElementById('comments-list');
            const comments = JSON.parse(localStorage.getItem('comments')) || [];
            
            
            const recentComments = comments.slice(-5);
            
            container.innerHTML = recentComments.map(comment => `
                <div class="comment">
                    <h5>${comment.user} <small>(${comment.date})</small></h5>
                    <p>${comment.text}</p>
                </div>
            `).join('');
        }
        displayComments();
    }
    
    const timeQuiz = {
        questions: [
            {
                text: "Who created the Epoch?",
                options: ["Lucca", "Belthasar", "Dalton", "Magus"],
                correct: 1
            },
            {
                text: "What is Frog's real name?",
                options: ["Cyrus", "Glenn", "Serge", "Janus"],
                correct: 1
            },
            {
                text: "Which character uses a scythe as a weapon?",
                options: ["Crono", "Marle", "Magus", "Frog"],
                correct: 2
            }
        ],
        currentQuestion: 0,
        score: 0
    };

    function displayQuestion() {
        const quizContainer = document.getElementById('quiz-container');
        const question = timeQuiz.questions[timeQuiz.currentQuestion];
        
        quizContainer.innerHTML = `
            <div class="question">
                <h3>${question.text}</h3>
                ${question.options.map((opt, index) => `
                    <button class="quiz-btn" onclick="checkAnswer(${index})">
                        ${opt}
                    </button>
                `).join('')}
                <p>Score: ${timeQuiz.score}</p>
                <p>Question ${timeQuiz.currentQuestion + 1} of ${timeQuiz.questions.length}</p>
            </div>
        `;
    }

    window.checkAnswer = (selectedIndex) => {
        const question = timeQuiz.questions[timeQuiz.currentQuestion];
        const quizContainer = document.getElementById('quiz-container');
        
        if (selectedIndex === question.correct) {
            timeQuiz.score += 10;
            quizContainer.innerHTML += `<p class="feedback correct">Correct! +10 points</p>`;
        } else {
            quizContainer.innerHTML += `<p class="feedback wrong">Wrong! The correct answer was: ${question.options[question.correct]}</p>`;
        }

        setTimeout(() => {
            timeQuiz.currentQuestion++;
            if (timeQuiz.currentQuestion < timeQuiz.questions.length) {
                displayQuestion();
            } else {
                quizContainer.innerHTML = `
                    <div class="quiz-complete">
                        <h3>Quiz Complete!</h3>
                        <p>Your final score is: ${timeQuiz.score}</p>
                        <button onclick="location.reload()">Try Again</button>
                    </div>
                `;
            }
        }, 1500);
    };

    if (document.getElementById('quiz-container')) {
        displayQuestion();
    }

    document.querySelectorAll('.map-highlight').forEach(highlight => {
        highlight.addEventListener('mouseover', (e) => {
            const tooltip = document.getElementById('map-tooltip');
            const location = e.target.dataset.location;
            tooltip.style.display = 'block';
            tooltip.style.top = `${e.clientY + 10}px`;
            tooltip.style.left = `${e.clientX + 10}px`;
            tooltip.textContent = location;
        });

        highlight.addEventListener('mouseout', () => {
            document.getElementById('map-tooltip').style.display = 'none';
        });
    });
});