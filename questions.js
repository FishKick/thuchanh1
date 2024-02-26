var questionBank = [
    "Trái đất là hành tinh thứ tư từ mặt trời.",
    "Đại dương Thái Bình Dương là đại dương lớn nhất thế giới.",
    "Cá heo là loài cá biển.",
    "Công thức hóa học của nước là H2O.",
    "Mặt trăng có ánh sáng riêng.",
    "Mặt trời có ánh sáng riêng.",
    "Bắc cầu là tên gọi khác của cây cầu.",
    "Sông Amazon là sông dài nhất thế giới.",
    "Động vật không có cảm xúc.",
    "Cá sấu là loài bò sát."
  ];
var answerBank = [
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"],
  ["Đúng", "Sai"]
];

var checkAnswer = [0,1,0,1,0,1,0,1,0,1];

  


var questionsContainer = document.getElementById("nhom1");
for (var i = 0; i < questionBank.length; i++) {
  var question = questionBank[i];
  var answerOptions = answerBank[i];

  var questionDiv = document.createElement("div");
  var questionText = document.createElement("p");
  questionText.textContent = (i + 1) + ". " + question;
  questionDiv.appendChild(questionText);

  var answerDiv = document.createElement("div");
  for (var j = 0; j < answerOptions.length; j++) {
    var answerOption = answerOptions[j];

    var answerLabel = document.createElement("label");
    var answerInput = document.createElement("input");
    answerInput.type = "radio";
    answerInput.name = "answer" + i;
    answerInput.value = j;

    answerLabel.appendChild(answerInput);
    answerLabel.appendChild(document.createTextNode(answerOption));

    answerDiv.appendChild(answerLabel);
  }

  questionDiv.appendChild(answerDiv);
  questionsContainer.appendChild(questionDiv);
}

var checkButton = document.createElement("button");
checkButton.textContent = "Kiểm tra kết quả";
checkButton.onclick = checkAnswers;
questionsContainer.appendChild(checkButton);

var resultText = document.createElement("p");
resultText.id = "result";
questionsContainer.appendChild(resultText);

