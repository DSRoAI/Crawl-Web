var currentFileIndex = 0;
var currentQuestionIndex = 0;


function previewImage() {
    var input = document.getElementById('image-input');
    var preview = document.getElementById('preview-image');

    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            preview.src = e.target.result;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function updateCurrentFile() {
    var currentFile = document.getElementById('currentFile');
    currentFile.textContent = csvFiles[currentFileIndex];
}

function submitData() {
    var question = document.getElementById('question').value;
    var choices = document.getElementById('choices').value;
    var answer = document.getElementById('answer').value;
    var explain = document.getElementById('explain').value;
    var subject = document.getElementById('subject').value;
    var grade = document.getElementById('grade').value;

    var newData = {
        'question': question,
        'choices': choices,
        'answer': answer,
        'explain': explain,
        'images': imageFileNames,
        'subject': subject,
        'grade': grade
    };

    console.log(newData);
}

function nextQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        updateQuestionFields();
    }
}

function nextFile() {
    if (currentFileIndex < csvFiles.length - 1) {
        currentFileIndex++;
        currentQuestionIndex = 0;
        updateCurrentFile();
        updateQuestionFields();
    } else {
        var noFilesMessage = document.getElementById('noFilesMessage');
        noFilesMessage.textContent = "Không còn file JSON nào trong thư mục.";
    }
}

function updateQuestionFields() {
    // Update input fields with the current question's data
}

var csvFiles = []; // Array of CSV file names
var imageFileNames = [];

updateCurrentFile();
updateQuestionFields();