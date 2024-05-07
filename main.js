document.addEventListener("DOMContentLoaded", () => {
    const questionsList = document.getElementById("questions-list");
    const responseDisplay = document.getElementById("response-display");
    const newQuestionForm = document.getElementById("new-question-form");
    const newQuestionButton = document.getElementById("new-question-button");
    const questionInput = document.getElementById("question-input");
    const addQuestionButton = document.getElementById("add-question-button");

    let questions = [
        { text: "What is JavaScript?", responses: ["A programming language for the web."] },
        { text: "What is HTML?", responses: ["A markup language for creating web pages."] }
    ];

    function displayQuestions() {
        questionsList.innerHTML = ""; // Clear previous questions
        questions.forEach((question, index) => {
            const li = document.createElement("li");
            li.textContent = question.text;
            li.addEventListener("click", () => displayResponses(index));
            questionsList.appendChild(li);
        });
    }

    function displayResponses(index) {
        newQuestionForm.classList.add("hidden"); // Hide new question form
        const question = questions[index];
        responseDisplay.innerHTML = `<h3>${question.text}</h3>`;
        question.responses.forEach((response) => {
            const p = document.createElement("p");
            p.textContent = response;
            responseDisplay.appendChild(p);
        });
    }

    function showNewQuestionForm() {
        newQuestionForm.classList.remove("hidden"); // Show new question form
        responseDisplay.innerHTML = ""; // Clear response display
    }

    function addNewQuestion() {
        const newQuestion = questionInput.value.trim();
        if (newQuestion) {
            questions.push({ text: newQuestion, responses: [] });
            questionInput.value = ""; // Clear the input field
            displayQuestions(); // Refresh the question list
        }
    }

    newQuestionButton.addEventListener("click", showNewQuestionForm);
    addQuestionButton.addEventListener("click", addNewQuestion);

    displayQuestions(); // Initialize the questions list
});