function checkAnswers() {
  var totalQuestions = questionBank.length;
  var correctAnswers = 0;

  for (var i = 0; i < totalQuestions; i++) {
    var selectedOption = document.querySelector('input[name="answer' + i + '"]:checked');
    if (selectedOption && parseInt(selectedOption.value) === checkAnswer[i]) {
      correctAnswers++;
    }
  }

  var result = "Số câu đúng: " + correctAnswers + " / " + totalQuestions;
  document.getElementById('result').textContent = result;
}




  var questionBank2 = [
    "Thủ đô của Pháp là gì?",
    "Ai là nhà vô địch World Cup 2018?",
    "Ai là tác giả cuốn sách 'Đắc nhân tâm'?",
    "Bức tượng nổi tiếng 'David' được tạo bởi nghệ sĩ nào?",
    "Mặt trời mọc ở hướng nào?",
    "Ngôn ngữ lập trình nào được sử dụng phổ biến nhất?",
    "Ai là người đầu tiên bước chân lên mặt trăng?",
    "Đặc sản nổi tiếng của Ý là gì?",
    "Thành phố New York nằm ở tiểu bang nào của Mỹ?",
    "Ai là người đầu tiên phát hiện ra lực hấp dẫn?"
  ];
  var answerBank2 = [
    ["Paris", "London", "Berlin", "Rome"],
    ["Pháp", "Nga", "Bồ Đào Nha", "Hà Lan"],
    ["Dale Carnegie", "Napoleon Hill", "Stephen Covey", "Tony Robbins"],
    ["Michelangelo", "Leonardo da Vinci", "Pablo Picasso", "Vincent van Gogh"],
    ["Đông", "Tây", "Nam", "Bắc"],
    ["JavaScript", "Python", "Java", "C++"],
    ["Neil Armstrong", "Buzz Aldrin", "Yuri Gagarin", "Alan Shepard"],
    ["Pizza", "Gelato", "Pasta", "Espresso"],
    ["New York", "California", "Texas", "Florida"],
    ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Archimedes"]
  ];
  var checkAnswer2 = [0, 1, 2, 3, 2, 1, 1, 0 , 2, 1];
  

  var questionsContainer2 = document.getElementById("nhom2");
  for (var i = 0; i < questionBank2.length; i++) {
    var question = questionBank2[i];
    var answerOptions = answerBank2[i];
  
    var questionDiv = document.createElement("div");
    var questionText = document.createElement("p");
    questionText.textContent = (i + 1) + ". " + question;
    questionDiv.appendChild(questionText);
  
    var answerDiv = document.createElement("div");
    for (var j = 0; j < answerOptions.length; j++) {
      var answerOption = answerOptions[j];
  
      var answerLabel = document.createElement("label");
      var answerInput = document.createElement("input");
      answerInput.type = "radio";
      answerInput.name = "answer" + i;
      answerInput.value = j;
  
      answerLabel.appendChild(answerInput);
      answerLabel.appendChild(document.createTextNode(answerOption));
  
      answerDiv.appendChild(answerLabel);
    }
  
    questionDiv.appendChild(answerDiv);
    questionsContainer2.appendChild(questionDiv);
  }
  
  var checkButton2 = document.createElement("button");
  checkButton2.textContent = "Kiểm tra kết quả";
  checkButton2.onclick = checkAnswers2;
  questionsContainer2.appendChild(checkButton2);
  
  var resultText2 = document.createElement("p");
  resultText2.id = "result2";
  questionsContainer2.appendChild(resultText2);
  
  function checkAnswers2() {
    var totalQuestions = questionBank2.length;
    var correctAnswers = 0;
  
    for (var i = 0; i < totalQuestions; i++) {
      var selectedOption = document.querySelector('input[name="answer' + i + '"]:checked');
      if (selectedOption && parseInt(selectedOption.value) === checkAnswer2[i]) {
        correctAnswers++;
      }
    }
  
    var result2 = "Số câu đúng: " + correctAnswers + " / " + totalQuestions;
    document.getElementById('result2').textContent = result2;
  }



  var questionBank3 = [
    "Thủ đô của Úc là gì?",
    "Ai là nhà vô địch Euro 2020?",
    "Ai là tác giả cuốn sách 'Chiến tranh và hòa bình'?",
    "Bức tượng nổi tiếng 'The Thinker' được tạo bởi nghệ sĩ nào?",
    "Mặt trăng lặn ở hướng nào?",
    "Ngôn ngữ lập trình nào được sử dụng cho phát triển ứng dụng di động iOS?",
    "Ai là người đầu tiên bước chân lên đỉnh núi Everest?",
    "Đặc sản nổi tiếng của Thái Lan là gì?",
    "Ai là nhà vật lý nổi tiếng với lý thuyết tương đối và công thức E = mc^2?",
    "Ai là nhà vô địch Wimbledon 2021 ở nội dung đơn nam?",
  ]
  var answerBank3 = [
    ["Canberra", "London", "New York"],
    ["Ý", "Italy"],
    ["Leo Tolstoy", "Bill Gates"],
    ["Auguste Rodin", "Donal Trump"],
    ["Tây", "Đông"],
    ["Swift", "Kotlin"],
    ["Pad Thai", "Tom Yum", "Mango Sticky Rice"],
    ["Nhật Bản", "Hàn Quốc"],
    ["Albert Einstein", "Tesla"],
    ["Novak Djokovic", "Nadal"],
  ]

  var checkAnswer3 = [[0], [0, 1], [0], [0], [0], [0], [0, 1], [0], [0], [0]]


  
  var questionsContainer3 = document.getElementById("nhom3");
for (var i = 0; i < questionBank3.length; i++) {
  var questionElement = document.createElement("div");
  questionElement.innerHTML = "<p>" + (i + 1) + "." + questionBank3[i] + "</p>";

  var answersElement = document.createElement("div");
  answersElement.innerHTML = "";

  for (var j = 0; j < answerBank3[i].length; j++) {
    var answerLabel = document.createElement("label");
    var answerInput = document.createElement("input");
    answerInput.type = "checkbox";
    answerInput.name = "answer" + i + "[]";
    answerInput.value = j;

    answerLabel.appendChild(answerInput);
    answerLabel.appendChild(document.createTextNode(" " + answerBank3[i][j]));

    answersElement.appendChild(answerLabel);
  }

  questionElement.appendChild(answersElement);

  questionsContainer3.appendChild(questionElement);
}

var checkButton3 = document.createElement("button");
checkButton3.textContent = "Kiểm tra kết quả";
checkButton3.onclick = checkAnswers3;
questionsContainer3.appendChild(checkButton3);

var resultText3 = document.createElement("p");
resultText3.id = "result3";
questionsContainer3.appendChild(resultText3);

function checkAnswers3() {
  var totalQuestions = questionBank3.length;
  var correctAnswers = 0;

  for (var i = 0; i < totalQuestions; i++) {
    var selectedOptions = document.querySelectorAll('input[name="answer' + i + '[]"]:checked');
    var selectedValues = Array.from(selectedOptions).map(function (option) {
      return parseInt(option.value);
    });
    var correctValues = checkAnswer3[i];

    if (selectedValues.length === correctValues.length && selectedValues.every(function (value) {
      return correctValues.includes(value);
    })) {
      correctAnswers++;
    }
  }

  var result = "Số câu đúng: " + correctAnswers + " / " + totalQuestions;
  document.getElementById('result3').textContent = result;
}

  var questionBank4 = [
    "Hãy mô tả thủ đô của Úc?",
    "Hãy mô tả ngôn ngữ lập trình Swift.",
    "Hãy mô tả ý nghĩa của thần thoại Hy Lạp.",
    "Hãy mô tả công dụng của cây xanh trong thành phố.",
    "Hãy mô tả quy trình phát triển phần mềm theo mô hình Agile.",
    "Hãy mô tả quá trình tiến hóa của loài người.",
    "Hãy mô tả ảnh hưởng của công nghệ thông tin đến cuộc sống hiện đại.",
    "Hãy mô tả quá trình quản lý dự án theo phương pháp PRINCE2.",
    "Hãy mô tả tầm quan trọng của việc duy trì sự an toàn và bảo mật thông tin trong hệ thống máy tính.",
    "Hãy mô tả quy trình phát triển sản phẩm từ ý tưởng đến sản phẩm thương mại."
  ];
  


var questionContainer4 = document.getElementById("nhom4");

questionBank4.forEach(function(question, index) {
  var questionElement = document.createElement("div");
  questionElement.innerHTML = "<p> " + (index + 1) + "." + question + "</p>";

  var answerElement = document.createElement("input");
  answerElement.type = "text";
  answerElement.name = "answer" + index;

  questionElement.appendChild(answerElement);
  questionContainer4.appendChild(questionElement);
});


var showButton = document.createElement("button");
showButton.innerHTML = "Hiển thị";
questionContainer4.appendChild(showButton);


showButton.addEventListener("click", function() {
  var userAnswers = [];
  var answerInputs = document.querySelectorAll("#nhom4 input[type=text]");
  answerInputs.forEach(function(input) {
    userAnswers.push(input.value);
  });

  var userAnswerContainer = document.createElement("div");
  userAnswerContainer.innerHTML = "<h3>Câu trả lời của bạn:</h3>";

  userAnswers.forEach(function(answer, index) {
    var answerElement = document.createElement("p");
    answerElement.innerHTML = (index + 1) + ". " + answer;
    userAnswerContainer.appendChild(answerElement);
  });

  questionContainer4.appendChild(userAnswerContainer);
});